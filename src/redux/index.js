import { combineReducers } from 'redux'
import repositorySlice from  './repositorySlice'


const rootReducer = combineReducers({
    repositories: repositorySlice
})

export default rootReducer
