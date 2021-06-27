import { INCREMENT_EMPLOYE_VOTE, GET_EMPLOYE } from "./types";
import regeneratorRuntime, { async } from "regenerator-runtime";

export const incrementEmployeVote = (empId) => async (dispatch) => {
  dispatch({
    type: INCREMENT_EMPLOYE_VOTE,
    payload: { empId },
  });
};

export const getEmploye = (empId) => async (dispatch, getState) => {
  const state = getState();

  let employe = state.employees.filter((employe) => {
    if (employe.id == empId) {
      return employe;
    }
  });
  dispatch({
    type: GET_EMPLOYE,
    payload: { employe },
  });
};
