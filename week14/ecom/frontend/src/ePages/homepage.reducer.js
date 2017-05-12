

export default function HomePageReducer(state={allItems: []},action){
  if(action.type === 'fetchItem'){
    return Object.assign({}, state, {
      allItems: action.payload
    });
  }
  return state;
}
