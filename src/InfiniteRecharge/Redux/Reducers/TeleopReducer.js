import { TELEOP_HIGH_PORT, TELEOP_LOW_PORT, TELEOP_MISSED } from "../ActionsTypesAndStore/Types";


// Initial Teleop state.
const initialTeleopState = {
    highPort: 0,
    lowPort: 0,
    missed: null
}


function TeleopReducer(state = initialTeleopState, action) {
    switch(action.type) {
        case TELEOP_HIGH_PORT:
            return {
                ...state,
                highPort: action.payload
            }

        case TELEOP_LOW_PORT:
            return {
                ...state,
                lowPort: action.payload
            }
        
        case TELEOP_MISSED:
            return {
                ...state,
                missed: action.payload
            }

        default:
            return state;
    }
}


export default TeleopReducer;