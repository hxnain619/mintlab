import { Routes, Route, BrowserRouter } from "react-router-dom";
import MintPage from "../pages/mint";

const AppRoutes = () => (
	<BrowserRouter>
		<Routes>
			<Route path='/' element={<MintPage />} />
		</Routes>
	</BrowserRouter>
);

export default AppRoutes;
