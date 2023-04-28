const initialState = [];

export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_TASKS":
      return state;
    case "ADD_TASK":
      const { task } = action.payload;
      return [...state, task];
    case "DELETE_TASK":
      const { id } = action.payload;
      const newState = state.filter((task) => task.id !== id);
      return newState;
    default:
      return state;
  }
};
