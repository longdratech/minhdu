import { combineReducers } from 'redux'
import theDefaultReducer from "./defaultReducer";

const rootReducer = combineReducers({
    theDefaultReducer,
})

export default rootReducer;