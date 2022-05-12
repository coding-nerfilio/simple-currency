import { Container } from "@chakra-ui/react";
import { Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/Navbar";
import ExchangerPage from "./pages/ExchangerPage";
import LandingPage from "./pages/LandingPage";

function App() {
	return (
		<Container p={0} m={0} maxW={"100vw"} w="100vw">
			<NavBar />

			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/exchange" element={<ExchangerPage />} />
				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
		</Container>
	);
}

export default App;
