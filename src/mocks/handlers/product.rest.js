import { rest } from "msw";
import _ from "lodash";
import products from "../db/product.db";

const productRest = [
  rest.get("/products", (req, res, ctx) => {}),
  rest.get("/products/:productId", (req, res, ctx) => {
    const key = req.url.searchParams;
    console.log(key);

    let status = 200;
    const response = {};

    const { productId } = req.params;
    const product = _.find(products, { id: productId });
    if (!product) {
      status = 404;
      response.errorMessage = "Product not found!";
    } else {
      response.data = product;
    }

    return res(ctx.status(status), ctx.body(response));
  })
];

export default productRest;
