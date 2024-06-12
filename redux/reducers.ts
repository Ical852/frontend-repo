import { combineReducers } from "redux";
import { authReducers } from "./auth/reducers";
import { userReducers } from "./user/reducers";

const reducers = combineReducers({
  auth: authReducers,
  user: userReducers,
});

export default reducers;
