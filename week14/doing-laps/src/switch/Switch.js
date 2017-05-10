/*
Make the light switch work.
*/
import React from 'react';
import * as ReactRedux from 'react-redux';
import * as actions from './Switch.actions';

class Switch extends React.Component {
  render() {
    let imageUrl;
    let buttonLabel;
    if (this.props.on) {
      imageUrl = 'images/bulb-on.png';
      buttonLabel = 'Off';
    } else {
      imageUrl = 'images/bulb-off.png';
      buttonLabel = 'On';
    }
    return (
      <div>
        <img src={imageUrl} width="160" alt="light switch"/>
        <button onClick={()=>this.props.flipSwitch(this.props.on)}>
          {buttonLabel}
        </button>
      </div>
    );
  }
}

const SwitchContainer = ReactRedux.connect(
  state => state.switch,
  actions
)(Switch);

export default SwitchContainer;
