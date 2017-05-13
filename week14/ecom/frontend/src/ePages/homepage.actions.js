import $ from 'jquery';

function pageInfo(info){
  return{
    type: 'fetchItem',
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

export function logIn(name,pass){
  let asyncAction = function(dispatch){
    $.ajax({
      type: 'POST',
      contentType: "application/json",
      url: 'http://localhost:4000/api/user/signup',
      data: JSON.stringify({
        username: data.user,
        password: data.pass,
      }),
      dataType: "json"
    })
    // .then(info=>dispatch(pageInfo(info)))
    // .then(hashHistory.push('/'));
  }
  return asyncAction;
} else{
  return{
    type: 'error'
  }
}
