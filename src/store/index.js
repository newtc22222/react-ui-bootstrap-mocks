import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {},
  // middleware: (getDefaultMiddleware) => {
  //   getDefaultMiddleware({
  //     immutableCheck: { warnAfter: 128 },
  //     serializableCheck: { warnAfter: 128 },
  //   });
  // },
});

export default store;
