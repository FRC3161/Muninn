import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";


function Auto(props) {
    
    const [ preload, setPreload ] = useState(0);
    const [ highPortAuto, setHighPortAuto ] = useState(0);
    const [ lowPortAuto, setLowPortAuto ] = useState(0);
    const [ missedAuto, setMissedAuto ] = useState(null)
    
    if (props.page2 === 0) {
        return (
            <div>
                <Form>
                    <Container>
                        <Row>
                            <Col>
                                <Form.Label>Pre-loaded Power Cells</Form.Label>
                                <Form.Check 
                                    type={"radio"}
                                    label="0"
                                    value={0}
                                    name="preloadedPowerCells"
                                    onChange={e => setPreload(e.target.value)}
                                />

                                <Form.Check 
                                    type={"radio"}
                                    label="1"
                                    value={1}
                                    name="preloadedPowerCells"
                                    onChange={e => setPreload(e.target.value)}
                                />

                                <Form.Check 
                                    type={"radio"}
                                    label="2"
                                    value={2}
                                    name="preloadedPowerCells"
                                    onChange={e => setPreload(e.target.value)}
                                />

                                <Form.Check 
                                    type={"radio"}
                                    label="3"
                                    value={3}
                                    name="preloadedPowerCells"
                                    onChange={e => setPreload(e.target.value)}
                                />
                            </Col>

                            <Col>
                                <Form.Check 
                                    type="radio"
                                    label="Missed the Autonomous Period"
                                    value={true}
                                    name="activeAuto"
                                    onChange={e => setMissedAuto(e.target.value)}
                                />

                                <Form.Check 
                                    type="radio"
                                    label="Active During the Autonomous Period"
                                    value={false}
                                    name="activeAuto"
                                    onChange={e => setMissedAuto(e.target.value)}
                                />
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Number of High Port Cells</Form.Label>
                                    <Form.Control as="select" onChange={e => setHighPortAuto(e.target.value)}>
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
                                    <Form.Label>Number of Low Port Cells</Form.Label>
                                    <Form.Control as="select" onChange={e => setLowPortAuto(e.target.value)}>
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

                        <Button varient="primary" className="btn-gold" onClick={() => props.updateAutoInfo(preload, highPortAuto, lowPortAuto, missedAuto)}>Next</Button>

                    </Container>
                </Form>
            </div>
        )
    } else {
        return (
            <div>
                <h3>{props.preload}</h3>
                <h3>{props.highPortAuto}</h3>
                <h3>{props.lowPortAuto}</h3>
                <h3>{props.missedAuto}</h3>
            </div>
        )
    }
}


export default Auto;