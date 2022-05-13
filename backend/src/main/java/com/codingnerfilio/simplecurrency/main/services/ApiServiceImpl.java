package com.codingnerfilio.simplecurrency.main.services;

import com.codingnerfilio.simplecurrency.main.entities.CurrencyRate;
import com.codingnerfilio.simplecurrency.main.payload.CurrencyRateRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.core.env.Environment;
import org.springframework.http.MediaType;
import org.springframework.http.RequestEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Calendar;
import java.util.HashMap;
import java.util.Map;

@Service
public class ApiServiceImpl implements ApiService {

    private CurrencyRateService currencyRateService;
    private Environment env;

    @Autowired
    public void setCurrencyRateService(CurrencyRateService currencyRateService){
        this.currencyRateService = currencyRateService;
    }

    @Autowired
    public void setEnvironment(Environment env){
        this.env = env;
    }

    private ParameterizedTypeReference<HashMap<String, Object>> responseType =
            new ParameterizedTypeReference<>() {
            };

    @Override
    public CurrencyRate fetchCurrencyRate(CurrencyRateRequest request){
        RequestEntity<Void> apiRequest = RequestEntity
                .get(env.getProperty("API_URL")+"to="+request.getDestinationCurrency()+"&from="+request.getBaseCurrency()+"&amount="+request.getBaseValue())
                .accept(MediaType.APPLICATION_JSON)
                .header("apiKey",env.getProperty("API_KEY"))
                .build();

        RestTemplate restTemplate = new RestTemplate();
        Map<String, Object> apiResponse = restTemplate.exchange(apiRequest, responseType).getBody();

        double rate = (double) (((Map<String, Object>)apiResponse.get("info")).get("rate"));
        CurrencyRate currencyRate = new CurrencyRate(request.getBaseCurrency(), request.getDestinationCurrency(), rate, 1/rate, Calendar.getInstance().getTime());
        currencyRateService.saveRate(currencyRate);

        return currencyRate;
    }
}
