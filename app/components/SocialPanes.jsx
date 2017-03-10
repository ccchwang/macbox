import React, { Component } from 'react';
import { connect } from 'react-redux'
import { SortablePane, Pane } from 'react-sortable-pane';
import { Col, Modal, Button } from 'react-bootstrap'



export default connect(
  (state) => {
    return {
      products: state.products.products
    }
  }
)(class extends React.Component {
    constructor() {
      super()
      this.state = {showModal: false};
      this.close = this.close.bind(this);
      this.open = this.open.bind(this);
    }

  close() { this.setState({ showModal: false }) }

  open() { this.setState({ showModal: true }) }

  render () {
  const panes = this.props.products && this.props.products.map((product, i) => {
    const backgroundImg = {backgroundImage: `url(${product.imgUrl})`};

    return (
      <Pane
        width={200}
        height={200}
        style={backgroundImg}
        key={i}
        id={product.id}
        className="sort-pane"
        >
          <p onClick={this.open}>{product.name}</p>
      </Pane>)
  })

  const column1 = panes.slice(0,3);
  const column2 = panes.slice(3,6);
  const column3 = panes.slice(6,8);
  const column4 = panes.slice(8);



  return (
    <div className="pane-padding">
      <h1>Your Wishlist</h1>

      <Col md={3}>
        <div className="pane-header">PRODUCTS</div>
        <SortablePane
          direction="vertical"
          margin={10}
          onResize={(id, dir, size, rect) => null}
          onOrderChange={(panes) => null}
          style={{position: 'relative', height: '600px', width: '100%', padding: '3%'}}
        >
          { column2 }
        </SortablePane>
      </Col>

      <Col md={3}>
        <div className="pane-header">PRODUCTS</div>
        <SortablePane
          direction="vertical"
          margin={10}
          onResize={(id, dir, size, rect) => null}
          onOrderChange={(panes) => null}
          style={{position: 'relative', height: '750px', width: '100%', padding: '3%'}}
        >
          { column1 }
        </SortablePane>
       </Col>

       <Col md={3}>
        <div className="pane-header">PRODUCTS</div>
        <SortablePane
          direction="vertical"
          margin={10}
          onResize={(id, dir, size, rect) => null}
          onOrderChange={(panes) => null}
          style={{position: 'relative', height: '600px', width: '100%', padding: '3%'}}
        >
          { column3 }
        </SortablePane>
       </Col>

       <Col md={3}>
        <div className="pane-header">PRODUCTS</div>
        <SortablePane
          direction="vertical"
          margin={10}
          onResize={(id, dir, size, rect) => null}
          onOrderChange={(panes) => null}
          style={{position: 'relative', height: '600px', width: '100%', padding: '3%'}}
        >
          { column4 }
        </SortablePane>
       </Col>


       <Modal show={this.state.showModal} onHide={this.close} dialogClassName="custom-modal">
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Overflowing text to show scroll behavior</h4>
            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>

    </div>
  );
  }
}
)



