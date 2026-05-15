import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";

export const Layout = () => {
	return (
		<div className="app-layout">
			<Navbar />

			<main>
				<Outlet />
			</main>
		</div>
	);
};