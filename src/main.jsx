import React from "react";
import ReactDOM from "react-dom/client";

import "bootstrap/dist/css/bootstrap.min.css";

import "./styles/global.css";

import { RouterProvider } from "react-router-dom";

import { router } from "./routes";

import {
	StoreProvider
} from "./store.jsx";

ReactDOM
	.createRoot(
		document.getElementById("root")
	)
	.render(

		<React.StrictMode>

			<StoreProvider>

				<RouterProvider
					router={router}
				/>

			</StoreProvider>

		</React.StrictMode>
	);