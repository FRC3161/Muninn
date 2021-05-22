
// Generic function for updating all info/data.
export function updateMatchInfo(type, data = null) {
    return {
        type: type,
        payload: data
    }
}

