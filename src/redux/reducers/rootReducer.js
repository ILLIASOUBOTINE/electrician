import { combineReducers } from "redux";
import userSlice from "./userSlice";
import loadingSlice from "./loadingSlice";
import historyRoutes from "./historyRoutes";


const rootReducer = combineReducers({
    user: userSlice.reducer,
    loading: loadingSlice.reducer,
    historyRoutes: historyRoutes.reducer
})

export default rootReducer;