import React from 'react'
import { Card } from 'belle'

export default class CartDropdown extends React.Component {
  componentWillEnter (callback) {
    const el = this.container;
    TweenMax.from(el, 0.7, {height: '0%', ease:Back.easeOut, onComplete: callback});

  }


  componentWillLeave (callback) {
    const el = this.container;
    TweenMax.to(el, 0.7, {height: '0px', opacity: 0.2, onComplete: callback});
  }

  render () {

    return (
      <div ref={c => this.container = c} id="cart-dropdown">

        <h1>asdgadgad</h1>
        <h1>asdgadgad</h1>
        <h1>asdgadgad</h1>
        <h1>asdgadgad</h1>

      </div>


    );
  }
}


