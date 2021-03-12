import { connect } from "react-redux";
import actions from "../../redux/actions";
import selectors from "../../redux/selectors";
import { ReduxState } from "../../redux/types";
import { IProps } from "./exchanger-history.types";
import lodeable from "@loadable/component";

const State = lodeable(() => import("./exchanger-history.state"));

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
