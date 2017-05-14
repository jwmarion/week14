import { Router, Route, hashHistory, Link, IndexRoute, IndexLink } from 'react-router';

import $ from 'jquery';

function pageInfo(info){
  return{
    type: 'fetchItem',
    payload: info
  }
}

function logInInfo(info){
  return{
    type: 'login',
    payload: info
  }
}

export function fetchItems(){
  let asyncAction = function(dispatch){
    $.ajax({
      url: 'http://localhost:4000/api/products'
    })
    .then(info=>dispatch(pageInfo(info)))
  }
  return asyncAction;
}

export function logIn(data){
  console.log('test');
  let asyncAction = function(dispatch){
    $.ajax({
      type: 'POST',
      contentType: "application/json",
      url: 'http://localhost:4000/api/user/login',
      data: JSON.stringify({
        username: data.user,
        password: data.pass,
      }),
      dataType: "json"
    })
    .then(info=>dispatch(logInInfo(info)))
    // .then(hashHistory.push('/'));
  }
  return asyncAction;
}

export function write(event,type){
  return {
    type: type,
    text: event
  }
}
