import { combineReducers, createStore } from "redux";
import AutoReducer from "./AutoAndTelop/AutoReducer";
import ScouterInfoReducer from "./ScouterInfoReducer";
import TeleopReducer from "./Teleop/TeleopReducer";


const rootReducer = combineReducers({
    scouterAndTeamInfo: ScouterInfoReducer,
    autoInfo: AutoReducer,
    teleopInfo: TeleopReducer
})

const store = createStore(rootReducer);


export default store;