import { configureStore } from "@reduxjs/toolkit";
import { countReducer } from "./reducers/countReducer";

const initialState = {
  counter: 5,
};

const store = configureStore({
  reducer: {
    counter: countReducer,
  },
  preloadedState: initialState,
});

export default store;
