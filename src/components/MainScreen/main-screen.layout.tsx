import { Flex } from "@chakra-ui/react";
import Header from "../Header";
import lodeable from "@loadable/component";

const ExchangerInput = lodeable(() => import("../ExchangerInput"));
const ExchangerHistory = lodeable(() => import("../ExchangerHistory"));

const Layout = () => (
	<Flex flexDir="column" overflow="hidden" h="100vh">
		<Header />
		<Flex
			mt="8vh"
			overflowY="auto"
			flexDir="column"
			pt="1vh"
			pl="1vw"
			pr="1vw"
			pb="2vh"
		>
			<ExchangerInput />
			<ExchangerHistory />
		</Flex>
	</Flex>
);
export default Layout;
