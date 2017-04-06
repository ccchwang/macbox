import React from 'react'
import { Link } from 'react-router'
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

      <form onSubmit={this.props.handleSubmit} id="add-review-form" ref={c => this.container = c}>
        {
          this.props.user ?
          <div>
            <Rating
              defaultValue={this.props.rating}
              characterStyle={{color: '#d66e98'}}
              hoverCharacterStyle={{color: '#d66e98'}}
              activeCharacterStyle={{color: '#d66e98'}}
              onUpdate={v => this.props.handleChange(v, 'rating')}
            ></Rating>
            <TextInput onUpdate={v => this.props.handleChange(v, 'content')} placeholder="Write your review here." value={this.props.content} />
            <Button onClick={this.props.handleSubmit} className="emphasis-btn review-btn">SUBMIT REVIEW</Button>
          </div>
          :
          <div>
            <p>Please log in or create an account to leave a review.</p>
            <Link to="/login"><button className="emphasis-btn">LOG IN</button></Link>
            <Link to="/signup"><button className="emphasis-btn">SIGN UP</button></Link>
          </div>
        }
        <br />
      </form>
    );
  }
}


