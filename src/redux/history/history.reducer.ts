import storage from "../../storage";
import actions from "../actions";
import { HistoryReducer } from "./history.types";

const INITIAL_STATE: HistoryReducer = {
	historyList: storage.getExchangeHistory(),
};

const history = (state = INITIAL_STATE, action: any) => {
	switch (action.type) {
		case actions.history.SET_HISTORY.type:
			return {
				...state,
				historyList: action.payload,
			};
		default:
			return state;
	}
};

export default history;
