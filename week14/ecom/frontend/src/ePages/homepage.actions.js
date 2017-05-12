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
