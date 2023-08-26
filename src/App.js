import "./App.scss";
// react router dom
import { BrowserRouter, Routes, Route } from "react-router-dom";
// pages
import { Home } from "./pages/index";
import Calculator from "./pages/Calculator/index";
import Details from "./pages/Details/Details";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/meal/:id" element={<Details />} />
				<Route path="/calculator" element={<Calculator />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
