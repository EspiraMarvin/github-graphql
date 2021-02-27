import {useQuery} from '@apollo/react-hooks';
import {CircularProgress, List, Typography, makeStyles} from '@material-ui/core';
import React from 'react';
import Issue from "./Issue";
import {getIssues} from '../queries/queries.js';

const useStyles = makeStyles({
    root: {
        flexDirection: 'column'
    },
    spinnerContainer: {
        display: 'flex',
        justifyContent: 'space-around'
    }
});

const IssuesList = ({repoName, repoOwner}) => {
    const classes = useStyles();
    const {data, loading, error} = useQuery(getIssues,
        {variables: {
                name: repoName,
                owner: repoOwner
            }});

    if (loading) {
        return (
            <div className={classes.spinnerContainer}>
                <CircularProgress />
            </div>
        );
    }

    if (error) {
        return (
            <Typography
                variant={'overline'}
                component={'div'}
                color={'error'}
            >
                {error}
            </Typography>
        )
    }

    if (!data.repository.issues.nodes.length) {
        return (
            <Typography
                variant={'overline'}
                component={'div'}
            >
                There are no issues!
            </Typography>
        )
    }

    return (
        <div className={classes.root}>
            <Typography variant={'h5'}>Latest issues: </Typography>
            <List>
                {data.repository.issues.nodes.map((issue) => (
                    <Issue title={issue.title} bodyHTML={issue.bodyHTML} />
                ))}
            </List>
        </div>
    );
};

export default IssuesList;
