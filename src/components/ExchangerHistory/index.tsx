import { connect } from "react-redux";
import actions from "../../redux/actions";
import selectors from "../../redux/selectors";
import { ReduxState } from "../../redux/types";
import State from "./exchanger-history.state";
import { IProps } from "./exchanger-history.types";

const ExchangerHistory = (props: IProps) => {
	return (
		<State
			props={{
				historyList: props.historyList,
				deleteHistory: props.deleteHistory,
			}}
		/>
	);
};

export default connect(
	(state: ReduxState) => ({
		historyList: selectors.history.GET_HISTORY_LIST(state),
	}),
	(dispatch) => ({
		deleteHistory: () => dispatch(actions.history.DELETE_HISTORY.constructor()),
	})
)(ExchangerHistory);

/*

{
	historyList,
	deleteHistory,
}: {
	historyList: historyEntry[];
	deleteHistory: () => any;
}
*/
