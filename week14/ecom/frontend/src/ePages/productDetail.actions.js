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

export function addCart(data){
  let asyncAction = function(dispatch){
    $.ajax({
      type: 'POST',
      contentType: "application/json",
      url: 'http://localhost:4000/api/user/shopping_cart',
      data: JSON.stringify({
        user: data.user,
        product: data.product,
      }),
      dataType: "json"
    })
  }
  return asyncAction;
}
