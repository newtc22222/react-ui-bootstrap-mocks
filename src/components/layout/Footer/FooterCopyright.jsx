import React from "react";
import classNames from "classnames";

const FooterCopyright = ({ theme, t }) => {
  return (
    <div
      className={classNames("text-center pb-1", {
        "text-muted": theme === "light"
      })}
    >
      &copy;2023, {process.env.REACT_APP_WEB_SOURCE + " Company Limited"}
      <p>
        <small>{t("location")}</small>
      </p>
    </div>
  );
};

export default FooterCopyright;
