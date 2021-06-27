export const GRAPHQL_API_URL = "http://localhost:9002/graphql";

export const GET_ALL_EMPLOYEES = `
    query{
        employees{
            id
            image
            firstName
            lastName
            phone
            address
            voteCount
        }
    }`;
