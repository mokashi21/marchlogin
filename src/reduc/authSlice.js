import { createSlice } from "@reduxjs/toolkit";
const authSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    setUsers: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { setUsers, logout } = authSlice.actions;
export const selectuser = (state) => state.user.user;

export default authSlice.reducer;
