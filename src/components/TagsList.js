import React from 'react';
import {useQuery} from '@apollo/react-hooks';
import Tag from "./Tag";
import {getTags} from '../queries/queries.js';


const TagsList = ({tagRepoName, TagRepoOwner}) => {
    const {data, loading, error} = useQuery(getTags,
        {variables: {
                name: tagRepoName,
                owner: TagRepoOwner
            }});

    console.log('tags data',data)

    if (loading) {
        return (
            <div style={{textAlign: "center"}}>
                loading tags...
            </div>
        );
    }else if (error) {
        return (
            <div>
                {error}
            </div>
        )
    }

    if (!data.repository.refs.nodes.length) {
        console.log('no data')
        return (
            <div style={{background: "crimson", margin: "0px 20px", textAlign: "center", color: "#eee"}}>
                There are no tags!
            </div>
        )
    }

    return (
        <div className="issues">
            <h4>Tags: </h4>
            {data.repository.refs.nodes.map((ref) => (
                <li key={ref.id}>
                    <Tag name={ref.name}  />
                </li>
            ))}
        </div>
    );
};

export default TagsList;
