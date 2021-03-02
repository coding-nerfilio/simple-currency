import { Currency } from "./currencies";

type historyEntryField = {
	currency: string;
	value: string;
};

export type historyEntry = {
	source: historyEntryField;
	destination: historyEntryField;
};
