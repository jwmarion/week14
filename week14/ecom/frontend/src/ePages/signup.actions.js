import $ from 'jquery';
import { Router, Route, hashHistory, Link, IndexRoute, IndexLink } from 'react-router';
// function pageInfo(info){
//   return{
//     type: 'signup'
//   }
// }

export function signup(data){
  console.log(data.pass +' ' +data.confPass)
  if(data.pass === data.confPass){
    let asyncAction = function(dispatch){
      $.ajax({
        type: 'POST',
        contentType: "application/json",
        url: 'http://localhost:4000/api/user/signup',
        data: JSON.stringify({
          username: data.user,
          email: data.email,
          password: data.pass,
          firstname: data.first,
          lastname: data.last,
          confPass: data.confPass
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
}

export function write(event,type){
  return {
    type: type,
    text: event
} ;

}
