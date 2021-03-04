import * as React from "react";
import {
	InputGroup,
	Input,
	InputRightElement,
	Select,
	Text,
	Flex,
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
	<Flex flexDir="column" align="center">
		<Flex>
			<Text>{field.currencyType.name}</Text>
		</Flex>
		<Flex>
			<CurrencyFlag currency={field.currencyType.symbol} size="md" />
			{onChangeText !== undefined && (
				<Input
					placeholder={placeholder}
					value={field.value}
					onChange={(e) => {
						onChangeText(e);
					}}
					isInvalid={field.error}
					borderRadius="0"
					borderRightWidth="0"
				/>
			)}

			<Select
				borderRadius="0"
				borderLeftWidth="0"
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

/*<InputGroup>
		{onChangeText == undefined ? (
			<Text>{textValue == "" ? placeholder : textValue}</Text>
		) : (
			<Input

			/>
		)}

		<InputRightElement>
			<Select>
				
			</Select>
		</InputRightElement>
		{errorTexts.map((text) => (
			<div>{text}</div>
		))}
	</InputGroup>

*/
