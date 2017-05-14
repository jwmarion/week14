
export default function SignupReducer(state={Items: [],user:null,email:null, first: null, last:null, pass:null, conf: null, error: null},action){

   if (action.type === 'user'){
    return Object.assign({}, state, {
      user: action.text
    });
  }
  else if (action.type === 'email'){
    return Object.assign({}, state, {
      email: action.text
    });
  }
  else if (action.type === 'first'){
    return Object.assign({}, state, {
        first: action.text
    });
  }
  else if (action.type === 'last'){
    return Object.assign({}, state, {
        last: action.text
    });
  }
  else if (action.type === 'pass'){
    return Object.assign({}, state, {
        pass: action.text
    });
  }
  else if (action.type === 'confPass'){
    return Object.assign({}, state, {
        confPass: action.text
    });
  }
  else if(action.type === 'submit'){
    return state;
  }
  else if (action.type === 'error'){
    return Object.assign({}, state, {
      error: true
    });
  }
  return state;
}
