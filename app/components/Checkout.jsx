import React from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col, Button, FormControl, Form, FormGroup, ControlLabel } from 'react-bootstrap'
import { Link } from 'react-router'
import { TextInput } from 'belle';
import { Step, Stepper, StepLabel } from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import ExpandTransition from 'material-ui/internal/ExpandTransition';
import TextField from 'material-ui/TextField';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();



export default connect(
  (state) => {
    return {
      lineItems: state.cart.lineItems
    }
  }
)(class HorizontalTransition extends React.Component {

  state = {
    loading: false,
    finished: false,
    stepIndex: 0,
  };

  dummyAsync = (cb) => {
    this.setState({loading: true}, () => {
      this.asyncTimer = setTimeout(cb, 500);
    });
  };

  handleNext = () => {
    const {stepIndex} = this.state;
    if (!this.state.loading) {
      this.dummyAsync(() => this.setState({
        loading: false,
        stepIndex: stepIndex + 1,
        finished: stepIndex >= 2,
      }));
    }
  };

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (!this.state.loading) {
      this.dummyAsync(() => this.setState({
        loading: false,
        stepIndex: stepIndex - 1,
      }));
    }
  };

  getStepContent(stepIndex) {
    const checkoutStyle = {
      display: 'inline-block',
      border: '1px solid rgb(204, 204, 204)',
      padding: '23px',
      marginTop: '-7px',
      fontSize: '1em',
    }

    const inlineStyle = Object.assign({}, checkoutStyle, {width: '50%'})
    const inlineStyle2 = Object.assign({}, checkoutStyle, {width: '33.33333333%'})
    const shippingStyle = Object.assign({}, checkoutStyle, {color: 'black', cursor: "pointer"})

    let rows = this.props.lineItems && this.props.lineItems.map(item => {
    let price = (item.product.formattedPrice * item.quantity).toFixed(2)

    return (
      <div key={item.id} >
        <Row className="show-grid main-padding" key={item.id}>
          <Col xs={4} >
            <img className="img-responsive" src={item.product.imgUrl} />
          </Col>

          <Col xs={8}  >
            <h4><Link to={`/products/${item.product_id}`}>{item.product.name}</Link></h4>
            <p>{item.product.category}</p>
            <p>${price} • Qty {item.product.quantity}</p>
          </Col>

        </Row>
        <hr />
      </div>
    )
  })

    switch (stepIndex) {
      case 0:
        return (
          <div>
          <div className="checkout-padding">

          <div className="checkout-form">
            <h3>Shipping Address</h3>
            <TextInput defaultValue="FIRST NAME" style={inlineStyle}/>
            <TextInput defaultValue="LAST NAME" style={inlineStyle}/>
            <TextInput defaultValue="STREET 1" style={checkoutStyle}/>
            <TextInput defaultValue="STREET 2" style={checkoutStyle}/>
            <TextInput defaultValue="CITY" style={inlineStyle2}/>
            <TextInput defaultValue="STATE" style={inlineStyle2}/>
            <TextInput defaultValue="ZIP" style={inlineStyle2}/>
          </div>

          <div className="checkout-summary">
            <h3>Order Summary</h3>
            { rows }
          </div>

          </div>
          </div>
        );
      case 1:
        return (
          <div>
          <div className="checkout-padding">

          <div className="checkout-form">
            <h3>Shipping Method</h3>
            <TextInput defaultValue="UPS NEXT DAY AIR $22.00" style={shippingStyle}/>
            <TextInput defaultValue="UPS 2ND DAY AIR $15.00" style={shippingStyle}/>
            <TextInput defaultValue="UPS GROUND $7.00" style={shippingStyle}/>
            <TextInput defaultValue="STANDARD $0.00" style={shippingStyle}/>
          </div>

          <div className="checkout-summary">
            <h3>Order Summary</h3>
            { rows }
          </div>

          </div>
          </div>
        );
      case 2:
        return (
          <div>
          <div className="checkout-padding">

          <div className="checkout-form">
            <h3>Payment Details</h3>
            <TextInput defaultValue="FIRST NAME" style={inlineStyle}/>
            <TextInput defaultValue="LAST NAME" style={inlineStyle}/>
            <TextInput defaultValue="CREDIT CARD NUMBER" style={checkoutStyle}/>
            <TextInput defaultValue="EXP. MONTH" style={inlineStyle2}/>
            <TextInput defaultValue="EXP. YEAR" style={inlineStyle2}/>
            <TextInput defaultValue="CCV" style={inlineStyle2}/>
          </div>

          <div className="checkout-summary">
          </div>

          </div>
          </div>
        );
      default:
        return
    }
  }

  renderContent() {
    const {finished, stepIndex} = this.state;
    const contentStyle = {margin: '0 16px', overflow: 'hidden'};

    if (finished) {
      return (
        <div style={contentStyle}>
          <p>
            <a
              href="#"
              onClick={(event) => {
                event.preventDefault();
                this.setState({stepIndex: 0, finished: false});
              }}
            >
              Success!
            </a>
          </p>
        </div>
      );
    }

    return (
      <div style={contentStyle}>
        <div>{this.getStepContent(stepIndex)}</div>
        <div style={{marginTop: 24, marginBottom: 12}}>
          <FlatButton
            label="Back"
            disabled={stepIndex === 0}
            onTouchTap={this.handlePrev}
            style={{marginRight: 12}}
          />
          <RaisedButton
            label={stepIndex === 2 ? 'Place Order' : 'Next'}
            primary={true}
            onTouchTap={this.handleNext}
          />
        </div>
      </div>
    );
  }

  render() {
    const {loading, stepIndex} = this.state;
    console.log(this.props.lineItems)


  return (
    <div style={{width: '85%', margin: 'auto', fontFamily: "Tenor Sans"}}>
      <h1>Checkout</h1>
      <div className="main-padding">
      <Stepper activeStep={stepIndex}>
        <Step>
          <StepLabel style={{fontFamily: "Tenor Sans"}}>Shipping Address</StepLabel>
        </Step>
        <Step>
          <StepLabel style={{fontFamily: "Tenor Sans"}}>Shipping Method</StepLabel>
        </Step>
        <Step>
          <StepLabel style={{fontFamily: "Tenor Sans"}}>Payment Details</StepLabel>
        </Step>
      </Stepper>

      </div>
      <ExpandTransition loading={loading} open={true}>
        {this.renderContent()}
      </ExpandTransition>
    </div>
  );
  }
})



