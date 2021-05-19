import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import '../reactstrap.css';


function ScouterInfo(props) {

    const [name, setName] = useState(props.scouterName);
    const [matchNumber, setMatchNumber] = useState(props.matchNumber);
    const [matchType, setMatchType] = useState(props.matchType);
    const [teamNumber, setTeamNumber] = useState(props.teamNumber);
    const [alliance, setAlliance] = useState(props.alliance);

    if (props.page === 1) {
        return (
            <div>
                <Form>
                    <Form.Group controlId={'name'}>
                        <Form.Label>Scouter Name</Form.Label>
                        <Form.Control type={"text"} placeholder={"First Last"} onChange={e => setName(e.target.value)}></Form.Control>
                    </Form.Group>

                    <Form.Row>
                        <Form.Group as={Col} controlId={"matchNumber"}>
                            <Form.Label>Match Number</Form.Label>
                            <Form.Control type="text" placeholder="E.g. '31" onChange={e => setMatchNumber(e.target.value)}/>
                        </Form.Group>
                        <Form.Group as={Col} controlId={"matchType"}>
                            <Form.Label>Match Type</Form.Label>
                            <Form.Control type="text" onChange={e => setMatchType(e.target.value)}></Form.Control>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                            <Form.Group as={Col} controlId={"teamNumber"}>
                                <Form.Label>Team Number</Form.Label>
                                <Form.Control type="text" placeholder="E.g. 3161" onChange={e => setTeamNumber(e.target.value)}></Form.Control>
                            </Form.Group>

                            <Form.Group controlId={"alliance"}>
                                <Form.Label>Alliance</Form.Label>
                                <Form.Control type="text" placeholder="'Blue' or 'Red'" onChange={e => setAlliance(e.target.value)}></Form.Control>
                            </Form.Group>
                    </Form.Row>
                    <Button varient="primary" onClick={() => props.updateScouterAndTeamInfo(name, matchNumber, matchType, teamNumber, alliance)}>Next</Button>  {/* TODO: May have to find an alternative to updating the Redux state. */}
                </Form>
            </div>
        )
    } else {  // Eventually alter this statement to "return null" upon satisfaction with everything else.
        return (
            <div>
                <h3>{props.scouterName}, {props.matchNumber}</h3>
                <h3>{props.matchNumber}</h3>
                <h3>{props.matchType}</h3>
                <h3>{props.teamNumber}</h3>
                <h3>{props.alliance}</h3>
            </div>
        )
    }
}


export default ScouterInfo;