import React from "react";
import { Form, Col, Row } from "react-bootstrap";

import { ENDGAME_CLIMB, ENDGAME_BALANCED, ENDGAME_NUMBER_OF_CLIMBS, MATCH_NOTES } from "./Redux/ActionsTypesAndStore/Types";


function Endgame(props) {
    return (
        <div>
            <Form>
                <Col>
                    <Row>
                        <Form.Label>Climb? {props.climb}</Form.Label>
                        <Form.Control as="select" onChange={e => props.updateEndgameInfo(ENDGAME_CLIMB, e.target.value)}>
                            <option>Yes</option>
                            <option>No</option>
                            <option>Attempted</option>
                        </Form.Control>
                    </Row>

                    <Row>
                        <Form.Label>Balanced? {props.balanced}</Form.Label>
                        <Form.Check 
                            type="radio"
                            label="Yes"
                            name="balanced"
                            value={true}
                            onChange={e => props.updateEndgameInfo(ENDGAME_BALANCED, e.target.value)}
                        />

                        <Form.Check 
                            type="radio"
                            label="No"
                            name="balanced"
                            value={false}
                            onChange={e => props.updateEndgameInfo(ENDGAME_BALANCED, e.target.value)}
                        />
                    </Row>

                    <Row>
                        <Form.Label>Number of Climbs: {props.numberOfClimbs}</Form.Label>
                        <Form.Control type="number" min="1" max="3" onChange={e => props.updateEndgameInfo(ENDGAME_NUMBER_OF_CLIMBS, e.target.value)}></Form.Control>
                    </Row>

                    <Row>
                        <Form.Label>Match Notes: {props.matchNotes}</Form.Label>
                        <Form.Control type="text" onChange={e => props.updateEndgameInfo(MATCH_NOTES, e.target.value)}></Form.Control>
                    </Row>
                </Col>
            </Form>
        </div>
    )
}


export default Endgame;