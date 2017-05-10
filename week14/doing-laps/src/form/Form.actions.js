export function nameInput(event){
  return ({
    type: 'name',
    text: event
  });
}
export function emailInput(event){
  console.log(event);
  return ({
    type: 'email',
    text: event
  });
}
export function phoneInput(event){
  return ({
    type: 'phone',
    text: event
  });
}

export function submitForm(name,phone,email){
  console.log
  return({
    type: 'submit',
    name: name,
    phone: phone,
    email: email


  })
}
