import React, { createContext, useContext, useState } from "react";
import { closeSnackbar } from "notistack";

const AppContext = createContext(null);

const AppProvider = ({ children }) => {
  const [cartCanvasOpen, setCartCanvasOpen] = useState(false);
  const handleOpenCartCanvas = (status) => setCartCanvasOpen(status);

  const [cartLocalItems, setCartLocalItems] = useState([]);
  const CartLocalService = {
    addItem: (item) => setCartLocalItems((prev) => [...prev, item]),
    increaseQuantity: (item) => {},
    decreaseQuantity: (item) => {},
    updateQuantity: (item, newQuantity) => {},
    removeItem: (itemId) =>
      setCartLocalItems((prev) => prev.filter((item) => item.id !== itemId)),
    clear: () => setCartLocalItems([])
  };

  const [webSetting, setWebSetting] = useState({
    theme: "light",
    snackbarConfig: {
      maxSnack: 3,
      autoHideDuration: 3000,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "center"
      },
      dense: true,
      action: (snackbarId) => (
        <button
          type="button"
          class="btn-close btn-close-white"
          aria-label="Close"
          onClick={() => closeSnackbar(snackbarId)}
        ></button>
      )
    }
  });

  const handleChangeTheme = () => {
    setWebSetting((prev) => {
      return { ...prev, theme: prev.theme === "light" ? "dark" : "light" };
    });
  };

  const handleChangeSnackBar = (newSnackbarConfig) => {
    setWebSetting((prev) => {
      return { ...prev, snackbarConfig: newSnackbarConfig };
    });
  };

  return (
    <AppContext.Provider
      value={{
        cartCanvasOpen,
        handleOpenCartCanvas,
        cartLocalItems,
        CartLocalService,
        webSetting,
        handleChangeTheme,
        handleChangeSnackBar
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
export default AppProvider;
