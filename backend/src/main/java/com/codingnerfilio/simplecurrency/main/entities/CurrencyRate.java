package com.codingnerfilio.simplecurrency.main.entities;

import com.codingnerfilio.simplecurrency.main.exceptions.CurrencyRateInvalid;
import com.codingnerfilio.simplecurrency.main.payload.CurrencyRateRequest;
import lombok.Data;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import java.util.Calendar;
import java.util.Date;

@Entity
@Data
public class CurrencyRate {

    @EmbeddedId
    private RateId id;

    private double baseToDestinationRate;
    private double destinationToBaseRate;

    private Date lastUpdate;

    public CurrencyRate() {
    }

    public CurrencyRate(String baseCurrency, String destinationCurrency, double baseToDestinationRate, double destinationToBaseRate, Date lastUpdate) {
        this.id = new RateId(baseCurrency,destinationCurrency);
        this.baseToDestinationRate = baseToDestinationRate;
        this.destinationToBaseRate = destinationToBaseRate;
        this.lastUpdate = lastUpdate;
    }

    public boolean isValid () throws CurrencyRateInvalid {
        Calendar calendar = Calendar.getInstance();
        Date now = calendar.getTime();
        calendar.setTime(lastUpdate);
        calendar.add(Calendar.HOUR_OF_DAY, 1);
        Date deadline = calendar.getTime();

        if(deadline.after(now)){
            return true;
        }else{
            throw new CurrencyRateInvalid();
        }
    }

    public double doExchange(CurrencyRateRequest request){
        if(request.getBaseCurrency().equals(id.getBaseCurrency())){
            return request.getBaseValue() / baseToDestinationRate;
        }else{
            return request.getBaseValue() / destinationToBaseRate;
        }
    }
}
