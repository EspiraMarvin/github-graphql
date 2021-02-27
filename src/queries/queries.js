import gql from 'graphql-tag';
// import {gql} from 'apollo-boost'



export const search_repos  = gql`
    query($search_term: String!) {
            search(query: $search_term, type: REPOSITORY, first: 10){
                repositoryCount,
                edges {
                    node {
                        ... on Repository{
                            name,
                            owner{
                                login
                            },
                            stargazers{
                                totalCount
                            },
                            descriptionHTML
                        }
                    }
                }
            }
    }
`;

export const getIssues = gql`
    query ($name: String!, $owner: String!) {
        repository(name: $name, owner: $owner){
            issues(first: 10, states: [OPEN], orderBy: {field: CREATED_AT, direction: DESC}) {
                nodes {
                    title,
                    bodyHTML,
                    createdAt
                }
            }
        }
    }
`;















// export const search  = gql`
// query($search_term: String!) {
//     search(query: $search_term, type: REPOSITORY, first: 20) {
//         repositoryCount,
//             edges {
//             node {
//             ... on Repository {
//                     name,
//                         owner {
//                         login
//                     },
//                     stargazers {
//                         totalCount
//                     },
//                     descriptionHTML,
//                 }
//             }
//         }
//     }
// }
// `;

// export const login = gql`
//     Query: {
//     githubLoginUrl: () => `https://github.com/login/oauth/authorize?client_id=${
//       process.env.CLIENT_ID
//     }&scope=user\`;
//     }
// `

// const url = `https://github.com/login/oauth/authorize?client_id=${process.env.CLIENT_ID}&scope=user`
//
// const github_data = {
//     "token": "ab928beae42fa696098d43b3dba69ade5bfe0ea0",
//     "username": "EspiraMarvin"
// };

// const requestGithubUserAccount = token =>
//     fetch(`https://api.github.com/user?access_token=${process.env.GITHUB_KEY}`).then(
//         res => res.json
//     );
