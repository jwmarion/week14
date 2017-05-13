

export default function ProductDetailReducer(state={Items: []},action){
  if(action.type === 'fetchPage'){
    return Object.assign({}, state, {
      Items: action.payload
    });
  }
  return state;
}
