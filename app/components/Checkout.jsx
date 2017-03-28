import React from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col, Button, FormControl, Form, FormGroup, ControlLabel } from 'react-bootstrap'
import { Link } from 'react-router'
import { TextInput } from 'belle';
import { RaisedButton, FlatButton, TextField, Step, Stepper, StepLabel } from 'material-ui';
import ExpandTransition from 'material-ui/internal/ExpandTransition';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import LineItem from './LineItem'
import { receiveOrder } from '../reducers/orders'


export default connect(
  (state) => {
    return {
      lineItems: state.cart.lineItems,
      userId: state.auth.id
    }
  },
  (dispatch) => {
    return {
      handleSubmit: function(order, items, userId) {
        dispatch(receiveOrder(order, items, userId))
      }
    }
  }
)(class Checkout extends React.Component {
    constructor() {
      super();
      this.state = {
        loading: false,
        finished: false,
        stepIndex: 0,
        firstName: 'FIRST NAME',
        lastName: 'LAST NAME',
        street1: 'STREET 1',
        street2: 'STREET 2',
        city: 'CITY',
        state: 'STATE',
        zip: 'ZIP',
        ccFirstName: 'FIRST NAME',
        ccLastName: 'LAST NAME',
        cc: 'CREDIT CARD NUMBER',
        expMonth: 'EXP. MONTH',
        expYear: 'EXP. YEAR',
        ccv: 'CCV',
        shippingOption: null
      }
      this.handleClick = this.handleClick.bind(this)
    }



  handleChange(input, field) {
    this.setState({[field]: input.value})
  }

  handleClick(e) {
    this.setState({shippingOption: e.target.value})
  }

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

    if (stepIndex === 2) {
      this.props.handleSubmit(this.state, this.props.lineItems, this.props.userId)
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

    let rows = this.props.lineItems && this.props.lineItems.map(item => <LineItem item={item} key={item.id} />)

    switch (stepIndex) {
      case 0:
        return (
          <div>
          <div className="checkout-padding">

          <div className="checkout-form">
            <h3>Shipping Address</h3>
            {
              [{name: 'firstName', class: 'form-50'}, {name: 'lastName', class: 'form-50'}, {name: 'street1', class: ''}, {name: 'street2', class: ''}, {name: 'city', class: 'form-33'}, {name: 'state', class: 'form-33'}, {name: 'zip', class: 'form-33'}].map(obj =>
                <TextInput
                  key={obj.name}
                  placeholder={this.state[obj.name]}
                  className={obj.class}
                  onUpdate={v => this.handleChange(v, obj.name)}
                />
              )
            }

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
            {
              ["UPS NEXT DAY AIR $22.00", "UPS 2ND DAY AIR $15.00", "UPS GROUND $7.00", "STANDARD $0.00"].map((option, i) =>
              <button
                style={{backgroundColor: this.state.shippingOption === option ? '#FAD6D6': 'white'}}
                value={option}
                onClick={this.handleClick}
                key={i}
                className="shipping-options">
                  {option}
              </button>
              )
            }
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
            {
              [{name: 'ccFirstName', class: 'form-50'}, {name: 'ccLastName', class: 'form-50'}, {name: 'cc', class: ''}, {name: 'expMonth', class: 'form-33'}, {name: 'expYear', class: 'form-33'}, {name: 'ccv', class: 'form-33'}].map(obj =>
                <TextInput
                  key={obj.name}
                  placeholder={this.state[obj.name]}
                  className={obj.class}
                  onUpdate={v => this.handleChange(v, obj.name)}
                />
              )
            }
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
          <FlatButton
            label={stepIndex === 2 ? 'Place Order' : 'Next'}
            primary={true}
            style={{backgroundColor: '#6df1d5', color: 'black'}}
            onTouchTap={this.handleNext}
          />
        </div>
      </div>
    );
  }

  render() {
    const {loading, stepIndex} = this.state;

  return (
    <div className="checkout-main">
      <h1>Checkout</h1>
      <div className="main-padding">
      <Stepper activeStep={stepIndex}>
        <Step>
          <StepLabel className="step-label">Shipping Address</StepLabel>
        </Step>
        <Step>
          <StepLabel className="step-label">Shipping Method</StepLabel>
        </Step>
        <Step>
          <StepLabel className="step-label">Payment Details</StepLabel>
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



