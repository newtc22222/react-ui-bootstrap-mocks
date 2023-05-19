import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

const HeaderMenu = ({ theme }) => {
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
          <ul
            className="navbar-nav me-2 my-2 my-lg-0"
            style={{ "--bs-scroll-height": "100px" }}
          >
            <li className="nav-item">
              <a className="nav-link" href="#_">
                Link
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#_"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Link
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#_">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#_">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#_">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <form className="input-group mb-2 mb-lg-0 me-2" role="search">
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className={classNames(
                "btn",
                theme === "dark" ? "btn-dark" : "btn-success"
              )}
              type="button" // change to submit when using
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </button>
          </form>
          <div className="text-end">
            <button
              type="button"
              className={classNames(
                "btn w-100",
                theme === "dark" ? "btn-dark" : "btn-success"
              )}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HeaderMenu;
