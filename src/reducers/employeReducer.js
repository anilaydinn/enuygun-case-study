import { GET_EMPLOYE } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case GET_EMPLOYE:
      return (state = action.payload.employe[0]);
    default:
      return state;
  }
};
