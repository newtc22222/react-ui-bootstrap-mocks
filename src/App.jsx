import React from "react";
import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
// import { SnackbarProvider } from "notistack";

import AppProvider from "./components/context/AppContext";
import { LoadingPage } from "./components/common";
import router from "./routes";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./styles/scss/index.scss";

function App() {
  return (
    <HelmetProvider>
      <AppProvider>
        {/* <SnackbarProvider > */}
        <RouterProvider router={router} fallbackElement={<LoadingPage />} />
        {/* </SnackbarProvider> */}
      </AppProvider>
    </HelmetProvider>
  );
}

export default App;
