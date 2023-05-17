import authRest from "./auth.rest";
import invoiceRest from "./invoice.rest";
import productRest from "./product.rest";

export const handlers = [...authRest, ...invoiceRest, ...productRest];
