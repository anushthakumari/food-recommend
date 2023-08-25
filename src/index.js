import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";

import App from "./App";
import { MealProvider } from "./context/mealContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

// A custom theme for this app
const theme = createTheme({
	typography: {
		fontSize: 22,
	},
});

export default theme;

root.render(
	<MealProvider>
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</MealProvider>
);
