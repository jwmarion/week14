import React from 'react';
import ReactDOM from 'react-dom';
import * Redux from 'redux';

class Counter extends React.Component {
  render() {
    return (
      <div>
        <button>-</button>
        {this.state.value}
        <button>+</button>
      </div>
    );
  }
}

function display() {

}
display();
