import React from "react";
import { useTranslation } from "react-i18next";

import { useAppContext } from "../../context/AppContext";

import FooterContact from "./FooterContact";
import FooterCopyright from "./FooterCopyright";

const setTheme = (theme) => {
  const config = {};

  switch (theme) {
    case "light":
      config.style = { backgroundColor: "#a8dfca" };
      break;
    case "dark":
      config.className = "text-white";
      config.style = { backgroundColor: "#0c9970" };
      break;
    default:
      break;
  }

  return config;
};

const Footer = () => {
  const { t } = useTranslation();

  const {
    webSetting: { theme }
  } = useAppContext();

  return (
    <footer {...setTheme(theme)}>
      <FooterContact theme={theme} t={t} />
      <FooterCopyright theme={theme} t={t} />
    </footer>
  );
};

export default Footer;
