package com.codingnerfilio.simplecurrency.main.services;

import com.codingnerfilio.simplecurrency.main.entities.CurrencyRate;
import com.codingnerfilio.simplecurrency.main.payload.CurrencyRateRequest;

public interface ApiService {

    CurrencyRate fetchCurrencyRate(CurrencyRateRequest request);

}
