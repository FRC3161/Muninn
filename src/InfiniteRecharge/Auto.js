import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";


function Auto(props) {
    
    const [ preload, setPreload ] = useState(0)
    
    if (props.page2 === 0) {
        return (
            <div>
                <Form>
                    {["radio"].map((type) => (
                        <Form.Check 
                            type={type}
                            label={"1"}
                            value={34}
                            onChange={e => setPreload(e.target.value)}
                        />
                    ))}

                    <Button varient="primary" onClick={() => props.updateAutoInfo(preload)}>Next</Button>
                </Form>
            </div>
        )
    } else {
        return (
            <div>
                <h3>{props.preload}</h3>
                <h3>{props.page2}</h3>
            </div>
        )
    }
}


export default Auto;