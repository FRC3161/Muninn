import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tabs';
import React from "react";
import './reactstrap.css';
import ScouterInfo from "./InfiniteRecharge/ScouterInfo";

function App() {
  return (
      <div className="App">
          <header className="App-header">
              <Tabs defaultActiveKey={"info"} id={"data-entry-tabs"}>
                  <Tab eventKey={"info"} title={"Scouter Info"}>
                      <ScouterInfo/>
                  </Tab>
                  <Tab eventKey={"auto"} title={"Autonomous"}>
                      <h1> Placeholder 2</h1>
                  </Tab>
              </Tabs>
          </header>
      </div>
  );
}


export default App;
