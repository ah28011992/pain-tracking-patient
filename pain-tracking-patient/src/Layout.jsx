import React from "react";
import NavBar from "./assets/Navbar";

const Layout = ({ children }) => {
	return (
		<>
			<NavBar />
			{children}
		</>
	);
};

export default Layout;
