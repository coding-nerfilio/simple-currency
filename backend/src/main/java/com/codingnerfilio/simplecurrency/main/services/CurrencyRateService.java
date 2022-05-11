package com.codingnerfilio.simplecurrency.main.services;

import com.codingnerfilio.simplecurrency.main.entities.CurrencyRate;
import com.codingnerfilio.simplecurrency.main.entities.RateId;

import java.util.Optional;

public interface CurrencyRateService {

    Optional<CurrencyRate> findById(RateId base);

    CurrencyRate saveRate(CurrencyRate rate);

}
