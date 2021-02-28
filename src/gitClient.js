import ApolloClient from 'apollo-boost'

const client = new ApolloClient({
    uri: "https://api.github.com/graphql",
    headers: {
        Authorization: `bearer ${process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN}`
    }
});

export default client;
