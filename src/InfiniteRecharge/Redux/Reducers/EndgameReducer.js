import { ENDGAME_BALANCED, ENDGAME_CLIMB, ENDGAME_NUMBER_OF_CLIMBS, MATCH_NOTES } from "../ActionsTypesAndStore/Types";


// Initial Endgame state.
const initialEndgameState = {
    climb: null,
    balanced: null,
    numberOfClimbs: 0,
    notes: ""
}


function EndgameReducer(state = initialEndgameState, action) {
    switch(action.type) {
        case ENDGAME_CLIMB:
            return {
                ...state,
                climb: action.payload
            }

        case ENDGAME_BALANCED:
            return {
                ...state,
                balanced: action.payload
            }

        case ENDGAME_NUMBER_OF_CLIMBS:
            return {
                ...state,
                numberOfClimbs: action.payload
            }

        case MATCH_NOTES:
            return {
                ...state,
                matchNotes: action.payload
            }

        default:
            return state;
    }
}


export default EndgameReducer;