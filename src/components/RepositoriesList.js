import {useQuery} from "@apollo/react-hooks";
import {search_repos} from "../queries/queries";
import Repository from "./Repository";


const RepositoriesList = ({searchTerm}) => {


    const {data, loading, error} = useQuery(search_repos,
        { variables: {search_term: searchTerm}}
        );


     if (loading) {
            return (
                <div style={{textAlign: "center"}}>
                    loading...
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
                    <p>No repo available</p>
                </div>
            )
        }


    return (
     <div>
             {
                 data.search.edges.map((repo, k) => (
                     <ul className="repo-list" key={k}>
                         <Repository
                            repo={repo}
                            key={k}
                         />
                     </ul>

                 ))

             }
     </div>
    )
};

export default RepositoriesList
