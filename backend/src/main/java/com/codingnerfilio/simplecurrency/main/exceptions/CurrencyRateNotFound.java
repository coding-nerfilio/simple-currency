package com.codingnerfilio.simplecurrency.main.exceptions;

public class CurrencyRateNotFound extends Exception{
    private String message;

    public CurrencyRateNotFound(){
        this.message = "Currency rate was not found on database";
    }

}
