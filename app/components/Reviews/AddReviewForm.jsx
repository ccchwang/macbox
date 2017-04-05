import React from 'react'
import { Button } from 'react-bootstrap'
import { TextInput, Rating } from 'belle'

export default class AddReviewForm extends React.Component {
  componentWillEnter (callback) {
    const el = this.container;
    TweenLite.from(el, 0.6, {height: 0, ease:Back.easeOut, onComplete: callback});
  }

  componentWillLeave (callback) {
    const el = this.container;
    TweenLite.to(el, 0.6, {height: 0, ease:Back.easeIn, onComplete: callback});
  }

  render () {
    return (

      <div id="add-review-form" ref={c => this.container = c}>
        <Rating
          defaultValue={3}
          characterStyle={{color: '#d66e98'}}
          hoverCharacterStyle={{color: '#d66e98'}}
          activeCharacterStyle={{color: '#d66e98'}}
        ></Rating>
        <TextInput placeholder="REVIEW SUMMARY" />
        <Button className="emphasis-btn review-btn">SUBMIT REVIEW</Button>
      </div>
    );
  }
}


