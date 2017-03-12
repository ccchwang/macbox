import React from 'react'
import { Grid, Row, Col, Button } from 'react-bootstrap'
import TransitionGroup from 'react-addons-transition-group'
import AddReviewForm from '../components/AddReviewForm'

export default function({ reviews, selectedProduct, toggleAnimation, playReviewAdd }) {

  const rows = reviews && reviews.map(review => {
    return (
      <div key={review.id} style={{backgroundColor: 'white', position: "relative"}}>
        <Row className="show-grid">
          <Col sm={12} md={2} >
            <h4><strong>{review.user.name}</strong></h4>
          </Col>

          <Col sm={12} md={8} >
            <div className="rating-stars">
              { `★`.repeat(review.rating) }
              { `☆`.repeat(5-review.rating) }
            </div>
            <br />
            {review.description}
          </Col>

          <Col sm={12} md={2}>
            {review.date}
          </Col>
          <br />
        </Row>
        <br />
        <hr style={{
    display: 'block',
    zIndex: '5000',
    margin: '0',
    position: 'relative',
    backgroundColor: 'white',
    borderTop: '1px solid #eee'}}/>
      </div>
    )
  })

  return (
   <Grid className="review-main">
     <h3 style={{display: 'inline-block', marginRight: '30px'}}>Reviews</h3>
     <a style={playReviewAdd ? {cursor: "pointer", color: '#41b396'} : {cursor: "pointer"}} onClick={toggleAnimation}>ADD A REVIEW</a>

     <TransitionGroup>
        { playReviewAdd && <AddReviewForm />}
      </TransitionGroup>
      <br /><br/>
     <hr style={{
    display: 'block',
    zIndex: '5000',
    margin: '0',
    position: 'relative',
    backgroundColor: 'white',
    borderTop: '1px solid #eee'}}/>
      { rows }
    </Grid>
  )
}
