import { AUTO_INFO } from "../Types";


// Auto and Teleop state.
const autoAndTeleopState = {
    preload: 0,
    highPortAuto: "",
    lowPortAuto: "",
    missedAuto: null,
    page: 0
}

function AutoAndTeleopReducer(state = autoAndTeleopState, action) {
    switch(action.type) {
        case AUTO_INFO:
            return {
                ...state,
                preload: action.payload.preload,
                highPortAuto: action.payload.highPortAuto,
                lowPortAuto: action.payload.lowPortAuto,
                missedAuto: action.payload.missedAuto,
                page: state.page + 1
            }
            
        default:
            return state;
    }
}


export default AutoAndTeleopReducer;