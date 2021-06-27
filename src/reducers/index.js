import { combineReducers } from "redux";
import employeesReducer from "./employeesReducer";
import employeReducer from "./employeReducer";

export default combineReducers({
  employees: employeesReducer,
  employe: employeReducer,
});
