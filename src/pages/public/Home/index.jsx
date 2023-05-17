import React from "react";
import { enqueueSnackbar } from "notistack";
// import { useTranslation } from "react-i18next";

import { useAppContext } from "../../../components/context/AppContext";

const Home = () => {
  // const { i18n } = useTranslation();

  const {
    handleOpenCartCanvas,
    handleChangeTheme,
    webSetting: { theme }
  } = useAppContext();

  return (
    <>
      <button
        className="btn btn-primary"
        onClick={() => {
          handleChangeTheme();
          // handleOpenCartCanvas(true);
          // enqueueSnackbar("Yeahhhhhhhhhhh", {
          //   variant: "success"
          // });
          // i18n.changeLanguage("vi");
        }}
      >
        Test
      </button>
    </>
  );
};

export default Home;
