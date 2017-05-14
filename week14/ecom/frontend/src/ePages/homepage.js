import React from 'react';
import * as ReactRedux from 'react-redux';
import * as actions from './homepage.actions';
import { Router, Route, hashHistory, Link, IndexRoute, IndexLink } from 'react-router';

class HomePage extends React.Component {
  componentDidMount() {
    this.props.fetchItems();
  }

  render(){
    let display;
    console.log(this.props.userInfo);
    if (this.props.userInfo === null){
      console.log('test');
      display = (
        <div>
        <input onChange={(event)=>this.props.write(event.target.value,'uLog')}className="userLogin" type='text'/>
        <input onChange={(event)=>this.props.write(event.target.value,'pLog')} className="passLogin" type='text'/>
       <button><Link to="/signUp">Sign Up!</Link></button>
         <button onClick={()=>this.props.logIn({user: this.props.uLog, pass: this.props.uPass})}>Log in!</button>
         </div>

     )
    }
    else{
      display = (<h3>Welcome {this.props.userInfo.username}</h3>);
    }
    return(
      <div className="page">
      {display}
      {this.props.allItems.map((page,idx)=>
            <div className='products' key={idx}>
              <img className='cover'  src={'/media/'+page.image_path}/>
              <h3>{page.name}</h3>
              <h4>${page.price.toFixed(2)}</h4>
              <h4><a href={"/productDetail"+page.id}/></h4>
              <button><Link to={"/productDetail/"+page.id}>Buy Now!</Link></button>
              <button><Link to={"/productDetail/"+page.id}>Check it out!</Link></button>
          </div>)}
      </div>
    )
  }
}

const HomePageContainer = ReactRedux.connect(
  state =>state.HomePage,
  actions
)(HomePage)

export default HomePageContainer;
