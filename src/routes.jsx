import { createBrowserRouter } from "react-router-dom";

import { Layout } from "./layout/Layout";
import { Home } from "./pages/Home";
import { Details } from "./pages/Details";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				index: true,
				element: <Home />
			},
			{
				path: "/details/:type/:uid",
				element: <Details />
			}
		]
	}
]);