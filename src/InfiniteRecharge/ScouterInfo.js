import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { Form, Col } from 'react-bootstrap';
import '../reactstrap.css';
import { ALLIANCE, MATCH_NUMBER, MATCH_TYPE, SCOUTER_NAME, TEAM_NUMBER } from './Redux/ActionsTypesAndStore/Types';


function ScouterInfo(props) {
    return (
        <div>
            <Form>
                <Form.Group controlId={'name'}>
                    <Form.Label>Scouter Name: {props.scouterName}</Form.Label>
                    <Form.Control type="text" placeholder="First Last" onChange={e => props.updateScouterAndTeamInfo(SCOUTER_NAME, e.target.value)}></Form.Control>
                </Form.Group>

                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label>Match Number: {props.matchNumber}</Form.Label>
                        <Form.Control type="number" min="1" max="1000" onChange={e => props.updateScouterAndTeamInfo(MATCH_NUMBER, e.target.value)}/>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Match Type: {props.matchType}</Form.Label>
                        <Form.Control as="select" onChange={e => props.updateScouterAndTeamInfo(MATCH_TYPE, e.target.value)}>
                            <option>QM</option>
                            <option>QF</option>
                            <option>SF</option>
                            <option>F</option>
                        </Form.Control>
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Team Number: {props.teamNumber}</Form.Label>
                            <Form.Control type="number" min="0" max="10000" onChange={e => props.updateScouterAndTeamInfo(TEAM_NUMBER, e.target.value)}></Form.Control>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Alliance: {props.alliance}</Form.Label>
                            <Form.Check 
                                type="radio"
                                label="Red"
                                value="Red"
                                name="alliance"
                                onChange={e => props.updateScouterAndTeamInfo(ALLIANCE, e.target.value)}
                            />

                            <Form.Check 
                                type="radio"
                                label="Blue"
                                value="Blue"
                                name="alliance"
                                onChange={e => props.updateScouterAndTeamInfo(ALLIANCE, e.target.value)}
                            />
                        </Form.Group>
                </Form.Row>
            </Form>
        </div>
    )
}


export default ScouterInfo;