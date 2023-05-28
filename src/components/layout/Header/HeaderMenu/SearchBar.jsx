import React, { useRef } from "react";
import classNames from "classnames";

const SearchBar = ({ navigate, t, theme, ...rest }) => {
  const searchRef = useRef();

  const handleSubmit = () => {
    const textSearch = searchRef.current.value.trim();
    if (!textSearch) return;
    navigate("/products?q=" + textSearch);
  };

  return (
    <form
      className="input-group me-2 mb-2 mb-lg-0"
      role="search"
      onSubmit={handleSubmit}
    >
      <input
        className="form-control py-3"
        type="search"
        ref={searchRef}
        placeholder={t("placeholder.search")}
        aria-label="Search"
      />
      <button
        className={classNames(
          "btn px-3",
          theme === "dark" ? "btn-dark" : "btn-success"
        )}
        type="submit"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          className="bi bi-search"
          viewBox="0 0 16 16"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg>
      </button>
    </form>
  );
};

export default SearchBar;
