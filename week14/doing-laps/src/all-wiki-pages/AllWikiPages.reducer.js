const INITIAL_STATE = {
  allPages: []
};

export default function reducer(state = INITIAL_STATE, action) {

  if(action.type === 'fetchAll'){
    return Object.assign({}, state, {
      allPages: action.payload
    });
  }
  return state;
}
