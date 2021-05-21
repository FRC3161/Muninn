import { AUTO_INFO } from "../Types";


export function updateAutoInfo(preload = 0, highPortAuto = "", lowPortAuto = "", missedAuto = null) {
    return {
        type: AUTO_INFO,
        payload: {
            preload: preload,
            highPortAuto: highPortAuto,
            lowPortAuto: lowPortAuto,
            missedAuto: missedAuto
        }
    }
}


