import * as React from "react";
import {
	InputGroup,
	Input,
	InputRightElement,
	Select,
	Text,
	Flex,
	InputLeftElement,
} from "@chakra-ui/react";
import Currencies, { Currency } from "../../types/currencies";
import { CurrencyInput } from "../ExchangerInput/exchanger-input.types";
import CurrencyFlag from "react-currency-flags";

const InputField = ({
	field,
	onChangeText,
	onChangeSelect,
	placeholder,
}: {
	field: CurrencyInput;
	onChangeText?: any;
	onChangeSelect: any;
	placeholder: string;
}) => (
	<Flex flexDir="column" align="center" mb="10px" justify="center">
		<Flex align="center" justify="center">
			<InputGroup w="70%">
				<InputLeftElement>
					<CurrencyFlag currency={field.currencyType.symbol} size="md" />
				</InputLeftElement>
				<Input
					placeholder={placeholder}
					value={field.value}
					onChange={(e) => {
						if (onChangeText !== undefined) {
							onChangeText(e);
						}
					}}
					isInvalid={field.error}
					borderRadius="0"
					borderRightWidth="0"
					style={{
						caretColor: onChangeText === undefined ? "transparent" : "black",
					}}
				/>
			</InputGroup>

			<Select
				borderRadius="0"
				borderLeftWidth="0"
				w="%30"
				value={field.currencyType.symbol}
				onChange={(e) => onChangeSelect(e)}
			>
				{Object.keys(Currencies).map((key) => (
					<option value={key}>{key}</option>
				))}
			</Select>
		</Flex>
	</Flex>
);

export default InputField;
