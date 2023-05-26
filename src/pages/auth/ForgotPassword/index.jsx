import React from "react";
import { useForm } from "react-hook-form";

const ForgotPassword = ({ t, ...rest }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return <>ForgotPassword</>;
};

export default ForgotPassword;
