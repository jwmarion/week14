/*
You'll need to be running the wiki backend provided to do this part.

Within the componentDidMount method, trigger a action to fetch
all wiki pages from the backend API. Then render the title of each page
on the screen within the ul element.
*/
import React from 'react';
import * as ReactRedux from 'react-redux';
import * as actions from './AllWikiPages.actions';


class AllWikiPages extends React.Component {
  componentDidMount() {
    this.props.fetchPage();
  }

  render() {
    return (
      <div>
        <h1>All Wiki Pages</h1>
        <ul>
          {this.props.allPages.map((page,idx)=>
            <div key={idx}>
            <h2>{page.title}</h2>
            <p>{page.content}</p>
          </div>)}
        </ul>
      </div>
    );
  }
}

const AllWikiPagesContainer = ReactRedux.connect(
  state => state.allWikiPages,
  actions
)(AllWikiPages);

export default AllWikiPagesContainer;
