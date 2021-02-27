import React from "react";
import IssueList from "./IssuesList";

const Repository = ({repo, expanded, onToggled}) => {

    const {node: {name, descriptionHTML, owner: {login}, stargazers: {totalCount: totalStarCount}}} = repo;

    return (
        <div>
            <div>
                <p>{name}</p>
                <p>{`by ${login}`}</p>
                <p>TotalStarCount - {totalStarCount}</p>
                <div>
                    <p>
                        dangerouslySetInnerHTML={{__html: descriptionHTML}}
                    </p>
                </div>
                <div>
                    <p>Issues will go here</p>
                    <IssueList repoName={name} repoOwner={login} />
                </div>
            </div>

        </div>
    )
}

export default Repository
