package com.codingnerfilio.simplecurrency.main.controllers;

import com.codingnerfilio.simplecurrency.main.entities.CurrencyRate;
import com.codingnerfilio.simplecurrency.main.entities.RateId;
import com.codingnerfilio.simplecurrency.main.exceptions.CurrencyRateInvalid;
import com.codingnerfilio.simplecurrency.main.exceptions.CurrencyRateNotFound;
import com.codingnerfilio.simplecurrency.main.payload.CurrencyRateRequest;
import com.codingnerfilio.simplecurrency.main.payload.CurrencyRateResponse;
import com.codingnerfilio.simplecurrency.main.services.ApiService;
import com.codingnerfilio.simplecurrency.main.services.CurrencyRateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;


@CrossOrigin(origins = "*", maxAge = 3600)
@Controller
@RequestMapping("/api/exchange")
public class CurrencyRateController {

    private ApiService apiService;
    private CurrencyRateService currencyRateService;
    private Environment env;

    @Autowired
    public void setApiService(ApiService apiService){
        this.apiService = apiService;
    }

    @Autowired
    public void setCurrencyRateService(CurrencyRateService currencyRateService){
        this.currencyRateService = currencyRateService;
    }

    @Autowired
    public void setEnvironment(Environment env){
        this.env = env;
    }

    @PostMapping("/")
    public ResponseEntity<CurrencyRateResponse> doExchange(@RequestBody CurrencyRateRequest request){
        CurrencyRate currencyRate;
        try {
            currencyRate = currencyRateService.findById(new RateId(request));
        }catch (CurrencyRateInvalid | CurrencyRateNotFound e) {
            currencyRate = apiService.fetchCurrencyRate(request);
        }
        return ResponseEntity.ok(new CurrencyRateResponse(request, currencyRate.doExchange(request)));
    }

}
