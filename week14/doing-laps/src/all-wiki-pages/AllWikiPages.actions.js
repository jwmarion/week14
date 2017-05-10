import $ from 'jquery';

function pageInfo(info){
  return{
    type:'fetchAll',
    payload: info
  }
}




export function fetchPage(){
  let asyncAction = function(dispatch){
    $.ajax({
      url: 'http://localhost:4000/api/pages'
    })
    .then(info => dispatch(pageInfo(info)))
  }
  return asyncAction;
}
