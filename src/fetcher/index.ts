import { Currency } from "../types/currencies";

class Fetcher {
	API_URL: string;
	API_KEY: string;
	TIMEOUT: number;

	constructor() {
		this.API_KEY = process.env.REACT_APP_CURRENCYLAYER_API_KEY as string;
		this.API_URL = "http://api.currencylayer.com/live";
		this.TIMEOUT = 5000;
	}

	getExchangeRate = async (
		baseCurrency: Currency,
		destinationCurrency: Currency
	): Promise<FetcherResult> => {
		let URL =
			this.API_URL +
			"?access_key=" +
			this.API_KEY +
			"&currencies=" +
			baseCurrency.symbol +
			"," +
			destinationCurrency.symbol;

		let result = await dispatchFetch(URL);
		if (result.data != null) {
			result.data = result.data.quotes;
		}
		return result;
	};
}

const dispatchFetch = async (url: string): Promise<FetcherResult> => {
	let fetchResponse = undefined;

	try {
		fetchResponse = await fetch(url);
	} catch (error) {
		return { data: null, status: FetcherResponse.network_error };
	}

	if (fetchResponse.status >= 400 && fetchResponse.status < 600) {
		return { data: null, status: FetcherResponse.bad_response };
	}

	return {
		data: await fetchResponse.json(),
		status: FetcherResponse.ok,
	};
};

export enum FetcherResponse {
	network_error,
	bad_response,
	ok,
}

type FetcherResult = {
	data: any | null;
	status: FetcherResponse;
};

export default new Fetcher();
