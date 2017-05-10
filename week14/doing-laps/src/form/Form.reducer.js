const INITIAL_STATE = {
  name: '',
  email: '',
  phone: ''
};

export default function reducer(state = INITIAL_STATE, action) {
  if(action.type === 'name'){
    return Object.assign({}, state, {
      name: action.text
    });
  }
  else if(action.type === 'email'){
    return Object.assign({}, state, {
      email: action.text
    });
  }
  else if(action.type === 'phone'){
    return Object.assign({}, state, {
      phone: action.text
    });
  }
  else
  // if(action.type === 'submit'){
  //   return Object.assign({}, state, {
  //     name: action.name,
  //     email: action.email,
  //     phone: action.phone
  //   });
  // }
   return state;
}
