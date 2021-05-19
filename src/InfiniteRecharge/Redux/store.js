import { combineReducers, createStore } from "redux";
import AutoAndTeleopReducer from "./AutoAndTelop/AutoAndTeleopReducer";
import ScouterInfoReducer from "./ScouterInfoReducer";


const rootReducer = combineReducers({
    scouterAndTeamInfo: ScouterInfoReducer,
    autoAndTeleopInfo: AutoAndTeleopReducer
})

const store = createStore(rootReducer);


export default store;