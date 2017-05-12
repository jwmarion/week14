import React from 'react';
import ReactDOM from 'react-dom';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory, Link, IndexRoute } from 'react-router';

import './index.css';
import * as actions from './wikiPage/WikiPage.action';
import Reducer from './wikiPage/WikiPage.reducer.js';
import WikiPageContainer from './wikiPage/WikiPage';
import HomePageContainer from './wikiPage/homePage';
import WikiPageReducer from './wikiPage/WikiPage.reducer';


const reducer = Redux.combineReducers({
  WikiPage: WikiPageReducer
});

const store = Redux.createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  Redux.applyMiddleware(ReduxThunk)
);

const HomePage = (
  <div>
  <h1>Hallo</h1>
  </div>
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={HomePageContainer}>
      <Route path="/wiki/:page" componen={WikiPage}>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
