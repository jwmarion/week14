import React from 'react';
import * as ReactRedux from 'react-redux';
import * as actions from './productDetail.actions';
import { Router, Route, hashHistory, Link, IndexRoute, IndexLink } from 'react-router';
class ProductDetail extends React.Component {
  componentDidMount() {
    this.props.fetchPage(this.props.params.id);
  }

  componentWillReceiveProps(newProps){
      if(this.props.params.id !== newProps.params.id){
           this.props.fetchPage(newProps.params.id);
      }
  }
  render(){
    return(
      <div className='page'>
        <img className='detailPic' src={'/media/'+this.props.Items.image_path}/>
        <div className='description'>
          <h1>{this.props.Items.name}</h1>
          <p>{this.props.Items.description}</p>
          <h2>${this.props.Items.price}.00</h2>
          <button><Link to="/">Go Back</Link></button>
          <button onClick={()=>this.props.addCart({user:this.props.userInfo.id, product: this.props.Items.id})}>Add to Cart</button>
        </div>

      </div>
    )
  }
  }

  const ProductDetailContainer = ReactRedux.connect(
  state =>state.ProductDetail,
  actions
  )(ProductDetail)

  export default ProductDetailContainer;
