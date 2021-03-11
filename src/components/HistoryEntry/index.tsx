import { Flex, Text } from "@chakra-ui/layout";
import * as React from "react";
import { historyEntry } from "../../types/history";
import CurrencyFlag from "react-currency-flags";
const HistoryEntry = ({ entry }: { entry: historyEntry }) => (
	<Flex
		mb="15px"
		w={["60vw", null, null, "30vw"]}
		justify="center"
		align="center"
		bg="#edf2f7"
		pt="12px"
		pb="10px"
		border="#edbbf7 1px solid"
	>
		<Information currency={entry.source.currency} value={entry.source.value} />
		<Information
			currency={entry.destination.currency}
			value={entry.destination.value}
		/>
	</Flex>
);

const Information = ({
	currency,
	value,
}: {
	currency: string;
	value: string;
}) => (
	<Flex
		flexDir="column"
		align="center"
		justify="center"
		textAlign="center"
		w={["30vw", null, null, "15vw"]}
	>
		<CurrencyFlag currency={currency} />
		<Text
			textOverflow="ellipsis"
			overflow="hidden"
			overflowWrap="normal"
			w={["30vw", null, null, "15vw"]}
		>
			{value}
		</Text>
	</Flex>
);

export default HistoryEntry;
