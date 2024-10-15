import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalStyle } from "./styles/GlobalStyle";
import { GlobalProvider } from "./context/globalContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Incomes from "./Components/Incomes";
import Navigation from "./Components/Navigation";
import Expenses from "./Components/Expenses";

// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <App />,
//         children: [
//             { path: "/", element: <Dashboard /> },
//             { path: "/dashboard", element: <Dashboard /> },
//             { path: "/incomes", element: <Incomes /> },
//             { path: "/expenses", element: <Expenses /> },
//         ],
//     },
// ]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <GlobalStyle />
        <GlobalProvider>
            {/* <RouterProvider router={router} /> */}
            <App />
        </GlobalProvider>
    </React.StrictMode>
);
