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
import CheckoutReducer from './ePages/checkout.reducer';
import CheckoutContainer from './ePages/checkout';
import AppLayoutReducer from './ePages/appLayout.reducer';
import * as actions from './ePages/appLayout.actions';

const reducer = Redux.combineReducers({
 HomePage: HomePageReducer,
 ProductDetail: ProductDetailReducer,
 Signup: SignupReducer,
 Checkout: CheckoutReducer,
 AppLayout: AppLayoutReducer
});

const store = Redux.createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  Redux.applyMiddleware(ReduxThunk)
);

class AppLayout extends React.Component {
  render() {

    let topRight;
    if (this.props.userInfo != null){
      topRight = (
      <div className='topRight'>
      <h3>{'Welcome ' + this.props.userInfo.username}</h3>
      <button><Link to="/Checkout">cart</Link></button>
       <button onClick={()=>this.props.logOut({user: this.props.uLog, pass: this.props.uPass})}>Log out!</button>
      </div>)
    }else{
        topRight = (
          <div>
          <input onChange={(event)=>this.props.write(event.target.value,'uLog')}className="userLogin" type='text'/>
          <input onChange={(event)=>this.props.write(event.target.value,'pLog')} className="passLogin" type='text'/>
         <button><Link to="/signUp">Sign Up!</Link></button>
           <button onClick={()=>this.props.logIn({user: this.props.uLog, pass: this.props.uPass})}>Log in!</button>
           </div>

       )
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
const AppLayoutContainer = ReactRedux.connect(
  state => state.AppLayout
  ,
  actions
)(AppLayout)


ReactDOM.render(
  <ReactRedux.Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={AppLayoutContainer}>
        <IndexRoute component={HomePageContainer}/>
      <Route path="/productDetail/:id" component={ProductDetailContainer}/>
      <Route path="/signUp" component={SignupContainer}/>
      <Route path="/checkout" component={CheckoutContainer}/>
      </Route>
    </Router>
  </ReactRedux.Provider>,
  document.getElementById('root')
);
