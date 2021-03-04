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

import MoneyTransfer from "../../assets/images/money-transfer.svg";
import { ChangeIcon, EqualIcon } from "../Icon";

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
			<Button size="xs" onClick={props.changeCurrency}>
				<ChangeIcon />
			</Button>
			<InputField
				placeholder={"Result"}
				field={props.state.secondCurrency}
				onChangeSelect={(e: any) => {
					props.handleInput(Inputs.secondCurrency_type, e.target.value);
				}}
			/>
		</Flex>
		<Flex>
			<Button size="xs" onClick={props.handleExchangeOperation}>
				<EqualIcon />
			</Button>
		</Flex>
	</Flex>
);

export default Layout;
