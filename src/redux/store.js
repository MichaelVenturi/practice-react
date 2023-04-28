import { configureStore } from "@reduxjs/toolkit";
import { countReducer } from "./reducers/countReducer";
import { taskReducer } from "./reducers/taskReducer";

const initialState = {
  counter: 5,
  tasks: [
    {
      id: 0,
      name: "taskname",
      date: "date",
      details: "taskdetails",
      urgent: false,
    },
    {
      id: 1,
      name: "taskname2",
      date: "date2",
      details: "taskdetails2",
      urgent: false,
    },
  ],
};

const store = configureStore({
  reducer: {
    counter: countReducer,
    tasks: taskReducer,
  },
  preloadedState: initialState,
});

export default store;
