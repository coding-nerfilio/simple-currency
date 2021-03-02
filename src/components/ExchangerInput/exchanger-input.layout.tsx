import React from "react";
import {
	Flex,
	Input,
	Button,
	InputGroup,
	InputRightAddon,
	Select,
	InputRightElement,
	Text,
} from "@chakra-ui/react";
import { Inputs, IState } from "./exchanger-input.types";
import Currencies from "../../types/currencies";

const Layout = (props: {
	state: IState;
	handleExchangeOperation: () => void;
	handleInput: (type: Inputs, data: string) => void;
	changeCurrency: () => void;
}) => (
	<Flex flexDir="column">
		<Flex>
			<InputGroup>
				<Input
					placeholder={props.state.firstCurrency.currencyType.name}
					value={props.state.firstCurrency.value}
					onChange={(e) => {
						props.handleInput(Inputs.firstCurrency_value, e.target.value);
					}}
					isInvalid={props.state.firstCurrency.error}
				/>
				<InputRightElement>
					<Select
						value={props.state.firstCurrency.currencyType.symbol}
						onChange={(e) =>
							props.handleInput(Inputs.firstCurrency_type, e.target.value)
						}
					>
						{Object.keys(Currencies).map((key) => (
							<option value={key}>{key}</option>
						))}
					</Select>
				</InputRightElement>
				{props.state.firstCurrency.errorText.map((text) => (
					<div>{text}</div>
				))}
			</InputGroup>
			<InputGroup>
				<Input
					value={props.state.secondCurrency.value}
					placeholder={props.state.secondCurrency.currencyType.name}
				/>

				<InputRightElement>
					<Select
						value={props.state.secondCurrency.currencyType.symbol}
						onChange={(e) =>
							props.handleInput(Inputs.secondCurrency_type, e.target.value)
						}
					>
						{Object.keys(Currencies).map((key) => (
							<option value={key}>{key}</option>
						))}
					</Select>
				</InputRightElement>
			</InputGroup>
		</Flex>
		<Flex>
			<Button onClick={props.handleExchangeOperation}>Calculate</Button>
			<Button onClick={props.changeCurrency}>Change currencies</Button>
		</Flex>
	</Flex>
);

export default Layout;
