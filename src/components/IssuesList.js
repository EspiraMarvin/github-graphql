import {useQuery} from '@apollo/react-hooks';
import Issue from "./Issue";
import {getIssues} from '../queries/queries.js';


const IssuesList = ({repoName, repoOwner}) => {
    const {data, loading, error} = useQuery(getIssues,
        {variables: {
                name: repoName,
                owner: repoOwner
            }});


    // console.log('issues data',data)


    if (loading) {
        return (
            <div style={{textAlign: "center"}}>
                loading issues...
            </div>
        );
    }

    if (error) {
        return (
            <div>
                {error}
            </div>
        )
    }

    if (!data.repository.issues.nodes.length) {
        return (
            <div style={{background: "crimson", margin: "0px 20px", textAlign: "center", color: "#eee"}}>
                There are no issues!
            </div>
        )
    }

    return (
        <div className="issues">
            <h4>Issues: </h4>
                {data.repository.issues.nodes.map((issue) => (
                    <li key={issue.id}>
                        <Issue title={issue.title}  />
                    </li>
                ))}
        </div>
    );
};

export default IssuesList;
