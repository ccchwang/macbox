import React from 'react'
import { Button } from 'react-bootstrap'


export default class Box extends React.Component {
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


        <p id="test2" ref={c => this.container = c}>ADD TO CART</p>


    );
  }
}


