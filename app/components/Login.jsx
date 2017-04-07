import React from 'react'
import {Form, Col, FormGroup, Checkbox, Button, FormControl} from "react-bootstrap"

export default function({ login }) {
  return (
  <div className="login-container">



  <Form style={{width: '100%'}} horizontal onSubmit={evt => {
    evt.preventDefault()
    login(evt.target.email.value, evt.target.password.value)
  } }>

    <FormGroup style={{marginBottom: '35px'}}>
      <Col sm={6}>
        <Button id="google-login-btn" href="/api/auth/login/google">Login with Google</Button>
      </Col>
      <Col sm={6}>
        <Button id="fb-login-btn" href="/api/auth/login/facebook">Login with Facebook
      </Button>
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
          LOG IN
        </Button>
      </Col>
    </FormGroup>

    <p className="login-separator">- or -</p>

    <FormGroup>
      <Col sm={12}>
        <Button
          className="emphasis-btn guest-login"
          onClick={evt => {
            evt.preventDefault()
            login('anna@gmail.com', '1234')
          }}
        >
          GUEST LOG IN
        </Button>
      </Col>
    </FormGroup>
  </Form>
  </div>
  )
}
