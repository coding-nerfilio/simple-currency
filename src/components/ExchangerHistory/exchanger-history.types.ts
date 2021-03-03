import { historyEntry } from "../../types/history";

export type IProps = {
	historyList: historyEntry[];
	deleteHistory: () => any;
};
