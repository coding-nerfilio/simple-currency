import React, { Component } from "react";
import storage from "../../storage";
import Layout from "./exchanger-history.layout";
import { IProps } from "./exchanger-history.types";

const State = ({ props }: { props: IProps }) => {
	const handleDeleteHistory = () => {
		storage.clearExchangeHistory();
		props.deleteHistory();
	};
	return (
		<Layout
			historyList={props.historyList}
			handleDeleteHistory={handleDeleteHistory}
		/>
	);
};

export default State;
