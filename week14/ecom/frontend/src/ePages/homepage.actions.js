import { Router, Route, hashHistory, Link, IndexRoute, IndexLink } from 'react-router';

import $ from 'jquery';


export function fetchItems(){
  let asyncAction = function(dispatch){
    $.ajax({
      url: 'http://localhost:4000/api/products'
    })
    .then(info=>dispatch(pageInfo(info)))
  }
  return asyncAction;
}

function pageInfo(info){
  return{
    type: 'fetchItem',
    payload: info
  }
}
