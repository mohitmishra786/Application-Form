// import Button from '@restart/ui/esm/Button'
// import React from 'react'
// import {Container, Row, Col, Form} from 'react-bootstrap'

// export const LoginForm = () => {
//     return (
//         <div>
//             <Container>
//                 <Row>
//                     <Col>
//                     <h1 className = "text-info text-center">Client Login</h1>
//                     <hr />
//                     <Form>
//                         <Form.Group>
//                             <Form.Label>Email Address</Form.Label>
//                             <Form.Control 
//                             type="email"
//                             name="email"
//                             placeholder="Enter Email"
//                             required
//                             />
//                         </Form.Group>
//                         <Form.Group>
//                             <Form.Label>Password</Form.Label>
//                             <Form.Control 
//                             type="password"
//                             name="password"
//                             placeholder="Enter Password"
//                             required
//                             />
//                         </Form.Group>

//                         <Button type = "submit"> Login </Button>
//                     </Form>
//                     <hr />
//                     </Col>
//                 </Row>

//                 <Row>
//                     <Col>
//                     <a href = "#!"> Forgot Password?</a>
//                     </Col>
//                 </Row>
//             </Container>
//         </div>
//     )
// }

import React, { Component } from "react";

export default class Login extends Component {
    render() {
        return (
            <form>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#!">password?</a>
                </p>
            </form>
        );
    }
}
