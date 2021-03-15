import { Flex } from "@chakra-ui/react";
import { historyEntry } from "../../types/history";
import lodeable from "@loadable/component";

const HistoryEntry = lodeable(() => import("../HistoryEntry"));

const Layout = (props: {
  historyList: historyEntry[];
  handleDeleteHistory: () => void;
}) => (
  <Flex flexDir="column" align="center" mt="30px">
    {props.historyList.map((entry) => (
      <HistoryEntry
        entry={entry}
        key={
          Number(entry.destination.value) +
          Number(entry.source.value) +
          entry.destination.currency.length -
          entry.source.currency.length
        }
      />
    ))}
  </Flex>
);

export default Layout;
