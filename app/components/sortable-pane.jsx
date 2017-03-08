import React, { Component } from 'react';
import { SortablePane, Pane } from 'react-sortable-pane';

const style = {
  fontSize: "40px",
  textAlign:"center",
  paddingTop:"60px",
  height:"400px",
  border: "solid 1px #ccc",
  borderRadius: "5px",
  backgroundColor: "#fff"
};

export default class Example extends Component{
  render() {
    return (
      <SortablePane
          direction="vertical"
          margin={10}
          onResize={(id, dir, size, rect) => null}
          onOrderChange={(panes) => null}
      >
        <Pane
           width={200}
           height={500}
           style={style}
        >
          A
        </Pane>
        <Pane
           width={300}
           height={400}
           style={style}
         >
          B
        </Pane>
      </SortablePane>
    );
  }
}
