import React from "react";
import classNames from "classnames";
import { Outlet } from "react-router-dom";
import { SnackbarProvider } from "notistack";

import { useAppContext } from "../context/AppContext";

import CartOffcanvas from "./CartOffcanvas";
import Footer from "./Footer";
import Header from "./Header";

const AppLayout = () => {
  const {
    webSetting: { theme, snackbarConfig }
  } = useAppContext();
  return (
    <SnackbarProvider {...snackbarConfig}>
      <CartOffcanvas />
      <Header />
      <div
        className={classNames("py-3", {
          "bg-dark": theme === "dark"
        })}
      >
        <main className="container">{<Outlet />}</main>
      </div>
      <Footer />
    </SnackbarProvider>
  );
};

export default AppLayout;
