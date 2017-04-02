import React from 'react'
import {PageHeader, Form, Col, FormGroup, Checkbox, Button, ControlLabel, FormControl} from "react-bootstrap"

export const SignUp = ({ signup }) => (
  <div className="login-container">
  <Form
    horizontal
    onSubmit={evt => {
    evt.preventDefault()
    signup(evt.target.email.value, evt.target.password.value, evt.target.name.value)
  } }
    style={{width: '100%'}}
    >

    <FormGroup>
      <Col sm={2} />
      <Col sm={10}>
        <Button id="google-login-btn" href="/api/auth/login/google">Sign up with Google</Button>
      </Col>
    </FormGroup>

    <FormGroup>
      <Col sm={2} />
      <Col sm={10}>
        <Button id="fb-login-btn" href="/api/auth/login/facebook">Sign up with Facebook
      </Button>
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontalName">
      <Col style={{marginLeft: '0'}} componentClass={ControlLabel} smOffset={2} sm={2}>
        Name
      </Col>
      <Col sm={10}>
        <FormControl type="name" name='name' placeholder="Name" />
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
          Sign Up
        </Button>
      </Col>
    </FormGroup>
  </Form>
  </div>

)

import {signup} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'

export default connect (
  state => ({}),
  {signup},
)(SignUp)
