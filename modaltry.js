import React, { Component, PropTypes, Children } from 'react'
import { spring } from 'react-motion'
import Transition from 'react-motion-UI-pack'


export default class Modal extends Component {
  state = {
    modalOpen: false
  }

  _toggleModal = () => {
    this.setState({modalOpen: !this.state.modalOpen});
  }

  render() {
    const modalClasses = this.state.modalOpen ? 'modal modal--open' : 'modal';

    return (
      <div>
        <button className="modal-trigger" onClick={this._toggleModal}>
          <i>+</i>
        </button>

          <Transition
            component={false}
            measure={false}
            enter={{
              opacity: 1,
              scale: 1,
              rotate: 0
            }}
            leave={{
              opacity: 0,
              scale: 0,
              rotate: 360
            }}
          >
            {
              this.state.modalOpen &&
              <div key="modal" >
                Hey I am a modal!
                <a onClick={this._toggleModal} className="modal__close"></a>
              </div>
            }
          </Transition>

      </div>
    );
  }
}

