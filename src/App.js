import "./App.scss";
// react router dom
import { BrowserRouter, Routes, Route } from "react-router-dom";
// pages
import { Home } from "./pages/index";
// components
import Header from "./components/Header/Header";

function App() {
	return (
		<BrowserRouter>
			<Header />
			{/* <Sidebar /> */}
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
