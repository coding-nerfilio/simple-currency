package com.codingnerfilio.simplecurrency.main;

import com.codingnerfilio.simplecurrency.main.entities.CurrencyRate;
import com.codingnerfilio.simplecurrency.main.entities.RateId;
import com.codingnerfilio.simplecurrency.main.services.CurrencyRateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SimpleCurrencyApplication {

	public static void main(String[] args) {
		SpringApplication.run(SimpleCurrencyApplication.class, args);
	}

}

