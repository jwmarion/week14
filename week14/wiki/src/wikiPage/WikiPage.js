import React from 'react';
import * as ReactRedux from 'react-redux';
import * as actions from './WikiPage.action';

class WikiPage extends React.Component {
  render(){

    return(
      <div>
        <h1>Hey.</h1>
      </div>
    )
  }
}

const WikiPageContainer = ReactRedux.connect(
  state => ({
  }),
  actions
)(WikiPage)

export default WikiPageContainer;
