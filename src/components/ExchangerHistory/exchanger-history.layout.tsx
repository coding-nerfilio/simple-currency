import { Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
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
						<Text>{entry.source.currency}</Text>
						<Text>{entry.source.value}</Text>
					</Flex>
					<Flex flexDir="column" justify="center" align="center">
						<Text>{entry.destination.currency}</Text>
						<Text color="red">{entry.destination.value}</Text>
					</Flex>
				</Flex>
			))
		) : (
			<Text>No entries on history</Text>
		)}
	</Flex>
);

export default Layout;
