// src/redux/slices/subscriberSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SubscriberState {
  email: string | null;
  isSubscribed: boolean;
}

const initialState: SubscriberState = {
  email: null,
  isSubscribed: false,
};

const subscriberSlice = createSlice({
  name: "subscriber",
  initialState,
  reducers: {
    subscribeUser: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
      state.isSubscribed = true;
    },
  },
});

export const { subscribeUser } = subscriberSlice.actions;
export default subscriberSlice.reducer;
