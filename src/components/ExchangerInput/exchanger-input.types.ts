import { Currency } from "../../types/currencies";

export enum Inputs {
	firstCurrency_value,
	firstCurrency_type,
	secondCurrency_value,
	secondCurrency_type,
}

type CurrencyInput = {
	value: string;
	error: boolean;
	errorText: string[];
	currencyType: Currency;
};

export type IState = {
	firstCurrency: CurrencyInput;
	secondCurrency: CurrencyInput;
};

export type IProps = {};
