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
import SignupContainer from './ePages/signup'
import SignupReducer from './ePages/signup.reducer';


const reducer = Redux.combineReducers({
 HomePage: HomePageReducer,
 ProductDetail: ProductDetailReducer,
 Signup: SignupReducer
});

const store = Redux.createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  Redux.applyMiddleware(ReduxThunk)
);

class AppLayout extends React.Component {
  render() {

    let topRight;
    console.log(this.props.userInfo);
    if (this.props.userInfo != null){
      topRight = (
      <div className='topRight'>
      <h3>{'Welcome' + this.props.userInfo.username}</h3>
      </div>
    );
  }
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
      <Route path="/signUp" component={SignupContainer}/>
      </Route>
    </Router>
  </ReactRedux.Provider>,
  document.getElementById('root')
);
