import { Flex, Text } from "@chakra-ui/layout";
import { historyEntry } from "../../types/history";
import lodeable from "@loadable/component";
import MotionBox from "../MotionBox";

const CurrencyFlag = lodeable(() => import("react-currency-flags"));

const HistoryEntry = ({ entry }: { entry: historyEntry }) => (
  <MotionBox
    display="flex"
    mb="15px"
    w={["60vw", null, null, "30vw"]}
    justify="center"
    align="center"
    bg="#edf2f7"
    pt="12px"
    pb="10px"
    border="#edbbf7 1px solid"
    animate={{ scale: "1" }}
  >
    <Information currency={entry.source.currency} value={entry.source.value} />
    <Information
      currency={entry.destination.currency}
      value={entry.destination.value}
    />
  </MotionBox>
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
