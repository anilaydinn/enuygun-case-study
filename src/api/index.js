import axios from "axios";
import * as query from "../helpers/query";

export const getAllEmployees = async () => {
  const resp = await axios.post(query.GRAPHQL_API_URL, {
    query: query.GET_ALL_EMPLOYEES,
  });

  return resp.data.data.employees;
};
