import React from "react";
import { useTranslation } from "react-i18next";

import { HeaderTitle } from "../../../components/common";

const Login = () => {
  const { t } = useTranslation();

  return (
    <>
      <HeaderTitle title={"Laptech | " + t("label.login")} />
    </>
  );
};

export default Login;
