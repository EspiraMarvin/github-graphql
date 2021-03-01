import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
    loading: false,
    hasErrors: false,
    repositories: [],
    searchTerm: ''
}

// A slice for recipes with our 3 reducers
const repositorySlice = createSlice({
    name: 'repositories',
    initialState,
    reducers: {
        getRepositories: (state) => {
            state.loading = true
        },
        getRepositoriesSuccess: (state, { payload }) => {
            state.repositories = payload
            state.loading = false
            state.hasErrors = false
        },
        getRepositoriesFailure: state => {
            state.loading = false
            state.hasErrors = true
        },
        getSearchTerm: (state, action) => {
            state.searchTerm = action.payload
            console.log(state)
        }
    },
});

// actions generated
export const {getRepositories, getRepositoriesSuccess, getRepositoriesFailure, getSearchTerm} = repositorySlice.actions

// A selector
export const repositorySelector = state => state.repositories

// The reducer
export default repositorySlice.reducer

// Asynchronous thunk action
export function fetchRepositories() {


    return async dispatch => {
        if (!initialState.searchTerm === '') {

            dispatch(getRepositories())

            try {
                const res = await fetch(`https://api.github.com/graphql`, {
                    headers: {
                        Authorization: `bearer ${process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN}`
                    }
                })
                const data = await res.json()
                dispatch(getRepositoriesSuccess(data))
            } catch (error) {
                dispatch(getRepositoriesFailure())
            }
        }
    }

}
