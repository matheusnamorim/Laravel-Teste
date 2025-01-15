import GlobalStyles from "../styles/globalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage/HomePage";

export default function App() {
	return (
		<>
			<GlobalStyles />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<HomePage/>}/>
				</Routes>
			</BrowserRouter>
		</>
	);
}