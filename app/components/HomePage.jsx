import React from 'react'
import { Grid, Row } from 'react-bootstrap'
import GridBox from './GridBox'


export default function(props) {
  const boxes = props.products.map((product, index) => {

    if (index === 0 || index % 10 === 0 ) {
      return (
        <GridBox
          md={6}
          key={product.id}
          product={product}
        />
      )
    }
    else if (index === 7 || index === 17 ) {
      return (
        <GridBox
          md={6}
          floatRight={true}
          key={product.id}
          product={product}
        />
      )
    }
    else {
      return (
        <GridBox
          md={3}
          key={product.id}
          product={product}
        />
      )
    }
  })


  return (
    <Grid>
       <Row className="show-grid all-products main-padding">
         { boxes }
       </Row>
    </Grid>
  )
}
