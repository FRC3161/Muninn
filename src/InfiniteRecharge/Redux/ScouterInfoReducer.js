import { SCOUTER_NAME, MATCH_NUMBER, MATCH_TYPE, TEAM_NUMBER, ALLIANCE } from "./Types";


// State.
const initialScouterAndTeamState = {
    scouterName: "",
    matchNumber: "",
    matchType: "",
    teamNumber: "",
    alliance: ""
}


function ScouterInfoReducer(state = initialScouterAndTeamState, action) {
    switch(action.type) {
        case SCOUTER_NAME:
            return {
                ...state,
                scouterName: action.payload
            }

        case MATCH_NUMBER:
            return {
                ...state,
                matchNumber: action.payload
            }

        case MATCH_TYPE:
            return {
                ...state,
                matchType: action.payload
            }

        case TEAM_NUMBER:
            return {
                ...state,
                teamNumber: action.payload
            }

        case ALLIANCE:
            return {
                ...state,
                alliance: action.payload
            }

        default:
            return state;
    }
}


export default ScouterInfoReducer;