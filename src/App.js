import React from "react";
import { connect } from "react-redux";

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tabs';
import './reactstrap.css';

import ScouterInfo from "./InfiniteRecharge/ScouterInfo";
import Auto from "./InfiniteRecharge/Auto";
import Teleop from "./InfiniteRecharge/Teleop";
import { updateScouterAndTeamInfo } from "./InfiniteRecharge/Redux/ScouterInfoActions";
import { updateAutoInfo } from "./InfiniteRecharge/Redux/AutoAndTelop/AutoActions";

import './App.css';
import { updateTeleopHighPort, updateTeleopLowPort, updateTeleopMissedStatus } from "./InfiniteRecharge/Redux/Teleop/TeleopActions";


function App(props) {
  return (
      <div className="App">
        <header className="App-header">
            <Tabs defaultActiveKey={"info"} id={"data-entry-tabs"} >
                <Tab eventKey={"info"} title={"Scouter and Team Info"}>
                    <ScouterInfo
                        scouterName={props.scouterName}
                        updateScouterAndTeamInfo={props.updateScouterAndTeamInfo}

                        matchNumber={props.matchNumber}
                        matchType={props.matchType}
                        teamNumber={props.teamNumber}
                        alliance={props.alliance}

                        page={props.page}
                    />
                </Tab>

                <Tab eventKey={"auto"} title={"Autonomous"}>
                    <Auto 
                        preload={props.preload}
                        highPortAuto={props.highPortAuto}
                        lowPortAuto={props.lowPortAuto}
                        missedAuto={props.missedAuto}

                        updateAutoInfo={props.updateAutoInfo}

                        page2={props.page2}
                    />
                </Tab>

                <Tab eventKey={"teleop"} title={"Teleop"}>
                    <Teleop 
                        highPort={props.highPort}
                        lowPort={props.lowPort}
                        missedTeleop={props.missedTeleop}

                        updateTeleopHighPort={props.updateTeleopHighPort}
                        updateTeleopLowPort={props.updateTeleopLowPort}
                        updateTeleopMissedStatus={props.updateTeleopMissedStatus}
                    />
                </Tab>
            </Tabs>
        </header>
      </div>
  );
}


const mapStateToProps = state => {
    return {
        scouterName: state.scouterAndTeamInfo.scouterName,
        matchNumber: state.scouterAndTeamInfo.matchInfo.matchNumber,
        matchType: state.scouterAndTeamInfo.matchInfo.matchType,
        teamNumber: state.scouterAndTeamInfo.teamInfo.teamNumber,
        alliance: state.scouterAndTeamInfo.teamInfo.alliance,
        page: state.scouterAndTeamInfo.page,

        preload: state.autoAndTeleopInfo.preload,
        highPortAuto: state.autoAndTeleopInfo.highPortAuto,
        lowPortAuto: state.autoAndTeleopInfo.lowPortAuto,
        missedAuto: state.autoAndTeleopInfo.missedAuto,
        page2: state.autoAndTeleopInfo.page,
        
        highPort: state.teleopInfo.highPort,
        lowPort: state.teleopInfo.lowPort,
        missedTeleop: state.teleopInfo.missed
    }
}


const mapDispatchToProps = dispatch => {
    return {
        updateScouterAndTeamInfo: (name, matchNumber, matchType, teamNumber, alliance) => dispatch(updateScouterAndTeamInfo(name, matchNumber, matchType, teamNumber, alliance)),
        updateAutoInfo: (preload, highPortAuto, lowPortAuto, missedAuto) => dispatch(updateAutoInfo(preload, highPortAuto, lowPortAuto, missedAuto)),

        updateTeleopHighPort: (highPort) => dispatch(updateTeleopHighPort(highPort)),
        updateTeleopLowPort: (lowPort) => dispatch(updateTeleopLowPort(lowPort)),
        updateTeleopMissedStatus: (missedTeleop) => dispatch(updateTeleopMissedStatus(missedTeleop))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
