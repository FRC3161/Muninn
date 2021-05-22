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
import { updateMatchInfo } from "./InfiniteRecharge/Redux/ActionsTypesAndStore/ActionsTemplate";

import './App.css';


function App(props) {
  return (
      <div className="App">
        <header className="App-header">
            <Tabs defaultActiveKey={"info"} id={"data-entry-tabs"} >
                <Tab eventKey={"info"} title={"Scouter and Team Info"}>
                    <ScouterInfo
                        scouterName={props.scouterName}
                        matchNumber={props.matchNumber}
                        matchType={props.matchType}
                        teamNumber={props.teamNumber}
                        alliance={props.alliance}

                        updateScouterAndTeamInfo={props.updateMatchInfo}
                    />
                </Tab>

                <Tab eventKey={"auto"} title={"Autonomous"}>
                    <Auto 
                        preload={props.preload}
                        highPort={props.highPortAuto}
                        lowPort={props.lowPortAuto}
                        missed={props.missedAuto}

                        updateAutoInfo={props.updateMatchInfo}
                    />
                </Tab>

                <Tab eventKey={"teleop"} title={"Teleop"}>
                    <Teleop 
                        highPort={props.highPortTeleop}
                        lowPort={props.lowPortTeleop}
                        missedTeleop={props.missedTeleop}

                        updateTeleopInfo={props.updateMatchInfo}
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
        matchNumber: state.scouterAndTeamInfo.matchNumber,
        matchType: state.scouterAndTeamInfo.matchType,
        teamNumber: state.scouterAndTeamInfo.teamNumber,
        alliance: state.scouterAndTeamInfo.alliance,

        preload: state.autoInfo.preload,
        highPortAuto: state.autoInfo.highPort,
        lowPortAuto: state.autoInfo.lowPort,
        missedAuto: state.autoInfo.missed,
        
        highPortTeleop: state.teleopInfo.highPort,
        lowPortTeleop: state.teleopInfo.lowPort,
        missedTeleop: state.teleopInfo.missed
    }
}


const mapDispatchToProps = dispatch => {
    return {
        updateMatchInfo: (type, data) => dispatch(updateMatchInfo(type, data))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
