package com.codingnerfilio.simplecurrency.main.services;

import com.codingnerfilio.simplecurrency.main.entities.CurrencyRate;
import com.codingnerfilio.simplecurrency.main.entities.RateId;
import com.codingnerfilio.simplecurrency.main.exceptions.CurrencyRateInvalid;
import com.codingnerfilio.simplecurrency.main.exceptions.CurrencyRateNotFound;
import com.codingnerfilio.simplecurrency.main.repositories.CurrencyRateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CurrencyRateServiceImpl implements  CurrencyRateService{

    private CurrencyRateRepository repository;

    @Autowired
    public void setCurrencyRateRepository(CurrencyRateRepository repository){
        this.repository = repository;
    }

    @Override
    public CurrencyRate findById(RateId id) throws CurrencyRateNotFound, CurrencyRateInvalid {
        Optional<CurrencyRate> data = repository.findById(id)
                .or(()->repository.findById(id.reverse()));
        if(data.isEmpty()) {throw new CurrencyRateNotFound();}
        data.get().isValid();
        return data.get();
    }

    @Override
    public CurrencyRate saveRate(CurrencyRate rate) {
        return repository.save(rate);
    }
}
