import React from "react";
import { Form, Container, Row, Col } from "react-bootstrap";
import { AUTO_HIGH_PORT, AUTO_LOW_PORT, AUTO_MISSED, PRELOAD } from "./Redux/ActionsTypesAndStore/Types";


function Auto(props) {
    return (
        <div>
            <Form>
                <Container>
                    <Row>
                        <Col>
                            <Form.Label>Pre-loaded Power Cells: {props.preload}</Form.Label>
                            <Form.Control type="number" min="0" max="3" onChange={e => props.updateAutoInfo(PRELOAD, e.target.value)}></Form.Control>
                        </Col>

                        <Col>
                            <Form.Label>Low and High Ports Missed: {props.missed}</Form.Label>
                            <Form.Control type="number" min="0" max="50" onChange={e => props.updateAutoInfo(AUTO_MISSED, e.target.value)}></Form.Control>
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