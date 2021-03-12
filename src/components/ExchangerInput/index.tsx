import { connect } from "react-redux";
import actions from "../../redux/actions";
import { historyEntry } from "../../types/history";
import { IProps } from "./exchanger-input.types";
import lodeable from "@loadable/component";

const State = lodeable(() => import("./exchanger-input.state"));

const ExchangerInput = (props: IProps) => (
	<State handleUpdateHistory={props.handleUpdateHistory} />
);

export default connect(null, (dispatch) => ({
	handleUpdateHistory: (historyList: historyEntry[]) =>
		dispatch(actions.history.SET_HISTORY.constructor(historyList)),
}))(ExchangerInput);
