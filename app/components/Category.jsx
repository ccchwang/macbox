import React from 'react'
import { Grid, Row } from 'react-bootstrap'
import { Link } from 'react-router'
import CategorySingleItem from './CategorySingleItem'


export default function({ products, category, modalOpen }) {

  const cols = products && products.map(product =>
    <CategorySingleItem
      product={product}
      modalOpen={modalOpen}
      key={product.id}
    />)

  let groupedCols = [], counter = 0;
  let rows = [];

  for (var i = 0; i < cols.length; i++) {
    groupedCols.push(cols[i]);
    counter++;

    if (counter % 4 === 0 || counter === cols.length) {
      rows.push(<Row className="show-grid main-padding" key={i}>{groupedCols}</Row>)
      groupedCols = [];
    }
  }

  return (
    <Grid>
      <Link to={`/`} className="category-link">Shop</Link> / {category}
      <br /><br /><br />
      { rows }
    </Grid>
  )
}
