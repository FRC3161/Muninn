import React from "react";
import { Form } from "react-bootstrap";
import { 
    TELEOP_COLOUR_WHEEL_DONE, 
    TELEOP_COLOUR_WHEEL_LANDED, 
    TELEOP_COLOUR_WHEEL_ROTATED, 
    TELEOP_HIGH_PORT, 
    TELEOP_LOW_PORT, 
    TELEOP_MISSED, 
    TELEOP_ROBOT_ATTITUDE 
} from "./Redux/ActionsTypesAndStore/Types";


function Teleop(props) {
    return (
        <div>
            <Form>
                <Form.Group>
                    <Form.Label>Robot Attitude: {props.attitude}</Form.Label>
                    <Form.Control as="select" onChange={e => props.updateTeleopInfo(TELEOP_ROBOT_ATTITUDE, e.target.value)}>
                        <option>Defensive</option>
                        <option>Scoring Goals</option>
                        <option>Offensive Scoring</option>
                        <option>Failed to Perform</option>
                    </Form.Control>
                </Form.Group>

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
                    <Form.Label>Low and High Ports Missed: {props.missed}</Form.Label>
                    <Form.Control type="number" min="0" max="50" onChange={e => props.updateTeleopInfo(TELEOP_MISSED, e.target.value)}></Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Colour Wheel</Form.Label>
                    <Form.Check 
                        type="checkbox"
                        label="Colour Wheel Done"
                        checked={props.colourWheelDone}
                        onChange={e => props.updateTeleopInfo(TELEOP_COLOUR_WHEEL_DONE, e.target.checked)}
                    />

                    <Form.Check 
                        type="checkbox"
                        label="Colour Wheel Landed"
                        checked={props.colourWheelLanded}
                        value={!props.colourWheelLanded}
                        onChange={e => props.updateTeleopInfo(TELEOP_COLOUR_WHEEL_LANDED, e.target.checked)}
                    />

                    <Form.Check 
                        type="checkbox"
                        label="Colour Wheel Rotated"
                        checked={props.colourWheelWasRotated}
                        value={!props.colourWheelWasRotated}
                        onChange={e => props.updateTeleopInfo(TELEOP_COLOUR_WHEEL_ROTATED, e.target.checked)}
                    />
                    {console.log(props.colourWheelDone, props.colourWheelLanded, props.colourWheelWasRotated)}  {/* Will be deleted in due time. */}
                </Form.Group>
            </Form>
        </div>
    )
}


export default Teleop;