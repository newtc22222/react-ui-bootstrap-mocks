import api from "../api/api.config";

const InvoiceService = {
  get: async (userId, handleSuccess, handleFailed) => {},
  // new invoice was includes items to handle
  create: async (newInvoice, handleSuccess, handleFailed) => {},
  updateStatus: async (invoiceId, newStatus, handleSuccess, handleFailed) => {}
};

export default InvoiceService;
