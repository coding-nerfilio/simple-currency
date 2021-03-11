import { Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import CurrencyFlag from "react-currency-flags/dist/components";
import { historyEntry } from "../../types/history";
import HistoryEntry from "../HistoryEntry";

const Layout = (props: {
	historyList: historyEntry[];
	handleDeleteHistory: () => void;
}) => (
	<Flex flexDir="column" align="center" mt="30px">
		{props.historyList.map((entry) => (
			<HistoryEntry entry={entry} />
		))}
	</Flex>
);

export default Layout;
