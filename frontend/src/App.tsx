import { Routes, Route, Navigate } from "react-router-dom";
import ExchangerPage from "./pages/ExchangerPage";
import LandingPage from "./pages/LandingPage";

function App() {
	return (
		<Routes>
			<Route path="/" element={<LandingPage />} />
			<Route path="/exchange" element={<ExchangerPage />} />
			<Route path="*" element={<Navigate to="/" />} />
		</Routes>
	);
}

export default App;
