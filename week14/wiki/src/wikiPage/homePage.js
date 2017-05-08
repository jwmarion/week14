import React from 'react';
import * as ReactRedux from 'react-redux';
import * as actions from './WikiPage.action';

class HomePage extends React.Component {
  render(){

    return(
      <div>
        <h1>Homepage</h1>
      </div>
    )
  }
}

const HomePageContainer = ReactRedux.connect(
  state => ({
  }),
  actions
)(HomePage)

export default HomePageContainer;
