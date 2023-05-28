import React from "react";
import classNames from "classnames";

const CategoryDropdown = ({ navigate, t, theme, ...rest }) => {
  return (
    <ul
      className="navbar-nav me-2 mb-2 mb-lg-0"
      style={{ "--bs-scroll-height": "100px" }}
    >
      <li className="nav-item dropdown">
        <button
          className={classNames(
            "btn dropdown-toggle px-2 py-3",
            theme === "dark" ? "btn-dark" : "btn-success"
          )}
          href="#_"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <i className="bi bi-list"></i>
          <span className="mx-1 text-uppercase fw-bold">
            {t("label.category")}
          </span>
        </button>
        <div className="dropdown-menu m-0">
          <div className="px-2">
            <a className="dropdown-item" href="#_">
              Action
            </a>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default CategoryDropdown;
