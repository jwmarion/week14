import React from 'react';
import ReactDOM from 'react-dom';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory, Link, IndexRoute, IndexLink } from 'react-router';
import './index.css';
import HomePageContainer from './ePages/homepage.js';
import HomePageReducer from './ePages/homepage.reducer';
import ProductDetailContainer from './ePages/productDetail'
import ProductDetailReducer from './ePages/productDetail.reducer';

const reducer = Redux.combineReducers({
 HomePage: HomePageReducer,
 ProductDetail: ProductDetailReducer
});

const store = Redux.createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  Redux.applyMiddleware(ReduxThunk)
);

class AppLayout extends React.Component {
  render() {

    let topRight = (
      <div className='topRight'>
      <input className="userLogin" type='text'/>
      <input className="passLogin" type='text'/>
      </div>
    );
    return (

      <div>
        <div>
          <div className='navbar'>
            <h1><IndexLink to="/" activeClassName="active">BuyStuff</IndexLink></h1>
          {topRight}
          </div>
          <div className="content">
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <ReactRedux.Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={AppLayout}>
        <IndexRoute component={HomePageContainer}/>
      <Route path="/productDetail/:id" component={ProductDetailContainer}/>
      </Route>
    </Router>
  </ReactRedux.Provider>,
  document.getElementById('root')
);
