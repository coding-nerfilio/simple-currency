import { historyEntry } from "../../types/history";

export type IState = {
	historyList: historyEntry[];
	update: number;
};

export type IProps = {
	historyList: historyEntry[];
	deleteHistory: () => any;
};
