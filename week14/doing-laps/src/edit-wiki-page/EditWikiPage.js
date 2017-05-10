/*
1. Similar to the form exercise, bind the textarea's value to the content property in the state.
2. Then the save button is pressed, make send an Ajax request to `PUT /api/page/:title` to the backend
to update the content of the page based on the value in the text area.
3. In componentDidMount, fetch the existing contents of the page if it exists and populate the text area's value with it.
4. Use componentWillReceiveProps to make navigating between editing different pages work.
*/

import React from 'react';
import * as ReactRedux from 'react-redux';
import * as actions from './EditWikiPage.actions';

class EditWikiPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Edit {this.props.params.title}</h1>
        <div>
          <input type="text" placeholder="Title"/><br/>
          <textarea rows="10"></textarea><br/>
          <button>Save</button>
        </div>
      </div>
    );
  }
}

const EditWikiPageContainer = ReactRedux.connect(
  state => state.editWikiPage,
  actions
)(EditWikiPage);

export default EditWikiPageContainer;
