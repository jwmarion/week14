// Stylesheet
import './index.css';

// Standard React/Redux imports
import React from 'react';
import ReactDOM from 'react-dom';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import ReduxThunk from 'redux-thunk';

// React Router stuff
import { Router, Route, Link, IndexLink, IndexRoute, hashHistory } from 'react-router';

// import all components and their reducers here
import helloReducer from './hello/Hello.reducer';
import HelloContainer from './hello/Hello';
import homeReducer from './home/Home.reducer';
import HomeContainer from './home/Home';
import switchReducer from './switch/Switch.reducer';
import SwitchContainer from './switch/Switch';
import coinsReducer from './coins/Coins.reducer';
import CoinsContainer from './coins/Coins';
import allWikiPagesReducer from './all-wiki-pages/AllWikiPages.reducer';
import AllWikiPagesContainer from './all-wiki-pages/AllWikiPages';
import wikiPageReducer from './wiki-page/WikiPage.reducer';
import WikiPageContainer from './wiki-page/WikiPage';
import formReducer from './form/Form.reducer';
import FormContainer from './form/Form';
import editWikiPageReducer from './edit-wiki-page/EditWikiPage.reducer';
import EditWikiPageContainer from './edit-wiki-page/EditWikiPage';

// add a reducer for each component
const reducer = Redux.combineReducers({
  // the hello property here corresponds to the
  // state => state.hello line - argument of
  // ReactRedux.connect in hello/Hello.js
  // Use this pattern for each component
  hello: helloReducer,
  home: homeReducer,
  switch: switchReducer,
  coins: coinsReducer,
  allWikiPages: allWikiPagesReducer,
  wikiPage: wikiPageReducer,
  form: formReducer,
  editWikiPage: editWikiPageReducer
});

const store = Redux.createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  Redux.applyMiddleware(ReduxThunk)
);

class AppLayout extends React.Component {
  render() {
    // A a link for each component
    return (
      <div>
        <ul className="nav">
          <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
          <li><Link to="/hello" activeClassName="active">Hello</Link></li>
          <li><Link to="/switch" activeClassName="active">Switch</Link></li>
          <li><Link to="/coins" activeClassName="active">Coins</Link></li>
          <li><Link to="/allwikipages" activeClassName="active">All Wiki Pages</Link></li>
          <li><Link to="/wikipage/JavaScript">JavaScript Page</Link></li>
          <li><Link to="/wikipage/PythonLanguage">Python Page</Link></li>
          <li><Link to="/form">Form</Link></li>
          <li><Link to="/editwikipage/PythonLanguage">Edit Python Page</Link></li>
          <li><Link to="/editwikipage/JavaScript">Edit JavaScript Page</Link></li>
        </ul>
        <div className="content">
          {this.props.children}
        </div>
      </div>
    )
  }
}

// Add a route for each component
ReactDOM.render(
  <ReactRedux.Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={AppLayout}>
        <IndexRoute component={HomeContainer}/>
        <Route path="/hello" component={HelloContainer}/>
        <Route path="/switch" component={SwitchContainer}/>
        <Route path="/coins" component={CoinsContainer}/>
        <Route path="/allwikipages" component={AllWikiPagesContainer}/>
        <Route path="/wikipage/:title" component={WikiPageContainer}/>
        <Route path="/form" component={FormContainer}/>
        <Route path="/editwikipage/:title" component={EditWikiPageContainer}/>
      </Route>
    </Router>
  </ReactRedux.Provider>,
  document.getElementById('root')
);
