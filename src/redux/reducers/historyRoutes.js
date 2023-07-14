import { createSlice } from "@reduxjs/toolkit";

const historyRoutes = createSlice({
  name: "historyRoutes",
  initialState: {
    routes: ["/"],
  },
  reducers: {
    addRoute: (state, actions) => {
        state.routes.push(actions.payload);
    //   state.routes = [...state.routes, actions.payload];
    },
  },
});

export const { addRoute } = historyRoutes.actions;
export default historyRoutes;
