import { TELEOP_HIGH_PORT, TELEOP_LOW_PORT, TELEOP_MISSED } from "../Types";


export function updateTeleopHighPort(highPort = 0) {
    return {
        type: TELEOP_HIGH_PORT,
        payload: highPort
    }
}

export function updateTeleopLowPort(lowPort = 0) {
    return {
        type: TELEOP_LOW_PORT,
        payload: lowPort
    }
}

export function updateTeleopMissedStatus(missedTeleop = null) {
    return {
        type: TELEOP_MISSED,
        payload: missedTeleop
    }
}
