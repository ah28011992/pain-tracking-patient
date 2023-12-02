import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import SignIn from "./root";
import Dashboard from "./Dashboard";
import SignUp from "./login/Login";
import Account from "./Account";
import Tracker from "./assets/Tracker";
const router = createBrowserRouter([
	{
		path: "/",
		element: <SignIn />,
	},
	{
		path: "/signup",
		element: <SignUp />,
	},
	{
		path: "/dashboard",
		element: <Dashboard />,
	},
	{
		path: "/account",
		element: <Account />,
	},
	{
		path: "/tracker",
		element: <Tracker />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
