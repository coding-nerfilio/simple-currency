import React from "react";

import Currencies from "../../types/currencies";
import Layout from "./exchanger-input.layout";
import {
	changeCurrency,
	checkInputErrors,
	handleExchangeOperation,
	handleInput,
} from "./exchanger-input.logic";
import { Inputs, IProps, IState } from "./exchanger-input.types";

class State extends React.Component<IProps, IState> {
	constructor(props: any) {
		super(props);
		this.state = {
			firstCurrency: {
				value: "",
				error: false,
				errorText: [],
				currencyType: Currencies.UYU,
			},
			secondCurrency: {
				value: "",
				error: false,
				errorText: [],
				currencyType: Currencies.USD,
			},
		};
	}

	handleInput = (type: Inputs, data: string) => {
		this.setState(handleInput(type, data, this.state));
	};

	handleExchangeOperation = async () => {
		let { state, error } = checkInputErrors(this.state);
		this.setState(state);
		if (error) {
			return;
		}

		let result = await handleExchangeOperation(
			this.state,
			this.props.handleUpdateHistory
		);

		state.secondCurrency.value = result;

		this.setState(state);
	};

	changeCurrency = () => {
		this.setState(changeCurrency(this.state));
	};

	render() {
		return (
			<Layout
				state={this.state}
				handleInput={this.handleInput}
				handleExchangeOperation={this.handleExchangeOperation}
				changeCurrency={this.changeCurrency}
			/>
		);
	}
}

export default State;
