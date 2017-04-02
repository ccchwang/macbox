import React from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col, Button, FormControl, Form, FormGroup, ControlLabel } from 'react-bootstrap'
import { Link } from 'react-router'
import { TextInput } from 'belle';
import { ListGroupItem } from 'react-bootstrap'
import { Step, Stepper, StepLabel } from 'material-ui';
import ExpandTransition from 'material-ui/internal/ExpandTransition';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import LineItem from './LineItem'
import OrderTotal from './OrderTotal'
import { createOrder } from '../reducers/orders'


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
        dispatch(createOrder(order, items, userId))
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
        firstName: '',
        lastName: '',
        street1: '',
        street2: '',
        city: '',
        state: '',
        zip: '',
        ccFirstName: '',
        ccLastName: '',
        cc: '',
        expMonth: '',
        expYear: '',
        ccv: '',
        shippingMethod: null,
        shippingCost: 0,
        shippingTotal: 0,
        invalidStep: false,
        total: 0
      }
      this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
      let total = this.props.lineItems.reduce((acc, item) => acc += item.orderedPrice, 0);

      this.setState({total, shippingTotal: total})
    }



  handleChange(input, field) {
    this.setState({[field]: input.value})
  }

  handleClick(e) {
    const shipping = e.target.value.split("-");
    const shippingMethod = shipping[0];
    const shippingCost = +shipping[1];


    this.setState({
      shippingMethod,
      shippingCost,
      shippingTotal: this.state.total + shippingCost
    })
  }

  dummyAsync = (cb) => {
    this.setState({loading: true}, () => {
      this.asyncTimer = setTimeout(cb, 500);
    });
  };

  handleNext = () => {
    const {stepIndex, firstName, lastName, street1, street2, city, state, zip, ccFirstName, ccLastName, cc, expMonth, expYear, ccv, shippingMethod} = this.state;

    if (stepIndex === 0) {
      if (!firstName || !lastName || !street1 || !street2 || !city || !state || !zip) {
        this.setState({invalidStep: true})
        return;
      }
      else { this.setState({invalidStep: false}) }
    }

    else if (stepIndex === 1) {
      if (!shippingMethod) {
        this.setState({invalidStep: true});
        return;
      }
      else { this.setState({invalidStep: false}) }
    }

    else if (stepIndex === 2) {
      if (!ccFirstName || !ccLastName || !cc || !expMonth || !expYear || !ccv) {
        this.setState({invalidStep: true})
        return;
      }
      this.props.handleSubmit(this.state, this.props.lineItems, this.props.userId)
    }

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

    let rows = this.props.lineItems && this.props.lineItems.map(item => {
      let price = item.orderedPrice;
      return <LineItem price={price} item={item} key={item.id} />
    })

    switch (stepIndex) {
      case 0:
        return (
          <div className="checkout-padding">

          <div className="checkout-form">
            <h3 className="checkout-heading">Shipping Address</h3>
            {
              this.state.invalidStep && <ListGroupItem bsStyle="danger">Please fill out all fields!</ListGroupItem>
            }
            {
              [{name: 'firstName', class: 'form-50', val: 'FIRST NAME'}, {name: 'lastName', class: 'form-50', val: 'LAST NAME'}, {name: 'street1', class: '', val: 'STREET 1'}, {name: 'street2', class: '', val: 'STREET 2'}, {name: 'city', class: 'form-33', val: 'CITY'}, {name: 'state', class: 'form-33', val: 'STATE'}, {name: 'zip', class: 'form-33', val: 'ZIP'}].map(obj =>
                <TextInput
                  key={obj.name}
                  value={this.state[obj.name]}
                  placeholder={obj.val}
                  className={obj.class}
                  onUpdate={v => this.handleChange(v, obj.name)}
                />
              )
            }

          </div>

          <div className="checkout-summary">
            <h3>Order Summary</h3>
            { rows }
            <Col md={12} className="text-right">
              <OrderTotal
                subtotal={this.state.total}
                shipping={this.state.shippingCost}
                total={this.state.shippingTotal}
                margin="5px"
              />
            </Col>
          </div>

          </div>

        );
      case 1:
        return (
          <div>
          <div className="checkout-padding">

          <div className="checkout-form">
            <h3 className="checkout-heading">Shipping Method</h3>
            {
              this.state.invalidStep && <ListGroupItem bsStyle="danger">Please select a shipping method!</ListGroupItem>
            }
            {
              [{type: "UPS NEXT DAY AIR", cost: 22}, {type: "UPS 2ND DAY AIR", cost: 15}, {type: "UPS GROUND", cost: 7}, {type: "STANDARD", cost: 0}].map((option, i) => {
                const label = option.type + " - " + "$" + option.cost.toFixed(2);

                return (
                  <button
                    style={{backgroundColor: this.state.shippingMethod === option.type ? '#FAD6D6': 'white'}}
                    value={option.type + "-" + option.cost}
                    onClick={this.handleClick}
                    key={i}
                    className="shipping-options">
                      {label}
                  </button>
                )
              })
            }
          </div>

          <div className="checkout-summary">
            <h3>Order Summary</h3>
            { rows }
            <Col md={12} className="text-right">
              <OrderTotal
                subtotal={this.state.total}
                shipping={this.state.shippingCost}
                total={this.state.shippingTotal}
                margin="5px"
              />
            </Col>
          </div>

          </div>
          </div>
        );
      case 2:
        return (
          <div>
          <div className="checkout-padding">

          <div className="checkout-form">
            <h3 className="checkout-heading">Payment Details</h3>
            {
              this.state.invalidStep && <ListGroupItem bsStyle="danger">Please fill out all fields!</ListGroupItem>
            }
            {
              [{name: 'ccFirstName', class: 'form-50', val: 'FIRST NAME'}, {name: 'ccLastName', class: 'form-50', val: 'LAST NAME'}, {name: 'cc', class: '', val: 'CREDIT CARD NUMBER'}, {name: 'expMonth', class: 'form-33', val: 'EXP. MONTH'}, {name: 'expYear', class: 'form-33', val: 'EXP. YEAR'}, {name: 'ccv', class: 'form-33', val: 'CCV'}].map(obj =>
                <TextInput
                  key={obj.name}
                  placeholder={obj.val}
                  value={this.state[obj.name]}
                  className={obj.class}
                  onUpdate={v => this.handleChange(v, obj.name)}
                />
              )
            }
          </div>

          <div className="checkout-summary">
            <h3>Order Summary</h3>
            { rows }
            <Col md={12} className="text-right">
              <OrderTotal
                subtotal={this.state.total}
                shipping={this.state.shippingCost}
                total={this.state.shippingTotal}
                margin="5px"
              />
            </Col>
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
              <div>
                <div className="checkout-padding">
                <div className="checkout-form">
                  <h3 className="checkout-heading">Success!</h3>
                </div>
                </div>
              </div>
            </a>
          </p>
        </div>
      );
    }

    return (
      <div style={contentStyle}>
        <div>{this.getStepContent(stepIndex)}</div>
        <div style={{marginTop: 24, marginBottom: 12}}>
          <div>
          <button
            className="checkout-btn checkout-back-btn"
            disabled={stepIndex === 0}
            onClick={this.handlePrev}
          >
            Back
          </button>

          <button
            className="checkout-btn"
            onClick={this.handleNext}
          >
            {stepIndex === 2 ? 'Place Order' : 'Next'}
          </button>
          </div>
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



