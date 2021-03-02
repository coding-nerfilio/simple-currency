import { Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { historyEntry } from "../../types/history";
import { IState } from "./exchanger-history.types";
const Layout = (props: {
	historyList: historyEntry[];
	handleDeleteHistory: () => void;
}) => (
	<Flex flexDir="column">
		<Button onClick={props.handleDeleteHistory}>Del</Button>
		{props.historyList.map((entry) => (
			<Flex>
				<Flex flexDir="column">
					<Text>{entry.source.currency}</Text>
					<Text>{entry.source.value}</Text>
				</Flex>
				<Flex flexDir="column">
					<Text>{entry.destination.currency}</Text>
					<Text>{entry.destination.value}</Text>
				</Flex>
			</Flex>
		))}
	</Flex>
);

export default Layout;
