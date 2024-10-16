import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullname: "",
  phone: "",
  address: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    createUser(state, action) {
      state.fullname = action.payload.fullname;
      state.phone = action.payload.phone;
      state.address = action.payload.address;
    },
  },
});

export const { createUser } = userSlice.actions;

export default userSlice.reducer;
