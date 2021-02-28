import gql from 'graphql-tag';

export const search_repos  = gql`
    query($search_term: String!) {
            search(query: $search_term, type: REPOSITORY, first: 15){
                repositoryCount,
                edges {
                    node {
                        ... on Repository{
                            id
                            name,
                            owner{
                                login
                            }
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
                    id
                    title,
                    bodyHTML,
                    createdAt
                }
            }
        }
    }
`;

export const getTags = gql`    
    query($name: String!, $owner: String!) {
        repository(name: $name, owner: $owner) {
            refs(first: 4, refPrefix: "refs/tags/") {
                nodes {
                    id,
                    name
                }
            }
        }
    }
`



// export const getTags = gql`
//     query($name: String!, $owner: String!) {
//         repository(name: $name, owner: $owner) {
//             refs(refPrefix: "refs/tags/", last: 100) {
//                 nodes {
//                     name
//                     target {
//                         ... on Tag {
//                             id
//                             name
//                             tag_message: message
//                             tagger {
//                                 email
//                                 name
//                             }
//                             target {
//                                 oid
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     }
// `






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

