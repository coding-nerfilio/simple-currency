type historyEntryField = {
  currency: string;
  value: string;
};

export type historyEntry = {
  source: historyEntryField;
  destination: historyEntryField;
  timestamp: string;
};
