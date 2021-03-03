import fetcher, { FetcherResponse } from "../../fetcher";
import storage from "../../storage";
import Currencies from "../../types/currencies";
import { historyEntry } from "../../types/history";
import { Inputs, IState } from "./exchanger-input.types";

export const handleInput = (type: Inputs, data: string, state: IState) => {
	switch (type) {
		case Inputs.firstCurrency_type:
			state.firstCurrency.currencyType = getKeyValue(Currencies, data);
			return state;
		case Inputs.firstCurrency_value:
			state.firstCurrency.value = data;
			return state;
		case Inputs.secondCurrency_type:
			state.secondCurrency.currencyType = getKeyValue(Currencies, data);
			return state;
		case Inputs.secondCurrency_value:
			state.secondCurrency.value = data;
			return state;
		default:
			return state;
	}
};

export const changeCurrency = (state: IState): IState => {
	let temp = state.firstCurrency.currencyType;
	state.firstCurrency.currencyType = state.secondCurrency.currencyType;
	state.secondCurrency.currencyType = temp;
	return state;
};

export const checkInputErrors = (
	state: IState
): { state: IState; error: boolean } => {
	let error = false;

	state.firstCurrency.error = false;
	state.firstCurrency.errorText = [];

	if (state.firstCurrency.value == "") {
		state.firstCurrency.error = true;
		error = true;
		state.firstCurrency.errorText.push("Empty");
	}

	if (isNaN(Number(state.firstCurrency.value))) {
		state.firstCurrency.error = true;
		error = true;
		state.firstCurrency.errorText.push("NAN");
	}

	return { state, error };
};

export const handleExchangeOperation = async (
	state: IState,
	updateHistory: (historyList: historyEntry[]) => any
): Promise<string> => {
	let currencyRates = await fetcher.getExchangeRate(
		state.firstCurrency.currencyType,
		state.secondCurrency.currencyType
	);

	if (currencyRates.data == null) {
		console.log("Error", currencyRates.status);
		switch (currencyRates.status) {
			case FetcherResponse.bad_response:
				return "Bad response from server";
			case FetcherResponse.network_error:
				return "Network error";
			default:
				return "Error";
		}
	}

	let historyEntry: historyEntry = {
		source: {
			currency: state.firstCurrency.currencyType.symbol,
			value: state.firstCurrency.value,
		},
		destination: {
			currency: state.secondCurrency.currencyType.symbol,
			value: (
				(Number(state.firstCurrency.value) /
					currencyRates.data["USD" + state.firstCurrency.currencyType.symbol]) *
				currencyRates.data["USD" + state.secondCurrency.currencyType.symbol]
			).toFixed(3),
		},
	};

	storage.addToExchangeHistory(historyEntry);
	updateHistory(storage.getExchangeHistory());

	return historyEntry.destination.value;
};

const getKeyValue = (obj: any, key: any) => obj[key];
