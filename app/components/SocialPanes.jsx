import React, { Component } from 'react';
import { connect } from 'react-redux'
import { SortablePane, Pane } from 'react-sortable-pane';
import { Col } from 'react-bootstrap'


export default connect(
  (state) => {
    return {
      products: state.products.products
    }
  }
)(function(props){

  const panes = props.products && props.products.map((product, i) => {
    const backgroundImg = {backgroundImage: `url(${product.imgUrl})`};

    return (<Pane
      width={200}
      height={200}
      style={backgroundImg}
      key={i}
      id={product.id}
      className="sort-pane"
      >
        <p onClick={() => console.log('hi')}>{product.name}</p>
      </Pane>)
  })

  const column1 = panes.slice(0,3);
  const column2 = panes.slice(3,6);
  const column3 = panes.slice(6,8);
  const column4 = panes.slice(8);



  return (
    <div className="main-padding">
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


    </div>
  );
}
)



