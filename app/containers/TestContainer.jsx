import { connect } from 'react-redux'
import { handleCartAdd } from '../handleCartAdd'
import TransitionGroup from 'react-addons-transition-group';
import Test from '../components/Test'
import React from 'react'

export default connect()(
  class extends React.Component {
  state = {
    shouldShakeBox: true
  };

  toggleBox = () => {
    this.setState({
      shouldShakeBox: !this.state.shouldShakeBox
    });
  };

  render () {

    return (
      <div className="page">

        <TransitionGroup>
          { this.state.shouldShakeBox && <Test toggle={this.toggleBox}  />}
        </TransitionGroup>

        <button
          className="toggle-btn"
          onClick={this.toggleBox}
        >
          toggle
        </button>
      </div>
    );
  }
})

