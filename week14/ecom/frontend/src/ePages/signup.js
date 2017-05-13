import $ from 'jquery';
import React from 'react';
import * as ReactRedux from 'react-redux';
import * as actions from './signup.actions';
import { Router, Route, hashHistory, Link, IndexRoute, IndexLink } from 'react-router';

class Signup extends React.Component {
  render(){
    let object = {
      user: this.props.user,
      email: this.props.email,
      first:this.props.first,
      last:this.props.last,
      pass:this.props.pass,
      confPass:this.props.confPass
    }
    return(
      <div>
        <h1>Sign Up</h1>
        <h3>User Name</h3>
        <input onChange={(event)=>this.props.write(event.target.value,'user')} className="user" type='text'/>
          <h3>Email</h3>
        <input onChange={(event)=>this.props.write(event.target.value,'email')} className="email" type='text'/>
          <h3>First Name</h3>
        <input onChange={(event)=>this.props.write(event.target.value,'first')} className="first" type='text'/>
          <h3>Last Name</h3>
        <input onChange={(event)=>this.props.write(event.target.value,'last')} className="last" type='text'/>
          <h3>Password</h3>
        <input onChange={(event)=>this.props.write(event.target.value,'pass')} className="pass" type='text'/>
          <h3>Confirm Password</h3>
        <input onChange={(event)=>this.props.write(event.target.value,'confPass')} className="confPass" type='text'/>
        <button onClick={()=>this.props.signup(object)}>Submit</button>

      </div>
    )}
  }

  const SignupContainer = ReactRedux.connect(
  state =>state.Signup,
  actions
)(Signup)

  export default SignupContainer;
