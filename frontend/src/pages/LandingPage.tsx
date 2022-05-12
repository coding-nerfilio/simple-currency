import { Button, Flex, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router";

const AppStore = require("../assets/app-store.svg").ReactComponent;
const GooglePlay = require("../assets/google-play.svg").ReactComponent;
/*<Flex flexDirection={"row"} justifyContent="center" alignItems={"center"}>
						<GooglePlay style={{ width: "40%", height: "100px", marginTop: "1.5px", marginRight: "10px" }} />
						<AppStore style={{ width: "40%", height: "150px" }} />
					</Flex>*/
const LandingPage = () => {
	const navigate = useNavigate();
	return (
		<>
			<Flex
				flexDirection={["column", "column", "row"]}
				justifyContent={["center", null, "space-between"]}
				alignItems="center"
				h={["80vh", "95vh"]}
				background="#e7008a"
				px={"10"}
			>
				<Heading
					w={["100%", "100%", "40%"]}
					pb={["10%"]}
					mt={[null, 20]}
					mb={[10, 5, null]}
					fontSize={["2xl", "3xl", "4xl", "6xl"]}
					textAlign={["center"]}
					fontWeight="medium"
					color={"white"}
				>
					Obtain the most updated exchange rates of the market{" "}
					<Text mt="3" fontWeight={"extrabold"}>
						EVERYWHERE.
					</Text>
				</Heading>
				<Flex
					w={["100%", "100%", "40%"]}
					mt={[null, null, "10vh"]}
					direction="column"
					alignItems="center"
					justifyContent="center"
				>
					<Image src={require("../assets/devices.png")} />
				</Flex>
			</Flex>
			<Flex background={"#7d00a3"} flexDirection="column" px={0}>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1309 320" style={{ maxWidth: "100%" }}>
					<path
						fill="#e7008a"
						fill-opacity="1"
						d="M0,224L80,186.7C160,149,320,75,480,74.7C640,75,800,149,960,176C1120,203,1280,181,1360,170.7L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
					></path>
				</svg>
				<Heading textAlign={"center"} color="white" fontWeight={"extrabold"} fontSize="5xl" mt="-1vh" mb="2vh">
					The World's #1 trusted currency exchanger.
				</Heading>
				<Text textAlign={"center"} color="white" fontWeight="light" fontSize={"3xl"} mb="5vh">
					Know our clients.
				</Text>
				<SimpleGrid
					columns={[3, 4, 6]}
					spacing="40px"
					my="10vh"
					mx="10vw"
					justifyItems={"center"}
					alignItems="center"
					alignContent={"center"}
				>
					{Array.from({ length: 12 }, (_, i) => i + 1).map((v) => (
						<Image src={require(`../assets/logo${v}.png`)} w="60px" filter={"grayscale(100) brightness(100)"} />
					))}
				</SimpleGrid>
			</Flex>
			<Flex background={"#f10ad9"} flexDirection="column" alignItems={"center"} height={"100vh"}>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
					<path
						fill="#7d00a3"
						fill-opacity="1"
						d="M0,0L26.7,10.7C53.3,21,107,43,160,96C213.3,149,267,235,320,240C373.3,245,427,171,480,133.3C533.3,96,587,96,640,96C693.3,96,747,96,800,85.3C853.3,75,907,53,960,90.7C1013.3,128,1067,224,1120,218.7C1173.3,213,1227,107,1280,69.3C1333.3,32,1387,64,1413,80L1440,96L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"
					></path>
				</svg>
				<Heading textAlign={"center"} color="white" fontWeight={"extrabold"} fontSize="5xl" mt="5vh" mb="2vh">
					Forget about misleading conversions and unexpected surprises.
				</Heading>
				<Text textAlign={"center"} color="white" fontWeight="light" fontSize={"3xl"} mb="5vh">
					Everything it's under your control.
				</Text>
				<Button variant="solid" colorScheme="purple" width={"fit-content"} onClick={() => navigate("/exchange")}>
					Let me try it now!
				</Button>
			</Flex>
		</>
	);
};

export default LandingPage;

/*	<Flex flexDirection={"row"} justifyContent="center" alignItems={"center"}>
						<GooglePlay style={{ width: "20%", height: "100px", marginTop: "1.5px", marginRight: "10px" }} />
						<AppStore style={{ width: "20%", height: "150px" }} />
					</Flex>*/
