

export default function ProductDetailReducer(state={Items: []},action){
  if(action.type === 'fetchPage'){
    return Object.assign({}, state, {
      Items: action.payload
    })}
    else if(action.type === 'login'){
      return Object.assign({}, state, {
        userInfo: action.payload
      });
  }
  return state;
}
