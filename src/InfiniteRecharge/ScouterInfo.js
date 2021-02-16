import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import Form from 'react-bootstrap/Form';
import '../reactstrap.css';

class ScouterInfo extends React.Component {
    render () {
        return(
            <div>
                <Form>
                    <Form.Group controlId={'name'}>
                        <Form.Label>Scouter Name</Form.Label>
                        <Form.Control type={"text"} placeholder={"First Last"}></Form.Control>
                    </Form.Group>
                </Form>
            </div>
        )
    }
}

export default ScouterInfo;