import { ApolloClient, InMemoryCache } from "@apollo/client";
const client = new ApolloClient({
    uri: "https://outgoing-redbird-98.hasura.app/v1/graphql",
    //secret key
    headers: { "x-hasura-admin-secret": "jxA4tZRguqWkeq56nNjpHOjDuQRKQ1XmR4YTR3RrKgcoQd7GF7JrA5v1jLb3leWo" },
    cache: new InMemoryCache(),
});

export default client;