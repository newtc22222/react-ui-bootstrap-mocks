import React from "react";
import { useTranslation } from "react-i18next";

import { HeaderTitle } from "../../../components/common";
import { useAppContext } from "../../../components/context/AppContext";

const Home = () => {
  const { t } = useTranslation();

  const {
    handleChangeLang,
    webSetting: { lang },
  } = useAppContext();

  return (
    <>
      <HeaderTitle title={"Laptech | " + t("page.home")} />
      <button
        className="btn btn-primary"
        onClick={() => handleChangeLang("vi")}
      >
        Test
      </button>
    </>
  );
};

export default Home;
