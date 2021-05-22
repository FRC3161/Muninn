import React from "react";
import { Form } from "react-bootstrap";
import { TELEOP_HIGH_PORT, TELEOP_LOW_PORT, TELEOP_MISSED } from "./Redux/Types";


function Teleop(props) {
    return (
        <div>
            <Form>
                <Form.Group>
                    <Form.Label>High Port Quantity Achieved {props.highPort}</Form.Label>
                    <Form.Control as="select" onChange={(e) => props.updateTeleopInfo(TELEOP_HIGH_PORT, e.target.value)}>
                        <option>0</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>5+</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Low Port Quantity Achieved {props.lowPort}</Form.Label>
                    <Form.Control as="select" onChange={(e) => props.updateTeleopInfo(TELEOP_LOW_PORT, e.target.value)}>
                        <option>0</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>5+</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Check 
                        type="radio"
                        label="Missed the Teloperating Period"
                        value={true}
                        name="missedTeleop"
                        onChange={e => props.updateTeleopInfo(TELEOP_MISSED, e.target.value)}
                    />

                    <Form.Label>{props.missedTeleop}</Form.Label>
                    <Form.Check 
                        type="radio"
                        label="Active During the Teleoperating Period"
                        value={false}
                        name="missedTeleop"
                        onChange={e => props.updateTeleopInfo(TELEOP_MISSED, e.target.value)}
                    />
                </Form.Group>
            </Form>

            {console.log(props.missedTeleop)}
        </div>
    )
}


export default Teleop;