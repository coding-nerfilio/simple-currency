import { Button, Flex, Heading } from "@chakra-ui/react";
import * as React from "react";
import ExchangerHistory from "../ExchangerHistory";
import ExchangerInput from "../ExchangerInput";
import InfoButton from "../InfoButton";

const Layout = () => (
	<Flex flexDir="column" justify="center" align="center">
		<Flex justify="center">
			<Heading>Simple Currency</Heading>
			<InfoButton />
		</Flex>

		<ExchangerInput />
		<ExchangerHistory />
	</Flex>
);
export default Layout;
