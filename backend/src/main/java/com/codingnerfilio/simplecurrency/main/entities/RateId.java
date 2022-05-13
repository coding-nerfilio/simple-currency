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

    public RateId(CurrencyRateRequest request){
        this.baseCurrency = request.getBaseCurrency();
        this.destinationCurrency =  request.getDestinationCurrency();
    }

    public RateId reverse(){
        String temp = this.baseCurrency;
        this.baseCurrency = this.destinationCurrency;
        this.destinationCurrency = temp;
        return this;
    }
}
