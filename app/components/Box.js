import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'

export default class extends React.Component {

  render () {
     return (
       <div>
       {this.props.children}
       </div>
     )
  }
}
