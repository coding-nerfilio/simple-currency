import { historyEntry } from "../../types/history";

const SET_HISTORY = {
	type: "history/SET_HISTORY",
	constructor: (historyList: historyEntry[]) => ({
		type: "history/SET_HISTORY",
		payload: historyList,
	}),
};

const history = {
	SET_HISTORY,
};

export default history;
