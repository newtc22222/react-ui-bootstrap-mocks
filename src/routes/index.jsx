import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from "react-router-dom";

import AuthRoutes from "./AuthRoutes";
import AppLayout from "../components/layout/AppLayout";

import {
  ForgotPassword,
  Login,
  Register,
  PageNotFound,
  CartPage,
  ConfirmPage,
  PaymentPage,
  Home,
  ProductPage,
  ProductDetail,
  About,
  Contact,
  FAQs,
  HowToUse,
  UserPage
} from "../pages";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<AppLayout />}>
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="forgotPassword" element={<ForgotPassword />} />
      <Route path="product" element={<ProductPage />} />
      <Route path="product/:id" element={<ProductDetail />} />
      <Route path="cart" element={<CartPage />} />
      <Route path="payment" element={<PaymentPage />} />
      <Route path="confirm" element={<ConfirmPage />} />
      {/* bonus */}
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="faqs" element={<FAQs />} />
      <Route path="how-to-use" element={<HowToUse />} />
      <Route path="*" element={<PageNotFound />} />
      {/* Authentication */}
      <Route element={<AuthRoutes />}>
        <Route path="profile" element={<UserPage />} />
      </Route>
    </Route>
  )
);

export default router;
