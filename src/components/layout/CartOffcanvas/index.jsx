import React from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useAppContext } from "../../context/AppContext";

import CartBox from "./CartBox";
import OffcanvasFooter from "./OffcanvasFooter";

const CartOffcanvas = () => {
  const { cartCanvasOpen, handleOpenCartCanvas } = useAppContext();
  const deviceWidth = window.innerWidth;

  const OffcanvasBody = () => {
    if (deviceWidth > 720) {
      return (
        <>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <CartBox />
          <OffcanvasFooter />
        </>
      );
    } else {
      return (
        <>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
        </>
      );
    }
  };

  return (
    <Offcanvas
      show={cartCanvasOpen}
      onHide={() => handleOpenCartCanvas(false)}
      placement={deviceWidth > 720 ? "end" : "bottom"}
      keyboard
      scroll
    >
      <OffcanvasBody />
    </Offcanvas>
  );
};

export default CartOffcanvas;
