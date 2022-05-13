package com.codingnerfilio.simplecurrency.main.services;

import com.codingnerfilio.simplecurrency.main.entities.CurrencyRate;
import com.codingnerfilio.simplecurrency.main.entities.RateId;
import com.codingnerfilio.simplecurrency.main.exceptions.CurrencyRateInvalid;
import com.codingnerfilio.simplecurrency.main.exceptions.CurrencyRateNotFound;

public interface CurrencyRateService {

    CurrencyRate findById(RateId base) throws CurrencyRateNotFound, CurrencyRateInvalid;

    CurrencyRate saveRate(CurrencyRate rate);

}
