import $ from 'jquery';

function pageInfo(info){
  return{
    type: 'fetchPage',
    payload: info
  }
}

export function fetchPage(id){
  let asyncAction = function(dispatch){
    $.ajax({
      url: 'http://localhost:4000/api/product/'+id
    })
    .then(info=>dispatch(pageInfo(info)))
  }
  return asyncAction;
}
