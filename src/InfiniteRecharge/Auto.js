import React from "react";
import { Form, Container, Row, Col } from "react-bootstrap";
import { AUTO_HIGH_PORT, AUTO_LOW_PORT, AUTO_MISSED, PRELOAD } from "./Redux/Types";


function Auto(props) {
    return (
        <div>
            <Form>
                <Container>
                    <Row>
                        <Col>
                            <Form.Label>Pre-loaded Power Cells: {props.preload}</Form.Label>
                            <Form.Check 
                                type={"radio"}
                                label="0"
                                value={0}
                                name="preloadedPowerCells"
                                onChange={e => props.updateAutoInfo(PRELOAD, e.target.value)}
                            />

                            <Form.Check 
                                type={"radio"}
                                label="1"
                                value={1}
                                name="preloadedPowerCells"
                                onChange={e => props.updateAutoInfo(PRELOAD, e.target.value)}
                            />

                            <Form.Check 
                                type={"radio"}
                                label="2"
                                value={2}
                                name="preloadedPowerCells"
                                onChange={e => props.updateAutoInfo(PRELOAD, e.target.value)}
                            />

                            <Form.Check 
                                type={"radio"}
                                label="3"
                                value={3}
                                name="preloadedPowerCells"
                                onChange={e => props.updateAutoInfo(PRELOAD, e.target.value)}
                            />
                        </Col>

                        <Col>
                            <Form.Label>{props.missed}</Form.Label>
                            <Form.Check 
                                type="radio"
                                label="Missed the Autonomous Period"
                                value={true}
                                name="activeAuto"
                                onChange={e => props.updateAutoInfo(AUTO_MISSED, e.target.value)}
                            />

                            <Form.Check 
                                type="radio"
                                label="Active During the Autonomous Period"
                                value={false}
                                name="activeAuto"
                                onChange={e => props.updateAutoInfo(AUTO_MISSED, e.target.value)}
                            />
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Form.Group>
                                <Form.Label>Number of High Port Cells: {props.highPort}</Form.Label>
                                <Form.Control as="select" onChange={e => props.updateAutoInfo(AUTO_HIGH_PORT, e.target.value)}>
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
                                <Form.Label>Number of Low Port Cells: {props.lowPort}</Form.Label>
                                <Form.Control as="select" onChange={e => props.updateAutoInfo(AUTO_LOW_PORT, e.target.value)}>
                                    <option>0</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>5+</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>
                </Container>
            </Form>
        </div>
    )
}


export default Auto;