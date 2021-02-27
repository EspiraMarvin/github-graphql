import React, {useState, useEffect} from 'react'
import {useQuery} from "@apollo/react-hooks";
import {search_repos} from "../queries/queries";
import Repository from "./Repository";


const RepositoriesList = ({searchTerm}) => {


    const [repository, setRepository] = useState(null);
    const {data, loading, error} = useQuery(search_repos,
        { variables: {search_term: searchTerm}}
        );


    console.log('repos data',data);

    useEffect(() => {
        setRepository(null)
    }, [data]);

     if (loading) {
            return (
                <div style={{textAlign: "center"}}>
                    Searching...
                </div>
            )
        } else if (error) {
            return (
                <div style={{textAlign: "center"}}>
                    {error}
                </div>
            )
        } else if (!data.search.repositoryCount) {
            return (
                <div style={{textAlign: "center"}}>
                    <p>No repo found</p>
                </div>
            )
        }


    return (
     <div>
         <ul className="repo-list">
             {
                 data.search.edges.map((repo, k) => (
                     <Repository
                        repo={repo}
                        expanded={repository === k}
                        onToggled={() => setRepository(k)}
                        key={k}
                     />
             ))

             }
         </ul>
     </div>
    )
};

export default RepositoriesList
