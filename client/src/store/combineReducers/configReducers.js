import {  combineReducers } from "redux";
import comment from "./../redusers/comment";
import user from "./../redusers/user";







const rootReducer = combineReducers({
    comment: comment,
    user: user,
  });


  export default rootReducer;