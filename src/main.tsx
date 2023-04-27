import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Login from "./views/Login/Login.tsx";
import TableList from "./components/TableList/TableList.tsx";
import Dashboard from "./views/Dashboard/Dashboard.tsx";
import Inventory from "./views/Inventory/Inventory.tsx";
import Cash from "./views/Cash/Cash.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route index element={<Login />} />
				<Route path="dashboard" element={<Dashboard />}>
					<Route path="tables" element={<TableList />} />
					<Route path="inventory" element={<Inventory />} />
					<Route path="cash" element={<Cash />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
