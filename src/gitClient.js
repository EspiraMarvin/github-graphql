import ApolloClient from 'apollo-boost'

const client = new ApolloClient({
    uri: "https://api.github.com/graphql",
    headers: {
        Authorization: "bearer ab928beae42fa696098d43b3dba69ade5bfe0ea0"
    }
});

// const client = new ApolloClient({
//     uri: "https://api.github.com/graphql",
//     headers: {
//         Authorization: `bearer ${process.env.GITHUB_KEY}`
//     }
// });

export default client;
