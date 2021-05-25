import { combineReducers, createStore } from "redux";
import AutoReducer from "../Reducers/AutoReducer";
import EndgameReducer from "../Reducers/EndgameReducer";
import ScouterInfoReducer from "../Reducers/ScouterInfoReducer";
import TeleopReducer from "../Reducers/TeleopReducer";


const rootReducer = combineReducers({
    scouterAndTeamInfo: ScouterInfoReducer,
    autoInfo: AutoReducer,
    teleopInfo: TeleopReducer,
    endgameInfo: EndgameReducer
})

const store = createStore(rootReducer);


export default store;