import React, { useState } from "react";
import { enqueueSnackbar } from "notistack";
import { useTranslation } from "react-i18next";

import { HeaderTitle } from "../../../components/common";
import { useAppContext } from "../../../components/context/AppContext";

const Home = () => {
  const { i18n, t } = useTranslation();
  // console.log(lang);

  const {
    handleOpenCartCanvas,
    handleChangeTheme,
    handleChangeLang,
    webSetting: { lang },
  } = useAppContext();

  return (
    <>
      <HeaderTitle title={"Laptech | " + t("page.home")} />
      <button
        className="btn btn-primary"
        onClick={() => {
          handleChangeTheme();
          handleOpenCartCanvas(true);
          // enqueueSnackbar("Yeahhhhhhhhhhh", {
          //   variant: "success"
          // });
          const langChoice = lang === "vi" ? "en" : "vi";
          i18n.changeLanguage(langChoice);
          handleChangeLang(langChoice);
        }}
      >
        Test
      </button>
    </>
  );
};

export default Home;
