import {
    INITIAL_STATE_DEFAULT,
} from "../constants/ConstantStates"

const theDefaultReducer = (state = INITIAL_STATE_DEFAULT, { type, ...rest }) => {
    switch (type) {
      case 'set':
        return {...state, ...rest }
      default:
        return state
    }
}

export default theDefaultReducer;