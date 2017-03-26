import React from 'react'
import { Spinner } from 'belle'

export default class extends React.Component {

  componentWillEnter (callback) {
    const el = this.container;
    TweenMax.fromTo(el, 0.3, {y: 0, opacity: 0}, {y: 18, opacity: 1, onComplete: callback});
  }

  componentWillLeave (callback) {
    const el = this.container;
    TweenMax.fromTo(el, 0.3, {y: 18, opacity: 1}, {y: 0, opacity: 0, onComplete: callback});
  }

  render () {

    return (
      <div id="waitingProcess" ref={c => this.container = c}>
        <img src="/img/cart-30-16.png" id="add-cart-icon" />
        <span>  ADDING </span>
        <Spinner characterStyle={{ fontSize: 16, color: 'black' }} />
      </div>
    );
  }
}


