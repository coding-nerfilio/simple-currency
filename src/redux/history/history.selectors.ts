import { ReduxState } from "../types";

const GET_HISTORY_LIST = (state: ReduxState) => state.history.historyList;

const history = {
	GET_HISTORY_LIST,
};

export default history;
