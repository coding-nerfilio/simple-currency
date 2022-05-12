import axios from "axios";
import { HEROKU_URL, LOCAL_URL } from "../constants";
import { ExchangeRequest, ExchangeResponse } from "../types";

axios.defaults.baseURL = process.env.NODE_ENV === "production" ? HEROKU_URL : LOCAL_URL;

const API = {
	doExchange: (data: ExchangeRequest) => axios.post<ExchangeResponse>("/exchange/", { ...data }),
};

export default API;
