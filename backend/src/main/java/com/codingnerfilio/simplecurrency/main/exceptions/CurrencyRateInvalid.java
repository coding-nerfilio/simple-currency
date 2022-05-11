package com.codingnerfilio.simplecurrency.main.exceptions;

public class CurrencyRateInvalid extends Exception{
    private String message;

    public CurrencyRateInvalid(){
        this.message = "Currency rate is too old";
    }
}
