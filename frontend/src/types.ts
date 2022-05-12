type ExchangeRequest = {
	baseCurrency: string;
	destinationCurrency: string;
	baseValue: number;
};

type ExchangeResponse = {
	baseCurrency: string;
	destinationCurrency: string;
	baseValue: number;
	destinationValue: number;
};

export type { ExchangeRequest, ExchangeResponse };
