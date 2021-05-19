import { SCOUTER_NAME_AND_MATCH_INFO } from "./Types";


export function updateScouterAndTeamInfo(name = "", matchNumber = "", matchType = "", teamNumber = "", alliance = "") {
    return {
        type: SCOUTER_NAME_AND_MATCH_INFO,
        payload: {
            name: name,
            matchInfo: {
                matchNumber: matchNumber,
                matchType: matchType
            },
            teamInfo: {
                teamNumber: teamNumber,
                alliance: alliance
            }
        }
    }
}

  