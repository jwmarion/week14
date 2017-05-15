

export default function CheckoutReducer(state={userinfo:null},action){
  if(action.type === 'fetchItem'){
    return Object.assign({}, state, {
      allItems: action.payload
    });
  }else if(action.type === 'login'){
    return Object.assign({}, state, {
      userInfo: action.payload
    });
  }  else if (action.type === 'uLog'){
      return Object.assign({}, state, {
        uLog: action.text
      });
    }  else if (action.type === 'pLog'){
        return Object.assign({}, state, {
          uPass: action.text
        });
      }
  return state;
}
