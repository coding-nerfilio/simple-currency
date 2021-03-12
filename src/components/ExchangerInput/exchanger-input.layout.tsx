import React from "react";
import { Flex, Button } from "@chakra-ui/react";
import { Inputs, IState } from "./exchanger-input.types";
import InputField from "../InputField";
import { ChangeIcon } from "../Icon";

const Layout = (props: {
	state: IState;
	handleExchangeOperation: () => void;
	handleInput: (type: Inputs, data: string) => void;
	changeCurrency: () => void;
}) => (
	<Flex flexDir="column" align="center">
		<Flex flexDir="column" align="center" justify="center">
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

			<InputField
				placeholder={"Result"}
				field={props.state.secondCurrency}
				onChangeSelect={(e: any) => {
					props.handleInput(Inputs.secondCurrency_type, e.target.value);
				}}
			/>

			<Flex justify="center" align="center">
				<Button
					size="sm"
					onClick={props.changeCurrency}
					rounded="none"
					mr="20px"
					aria-label="Change currencies"
				>
					<ChangeIcon />
				</Button>
				<Button
					size="sm"
					rounded="none"
					onClick={props.handleExchangeOperation}
					aria-label="Convert"
				>
					CONVERT
				</Button>
			</Flex>
		</Flex>
	</Flex>
);

export default Layout;
