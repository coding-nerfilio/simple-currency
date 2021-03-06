import { Flex } from "@chakra-ui/react";
import { historyEntry } from "../../types/history";
import lodeable from "@loadable/component";

const HistoryEntry = lodeable(() => import("../HistoryEntry"));

const Layout = (props: { historyList: historyEntry[] }) => (
  <Flex flexDir="column" align="center" mt="30px">
    {props.historyList.map((entry) => (
      <HistoryEntry entry={entry} key={entry.timestamp} />
    ))}
  </Flex>
);

export default Layout;
