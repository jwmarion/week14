import React from 'react';
import ReactDOM from 'react-dom';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import ReduxThunk from 'redux-thunk';
import CounterContainer from './counter/Counter';
import counterReducer from './counter/Counter.reducer';
import GalleryContainer from './gallery/Gallery';
import galleryReducer from './gallery/Gallery.reducer';
import DragonGameContainer from './dragon/Dragon';
import dragonGameReducer from './dragon/Dragon.reducer';
import WeatherContainer from './weather/Weather';
import weatherReducer from './weather/Weather.reducer';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory, Link, IndexRoute } from 'react-router';
import './index.css';

const reducer = Redux.combineReducers({
  theCount: counterReducer,
  galleryInfo: galleryReducer,
  dragonGame: dragonGameReducer,
  weather: weatherReducer
});

const store = Redux.createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  Redux.applyMiddleware(ReduxThunk)
);

const appLayout= ({ children}) =>
  <div>
    <ul className="nav">
      <li><Link to="/counter">Counter</Link></li>
      <li><Link to="/dragon">Dragon</Link></li>
      <li><Link to="/gallery">Gallery</Link></li>
      <li><Link to="/weather/atlanta">Weather: Atlanta</Link></li>
      <li><Link to="/weather/port moody">Weather: Port Moody</Link></li>
      <li><Link to="/weather/tokyo">Weather: Tokyo</Link></li>
    </ul>
    <div className="content">
      {children}
    </div>
  </div>

ReactDOM.render(
    <Provider store={store}>
  <Router history={hashHistory}>
    <Route path="/" component={appLayout}>
      <Route path="/counter" component={CounterContainer}/>
      <Route path="/dragon" component={DragonGameContainer}/>
      <Route path="/gallery" component={GalleryContainer}/>
      <Route path="/weather/:name" component={WeatherContainer}/>
    </Route>
  </Router>
  </Provider>,
  document.getElementById('root')
);
