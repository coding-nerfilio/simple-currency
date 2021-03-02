import Layout from "./main-screen.layout";
import * as React from "react";

const State = () => {
	const [updateHistory, setUpdateHistory] = React.useState(0);

	const handleUpdateHistory = () => {
		setUpdateHistory(updateHistory + 1);
		console.log("dou");
	};

	return (
		<Layout
			handleUpdateHistory={handleUpdateHistory}
			updateHistory={updateHistory}
		/>
	);
};

export default State;
