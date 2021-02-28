import React from "react";
import IssuesList from "./IssuesList";
import TagsList from "./TagsList";

const Repository = ({repo}) => {

    const {node: {name, owner: {login}}} = repo;

    return (
        <div className="repository">
                <p>Repo Name: {name}</p>
                <p>Owned {`by ${login}`}</p>
                <div>
                    <IssuesList repoName={name} repoOwner={login} />
                </div>
                <div style={{marginTop: "4px"}}>
                    <TagsList tagRepoName={name} TagRepoOwner={login}/>
                </div>
        </div>
    )
}

export default Repository
