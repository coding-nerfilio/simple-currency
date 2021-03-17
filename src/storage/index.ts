import { historyEntry } from "../types/history";

class Storage {
  constructor() {
    if (localStorage.getItem("usingStorage") === null) {
      setDefaultLocalStorage();
    }
  }

  setCurrentLanguage = (language: string) => {
    localStorage.setItem("language", language);
  };

  getCurrentLanguage = () => {
    return localStorage.getItem("language");
  };

  getExchangeHistory = () => {
    return JSON.parse(localStorage.getItem("history") as string);
  };

  addToExchangeHistory = (entry: historyEntry) => {
    let list = this.getExchangeHistory();
    if (list.length > 5) {
      list.pop();
    }
    list.unshift(entry);
    localStorage.setItem("history", JSON.stringify(list));
  };
}

const setDefaultLocalStorage = () => {
  localStorage.setItem("usingStorage", " ");
  localStorage.setItem("language", "en");
  localStorage.setItem("history", JSON.stringify([]));
};

export default new Storage();
