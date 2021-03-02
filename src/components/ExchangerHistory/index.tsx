import { connect } from "react-redux";
import selectors from "../../redux/selectors";
import { ReduxState } from "../../redux/types";
import { historyEntry } from "../../types/history";
import State from "./exchanger-history.state";
import { IProps } from "./exchanger-history.types";

const ExchangerHistory = ({ historyList }: { historyList: historyEntry[] }) => {
	return <State props={{ historyList: historyList }} />;
};

export default connect((state: ReduxState) => ({
	historyList: selectors.history.GET_HISTORY_LIST(state),
}))(ExchangerHistory);
