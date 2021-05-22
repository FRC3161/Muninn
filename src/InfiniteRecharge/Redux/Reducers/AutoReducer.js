import { PRELOAD, AUTO_HIGH_PORT, AUTO_LOW_PORT, AUTO_MISSED } from "../ActionsTypesAndStore/Types";


// Auto and Teleop state.
const initialAutoState = {
    preload: 0,
    highPort: "",
    lowPort: "",
    missed: null
}

function AutoReducer(state = initialAutoState, action) {
    switch(action.type) {
        case PRELOAD:
            return {
                ...state,
                preload: action.payload
            }
        
        case AUTO_HIGH_PORT:
            return {
                ...state,
                highPort: action.payload
            }

        case AUTO_LOW_PORT:
            return {
                ...state,
                lowPort: action.payload
            }
        
        case AUTO_MISSED:
            return {
                ...state,
                missed: action.payload
            }

        default:
            return state;
    }
}


export default AutoReducer;