import api from "../api/api.config";

const AuthService = {
  login: (account, handleSuccess, handleFailed) => {
    api
      .post("/auth/login", account)
      .then((res) => handleSuccess(res))
      .catch((err) => handleFailed(err));
  },
  register: (newAccount, handleSuccess, handleFailed) => {
    api
      .post("/auth/register", newAccount)
      .then((res) => handleSuccess(res))
      .catch((err) => handleFailed(err));
  },
  resetPassword: (object, handleSuccess, handleFailed) => {
    api
      .post("/auth/resetPassword", object)
      .then((res) => handleSuccess(res))
      .catch((err) => handleFailed(err));
  }
};

export default AuthService;
