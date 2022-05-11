package com.codingnerfilio.simplecurrency.main.payload;

import lombok.Data;

@Data
public class CurrencyRateRequest {
    private String baseCurrency;
    private String destinationCurrency;
    private float baseValue;

}
