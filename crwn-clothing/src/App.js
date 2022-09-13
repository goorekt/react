import "./categories.style.scss";
import Categories from "./components/categories/categories";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { Navigation } from "./routes/navigation/navigation.component";
import SignIn from "./routes/sign-in/sign-in.component";

const App = () => {
	return (
		<Routes>
			<Route patj="/" element={<Navigation></Navigation>}>
				<Route index element={<Home />} />
				<Route path="shop" element={<h1>Hello</h1>} />
				<Route path="sign-in" element={<SignIn />} />
			</Route>
		</Routes>
	);
};

export default App;
