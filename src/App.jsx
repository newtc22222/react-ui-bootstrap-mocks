import React from "react";
import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import AppProvider from "./components/context/AppContext";
import AuthProvider from "./components/context/AuthContext";
import { LoadingPage } from "./components/common";
import router from "./routes";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./styles/scss/index.scss";

function App() {
  return (
    <HelmetProvider>
      <AppProvider>
        <AuthProvider>
          <RouterProvider router={router} fallbackElement={<LoadingPage />} />
        </AuthProvider>
      </AppProvider>
    </HelmetProvider>
  );
}

export default App;
