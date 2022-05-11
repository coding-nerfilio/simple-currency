package com.codingnerfilio.simplecurrency.main.entities;

import com.codingnerfilio.simplecurrency.main.payload.CurrencyRateRequest;
import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;

@Embeddable
@Data
public class RateId implements Serializable {
    @Column(name = "base")
    private String baseCurrency;

    @Column(name = "destination")
    private String destinationCurrency;

    public RateId () {}

    public RateId (String baseCurrency, String destinationCurrency){
        this.baseCurrency = baseCurrency;
        this.destinationCurrency = destinationCurrency;
    }

    public RateId(CurrencyRateRequest request, Boolean reverse){
        this.baseCurrency = !reverse ? request.getBaseCurrency() : request.getDestinationCurrency();
        this.destinationCurrency =  !reverse ? request.getDestinationCurrency() : request.getBaseCurrency();
    }
}
