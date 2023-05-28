import React from "react";
import { Link, useNavigate } from "react-router-dom";
import classNames from "classnames";

import { useAppContext } from "../../../context/AppContext";

import CategoryDropdown from "./CategoryDropdown";
import SearchBar from "./SearchBar";

const HeaderMenu = ({ theme, t, ...rest }) => {
  const navigate = useNavigate();
  const { handleOpenCartCanvas } = useAppContext();

  return (
    <nav
      className={classNames("container navbar navbar-expand-lg", {
        "navbar-dark": theme === "dark",
      })}
    >
      <div className="container-fluid d-flex">
        <Link
          className={classNames(
            "navbar-brand fw-bold font-monospace animate-charcter",
            theme
          )}
          to="/"
        >
          {process.env.REACT_APP_WEB_SOURCE}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <CategoryDropdown navigate={navigate} t={t} theme={theme} />
          <SearchBar navigate={navigate} t={t} theme={theme} />

          <div className="text-end w-50 d-flex flex-column py-1">
            <div className="text-start mb-1">
              <i className="bi bi-headset me-2"></i>
              <a
                href="tel:18001800"
                className={
                  "text-decoration-none fw-bold" +
                  (theme === "dark" ? " text-white" : "")
                }
              >
                Hotline: 1800 xxxx
              </a>
            </div>
            <div className="d-flex flex-row gap-2 w-100">
              <button
                type="button"
                className={classNames(
                  "btn d-flex gap-2",
                  theme === "dark" ? "btn-dark" : "btn-success"
                )}
                onClick={handleOpenCartCanvas}
              >
                <i className="bi bi-cart4 align-self-center"></i>
                <div className="vr"></div>
                <span className="text-start">{t("label.cart")}</span>
              </button>
              <button
                type="button"
                className={classNames(
                  "btn d-flex gap-2",
                  theme === "dark" ? "btn-dark" : "btn-success"
                )}
                onClick={() => navigate("/login")}
              >
                <i className="bi bi-person-fill align-self-center"></i>
                <div className="vr"></div>
                <span className="text-start">{t("label.login")}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HeaderMenu;
