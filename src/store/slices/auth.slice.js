import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null
  },
  reducers: {
    setUser: (state, action) => (state.user = action.payload),
    updateInformation: (state, action) => {
      state.user = { ...state.user, ...action.payload };
    },
    logout: (state) => (state.user = null)
  }
});

export const { setUser, updateInformation, logout } = authSlice.actions;
export default authSlice.reducer;
