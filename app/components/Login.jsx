import React from 'react'
import {Form, Col, FormGroup, Checkbox, Button, ControlLabel, FormControl} from "react-bootstrap"

export default function({ login }) {
  return (
  <div className="login-container">



  <Form style={{width: '100%'}} horizontal onSubmit={evt => {
    evt.preventDefault()
    login(evt.target.email.value, evt.target.password.value)
  } }>

    <FormGroup>
      <Col sm={2} />
      <Col sm={10}>
        <Button id="google-login-btn" href="/api/auth/login/google">Login with Google</Button>
      </Col>
    </FormGroup>

    <FormGroup>
      <Col sm={2} />
      <Col sm={10}>
        <Button id="fb-login-btn" href="/api/auth/login/facebook">Login with Facebook
      </Button>
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontalEmail">
      <Col style={{marginLeft: '0'}} componentClass={ControlLabel} smOffset={2} sm={2}>
        Email
      </Col>
      <Col sm={10}>
        <FormControl type="email" name='email' placeholder="Email" />
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontalPassword">
      <Col style={{marginLeft: '0'}} componentClass={ControlLabel} smOffset={2} sm={2}>
        Password
      </Col>
      <Col sm={10}>
        <FormControl type="password" name='password' placeholder="Password" />
      </Col>
    </FormGroup>

    <FormGroup>
      <Col smOffset={4} sm={10}>
        <Checkbox>Remember me</Checkbox>
      </Col>
    </FormGroup>

    <FormGroup>
      <Col sm={2} />
      <Col sm={10}>
        <Button type="submit" value="Login" className="emphasis-btn">
          Sign in
        </Button>
      </Col>
    </FormGroup>
  </Form>
  </div>
  )
}
