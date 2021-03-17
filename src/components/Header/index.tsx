import { Flex, Text } from "@chakra-ui/layout";
import lodeable from "@loadable/component";

const InfoButton = lodeable(() => import("../InfoButton"));

const Header = () => (
  <Flex
    bg="#aa00aa"
    w="100vw"
    align="center"
    justify="center"
    h="7vh"
    position="fixed"
    top="0"
    zIndex="3"
  >
    <Text fontSize="3xl" color="white" textAlign="center" mr="10px">
      Simple Currency
    </Text>

    <InfoButton />
  </Flex>
);

export default Header;
