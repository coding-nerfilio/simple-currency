import Layout from "./exchanger-history.layout";
import { IProps } from "./exchanger-history.types";

const State = ({ props }: { props: IProps }) => {
  return <Layout historyList={props.historyList} />;
};

export default State;
