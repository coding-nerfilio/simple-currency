import { Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { CurrencyFlag } from "react-currency-flags/dist/components";
import { historyEntry } from "../../types/history";

const Layout = (props: {
	historyList: historyEntry[];
	handleDeleteHistory: () => void;
}) => (
	<Flex flexDir="column" align="center">
		<Flex align="center" justify="center">
			<Text>History</Text>
			<Button onClick={props.handleDeleteHistory}>Del</Button>
		</Flex>

		{props.historyList.length > 0 ? (
			props.historyList.map((entry) => (
				<Flex bg="gray" justify="space-between" pt="1vh" pb="1vh">
					<Flex flexDir="column" justify="center" align="center">
						<Flex>
							<CurrencyFlag currency={entry.source.currency} size="md" />
							<Text>{entry.source.currency}</Text>
						</Flex>
						<Text>{entry.source.value}</Text>
					</Flex>
					<Flex flexDir="column" justify="center" align="center">
						<Flex>
							<CurrencyFlag currency={entry.destination.currency} size="md" />
							<Text>{entry.destination.currency}</Text>
						</Flex>
						<Text color="red">{entry.destination.value}</Text>
					</Flex>
				</Flex>
			))
		) : (
			<Text>Your convertions will be displayed here</Text>
		)}
	</Flex>
);

export default Layout;
