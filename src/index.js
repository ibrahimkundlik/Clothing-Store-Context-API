import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

//context-api
import CartProvider from "./providers/cart/cart.provider";

ReactDOM.render(
	<CartProvider>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</CartProvider>,
	document.getElementById("root")
);
