import React from "react";
import { Helmet } from "react-helmet-async";

const HeaderTitle = ({ title, content = "" }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta
        name="description"
        content={content || "Shop our latest products now."}
      />
    </Helmet>
  );
};

export default HeaderTitle;
