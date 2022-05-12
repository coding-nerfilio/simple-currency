package com.codingnerfilio.simplecurrency.main.controllers;

import com.codingnerfilio.simplecurrency.main.entities.CurrencyRate;
import com.codingnerfilio.simplecurrency.main.entities.RateId;
import com.codingnerfilio.simplecurrency.main.exceptions.CurrencyRateInvalid;
import com.codingnerfilio.simplecurrency.main.exceptions.CurrencyRateNotFound;
import com.codingnerfilio.simplecurrency.main.payload.CurrencyRateRequest;
import com.codingnerfilio.simplecurrency.main.payload.CurrencyRateResponse;
import com.codingnerfilio.simplecurrency.main.services.CurrencyRateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.core.env.Environment;
import org.springframework.http.MediaType;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.client.RestTemplate;

import java.util.Calendar;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@CrossOrigin(origins = "*", maxAge = 3600)
@Controller
@RequestMapping("/api/exchange")
public class CurrencyRateController {

    private CurrencyRateService currencyRateService;

    @Autowired
    private Environment env;


    @Autowired
    public void setCurrencyRateService(CurrencyRateService currencyRateService){
        this.currencyRateService = currencyRateService;
    }

    @PostMapping("/")
    public ResponseEntity<CurrencyRateResponse> doExchange(@RequestBody CurrencyRateRequest request){
        Optional<CurrencyRate> currencyRate;
        try {
            //Check if exchange information exists on system (both ways) or needs to be fetched

            currencyRate = currencyRateService
                    .findById(new RateId(request, false))
                    .or(()->currencyRateService.findById(new RateId(request, true)));
            if(currencyRate.isEmpty()) {throw new CurrencyRateNotFound();}
            currencyRate.get().isValid();
        }catch (CurrencyRateInvalid | CurrencyRateNotFound e) {
            return ResponseEntity.ok(new CurrencyRateResponse(request, fetchCurrencyRate(request)));
        }

        return ResponseEntity.ok(new CurrencyRateResponse(request, currencyRate.get().doExchange(request)));
    }

    public double fetchCurrencyRate(CurrencyRateRequest request){
        ParameterizedTypeReference<HashMap<String, Object>> responseType =
                new ParameterizedTypeReference<>() {
                };
        RequestEntity<Void> apiRequest = RequestEntity
                .get(env.getProperty("API_URL")+"to="+request.getDestinationCurrency()+"&from="+request.getBaseCurrency()+"&amount="+request.getBaseValue())
                .accept(MediaType.APPLICATION_JSON)
                .header("apiKey",env.getProperty("API_KEY"))
                .build();
        RestTemplate restTemplate = new RestTemplate();
        Map<String, Object> apiResponse = restTemplate.exchange(apiRequest, responseType).getBody();
        double rate = (double) (((Map<String, Object>)apiResponse.get("info")).get("rate"));
        currencyRateService.saveRate(new CurrencyRate(request.getBaseCurrency(), request.getDestinationCurrency(), rate, 1/rate, Calendar.getInstance().getTime()));

        return (double) apiResponse.get("result");
    }

}
