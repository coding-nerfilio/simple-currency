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
import InputField from "../InputField";

const Layout = (props: {
	state: IState;
	handleExchangeOperation: () => void;
	handleInput: (type: Inputs, data: string) => void;
	changeCurrency: () => void;
}) => (
	<Flex flexDir="column" align="center">
		<Flex flexDir={["column", "column", "row"]}>
			<InputField
				placeholder={"Enter value"}
				field={props.state.firstCurrency}
				onChangeText={(e: any) => {
					props.handleInput(Inputs.firstCurrency_value, e.target.value);
				}}
				onChangeSelect={(e: any) => {
					props.handleInput(Inputs.firstCurrency_type, e.target.value);
				}}
			/>
			<Button onClick={props.changeCurrency}>Change currencies</Button>
			<InputField
				placeholder={"Result"}
				field={props.state.secondCurrency}
				onChangeSelect={(e: any) => {
					props.handleInput(Inputs.secondCurrency_type, e.target.value);
				}}
			/>
		</Flex>
		<Flex>
			<Button onClick={props.handleExchangeOperation}>Calculate</Button>
		</Flex>
	</Flex>
);

export default Layout;
