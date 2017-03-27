import React from 'react';

export default class Backdrop extends React.Component {
  componentWillEnter (callback) {
    const el = this.backdrop;
    TweenMax.from(el, 0.3, {opacity: 0, ease:Back.easeIn, onComplete: callback});
  }

  componentWillLeave (callback) {
    const el = this.backdrop;
    TweenMax.to(el, 0.3, {opacity: 0, onComplete: callback});
  }

  render() {

    return (
        <div ref={c => this.backdrop = c} style={{position: 'relative', zIndex: 1300}}>
        {
          this.props.play && <div className="drawer-backdrop"  />
        }
        </div>

    );
  }
}
