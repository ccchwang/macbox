import React from 'react'
import { Card } from 'belle'

export default class CartDropdown extends React.Component {
  componentWillEnter (callback) {
    const el = this.container;
    TweenMax.fromTo(el, 0.3, {y: 20, opacity: 0}, {y: 0, opacity: 1, onComplete: callback});
  }

  componentWillLeave (callback) {
    const el = this.container;
    TweenMax.fromTo(el, 0.3, {y: 0, opacity: 1}, {y: 20, opacity: 0, onComplete: callback});
  }

  render () {

    return (
      <div ref={c => this.container = c}>
        <Card
          id="cart-dropdown"
          style={{ borderTop: '1px solid #f2f2f2' }}
        />
      </div>


    );
  }
}


