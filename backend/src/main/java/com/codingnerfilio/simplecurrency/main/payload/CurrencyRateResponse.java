package com.codingnerfilio.simplecurrency.main.payload;

import lombok.Data;

@Data
public class CurrencyRateResponse {
    private String baseCurrency;
    private String destinationCurrency;
    private double baseValue;
    private double destinationValue;

    public CurrencyRateResponse(CurrencyRateRequest request, double destinationValue){
        this.baseCurrency = request.getBaseCurrency();
        this.destinationCurrency = request.getDestinationCurrency();
        this.baseValue = request.getBaseValue();
        this.destinationValue = destinationValue;
    }

}
