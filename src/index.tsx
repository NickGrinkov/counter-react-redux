import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { setupStore } from "./store/store";
import App from "./App";

const store = setupStore();

const root = createRoot(document.querySelector("#root") as Element);
root.render(
	<Provider store={store}>
		<App />
	</Provider>
);