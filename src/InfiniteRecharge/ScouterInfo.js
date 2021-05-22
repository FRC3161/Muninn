import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import '../reactstrap.css';
import { ALLIANCE, MATCH_NUMBER, MATCH_TYPE, SCOUTER_NAME, TEAM_NUMBER } from './Redux/ActionsTypesAndStore/Types';


function ScouterInfo(props) {
    return (
        <div>
            <Form>
                <Form.Group controlId={'name'}>
                    <Form.Label>Scouter Name: {props.scouterName}</Form.Label>
                    <Form.Control type={"text"} placeholder={"First Last"} onChange={e => props.updateScouterAndTeamInfo(SCOUTER_NAME, e.target.value)}></Form.Control>
                </Form.Group>

                <Form.Row>
                    <Form.Group as={Col} controlId={"matchNumber"}>
                        <Form.Label>Match Number: {props.matchNumber}</Form.Label>
                        <Form.Control type="text" placeholder="E.g. '31" onChange={e => props.updateScouterAndTeamInfo(MATCH_NUMBER, e.target.value)}/>
                    </Form.Group>
                    <Form.Group as={Col} controlId={"matchType"}>
                        <Form.Label>Match Type: {props.matchType}</Form.Label>
                        <Form.Control type="text" onChange={e => props.updateScouterAndTeamInfo(MATCH_TYPE, e.target.value)}></Form.Control>
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                        <Form.Group as={Col} controlId={"teamNumber"}>
                            <Form.Label>Team Number: {props.teamNumber}</Form.Label>
                            <Form.Control type="text" placeholder="E.g. 3161" onChange={e => props.updateScouterAndTeamInfo(TEAM_NUMBER, e.target.value)}></Form.Control>
                        </Form.Group>

                        <Form.Group controlId={"alliance"}>
                            <Form.Label>Alliance: {props.alliance}</Form.Label>
                            <Form.Control type="text" placeholder="'Blue' or 'Red'" onChange={e => props.updateScouterAndTeamInfo(ALLIANCE, e.target.value)}></Form.Control>
                        </Form.Group>
                </Form.Row>
            </Form>
        </div>
    )
}


export default ScouterInfo;