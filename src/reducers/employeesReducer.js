import { GET_EMPLOYE, INCREMENT_EMPLOYE_VOTE } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case INCREMENT_EMPLOYE_VOTE:
      let employees = [];

      state.map((employe, index) => {
        if (state[index].id == action.payload.empId) {
          employe.voteCount++;
        }
        employees.push(employe);
      });

      employees.sort(
        (a, b) => parseFloat(b.voteCount) - parseFloat(a.voteCount)
      );

      return employees;
    default:
      return state;
  }
};
