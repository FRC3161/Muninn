import { SCOUTER_NAME_AND_MATCH_INFO } from "./Types";


// State.
const initialState = {
    scouterName: "",
    matchInfo: {
        matchNumber: "",
        matchType: ""
    },
    teamInfo: {
        teamNumber: "",
        alliance: ""
    },
    page: 1
}


function ScouterInfoReducer(state = initialState, action) {
    switch(action.type) {
        case SCOUTER_NAME_AND_MATCH_INFO:
            return {
                ...state,
                scouterName: action.payload.name,
                matchInfo: {
                    matchNumber: action.payload.matchInfo.matchNumber,
                    matchType: action.payload.matchInfo.matchType
                },
                teamInfo: {
                    teamNumber: action.payload.teamInfo.teamNumber,
                    alliance: action.payload.teamInfo.alliance
                },
                page: state.page + 1
            }

        default:
            return state;
    }
}


export default ScouterInfoReducer;