import GlobalStyles from "../styles/globalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import EditUser from "./EditUsers/EditUsers";
import RegisterUsers from "./RegisterUsers/RegisterUsers";
import EditBook from "./EditBook/EditBook";
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
	return (
		<>
			<GlobalStyles />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<HomePage />}/>
					<Route path="/editUser/:idUser" element={<EditUser />}/>
					<Route path="/registerUsers" element={<RegisterUsers />}/>
					<Route path="/editBook/:idBook" element={<EditBook />}/>
				</Routes>
			</BrowserRouter>
		</>
	);
}