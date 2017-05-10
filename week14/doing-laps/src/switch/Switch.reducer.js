const INITIAL_STATE = {
  on: false
};

export default function reducer(state = INITIAL_STATE, action) {
  if (action.type === 'switch'){
    console.log(action);
    if(action.on){
      return Object.assign({}, state, {
        on: false
      });
    }
    else{
      return Object.assign({}, state, {
        on: true
      });
    }
  }
  return state;
}
