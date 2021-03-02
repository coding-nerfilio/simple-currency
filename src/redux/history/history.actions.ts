import { historyEntry } from "../../types/history";

const SET_HISTORY = {
	type: "history/SET_HISTORY",
	constructor: (historyList: historyEntry[]) => ({
		type: "history/SET_HISTORY",
		payload: historyList,
	}),
};

const DELETE_HISTORY = {
	type: "history/DELETE_HISTORY",
	constructor: () => ({ type: "history/DELETE_HISTORY" }),
};

const history = {
	SET_HISTORY,
	DELETE_HISTORY,
};

export default history;
