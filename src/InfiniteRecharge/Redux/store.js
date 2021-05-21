import { combineReducers, createStore } from "redux";
import AutoReducer from "./AutoAndTelop/AutoReducer";
import ScouterInfoReducer from "./ScouterInfoReducer";


const rootReducer = combineReducers({
    scouterAndTeamInfo: ScouterInfoReducer,
    autoAndTeleopInfo: AutoReducer
})

const store = createStore(rootReducer);


export default store;