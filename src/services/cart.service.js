import api from "../api/api.config";

const CartService = {
  get: async (userId, handleSuccess, handleFailed) => {},
  add: async (productUnit, handleSuccess, handleFailed) => {},
  changeQuantity: async (
    productUnitId,
    newQuantity,
    handleSuccess,
    handleFailed
  ) => {},
  remove: async (productUnitId, handleSuccess, handleFailed) => {}
};

export default CartService;
