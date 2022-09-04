import "./categories.style.scss";
import Categories from "./components/categories/categories";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { Navigation} from "./routes/navigation/navigation.component"



const App = () => {
	return (
		<Routes>
    <Route patj="/" element={<Navigation></Navigation>}>
			<Route index element={<Home />}/>
      <Route path="shop" element={<h1>Hello</h1>}/>
      </Route>
     
		</Routes>
	);
};

export default App;
