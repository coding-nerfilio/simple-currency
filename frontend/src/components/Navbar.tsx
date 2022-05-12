import { Button, Flex, Image, Text } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router";

const NavBar = () => {
	const pathname = useLocation().pathname;
	const navigate = useNavigate();

	return (
		<Flex
			background="azure"
			p="30px"
			alignItems="center"
			justifyContent="space-between"
			position={"sticky"}
			height={"7vh"}
			maxW={"100%"}
		>
			<Flex alignItems={"center"}>
				<Image src={require("../assets/logo512.png")} w="50px" />
				<Text ml={"2"} fontWeight="bold" color={"#e00f9b"}>
					Simple Currency
				</Text>
			</Flex>
			{pathname === "/" && (
				<Flex>
					<Button variant={"outline"} colorScheme={"pink"} onClick={() => navigate("/exchange")}>
						Try Now!
					</Button>
				</Flex>
			)}
		</Flex>
	);
};

export default NavBar;
