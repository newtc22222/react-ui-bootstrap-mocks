import api from "../api/api.config";

const ProductService = {
  get: async (handleSuccess, handleFailed) => {},
  // filter object will send to server
  getWithFilter: async (filterObject, handleSuccess, handleFailed) => {},
  // product detail page
  getProductDetail: async (productId, handleSuccess, handleFailed) => {},
  getProductImage: async (productId, handleSuccess, handleFailed) => {}
};

export default ProductService;
