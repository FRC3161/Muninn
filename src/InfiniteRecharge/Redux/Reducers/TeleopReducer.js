import { 
    TELEOP_COLOUR_WHEEL_DONE, 
    TELEOP_COLOUR_WHEEL_LANDED, 
    TELEOP_COLOUR_WHEEL_ROTATED, 
    TELEOP_HIGH_PORT, 
    TELEOP_LOW_PORT, 
    TELEOP_MISSED, 
    TELEOP_ROBOT_ATTITUDE 
} from "../ActionsTypesAndStore/Types";


// Initial Teleop state.
const initialTeleopState = {
    attitude: null,
    highPort: 0,
    lowPort: 0,
    missed: 0,

    colourWheelDone: false,
    colourWheelLanded: false,
    colourWheelWasRotated: false
}


function TeleopReducer(state = initialTeleopState, action) {
    switch(action.type) {
        case TELEOP_ROBOT_ATTITUDE:
            return {
                ...state,
                attitude: action.payload
            }
        
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

        case TELEOP_COLOUR_WHEEL_DONE:
            return {
                ...state,
                colourWheelDone: action.payload
            }
        
        case TELEOP_COLOUR_WHEEL_LANDED:
            return {
                ...state,
                colourWheelLanded: action.payload
            }

        case TELEOP_COLOUR_WHEEL_ROTATED:
            return {
                ...state,
                colourWheelWasRotated: action.payload
            }

        default:
            return state;
    }
}


export default TeleopReducer;