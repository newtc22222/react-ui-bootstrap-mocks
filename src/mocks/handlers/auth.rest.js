import { rest } from "msw";
import _ from "lodash";
import users from "../db/user";

const authRest = [
  rest.post("/login", (req, res, ctx) => {
    sessionStorage.setItem("is-authenticated", "true");
    return res(ctx.status(200));
  }),
  rest.get("/user", (req, res, ctx) => {
    const isAuthenticated = sessionStorage.getItem("is-authenticated");
    let status;
    const response = {};

    if (!isAuthenticated) {
      status = 403;
      response.errorMessage = "Not authorized!";
    }

    const data = users.filter((u) => _.isEqual(u.account, req.body));
    if (data.length > 0) {
      status = 200;
      response.data = data[0];
      delete response.data.account;
    } else {
      status = 404;
      response.errorMessage = "Account not found!";
    }

    return res(ctx.status(status), ctx.json(response));
  })
];

export default authRest;
