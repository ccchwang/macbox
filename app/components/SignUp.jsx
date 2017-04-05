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

    <FormGroup style={{marginBottom: '35px'}}>
      <Col sm={6}>
        <Button id="google-login-btn" href="/api/auth/login/google">Sign up with Google</Button>
      </Col>
      <Col sm={6}>
        <Button id="fb-login-btn" href="/api/auth/login/facebook">Sign up with Facebook
      </Button>
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontalName">
      <Col sm={12}>
        <FormControl type="name" name='name' placeholder="Name" />
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontalEmail">
      <Col sm={12}>
        <FormControl type="email" name='email' placeholder="Email" />
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontalPassword">
      <Col sm={12}>
        <FormControl type="password" name='password' placeholder="Password" />
      </Col>
    </FormGroup>

    <FormGroup>
      <Col sm={12}>
        <Button type="submit" value="Login" className="emphasis-btn">
          SIGN UP
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
