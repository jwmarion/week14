import React from 'react';
import * as ReactRedux from 'react-redux';
import * as actions from './homepage.actions';

class HomePage extends React.Component {
  componentDidMount() {
    this.props.fetchItems();
  }

  render(){
    return(
      <div className="page">
      {this.props.allItems.map((page,idx)=>
            <div className='products' key={idx}>
              <img className='cover'  src={'/media/'+page.image_path}/>
              <h3>{page.name}</h3>
              <h4>${page.price.toFixed(2)}</h4>
              <h4><a href={"/productDetail"+page.id}/></h4>
              <button>Buy Now!</button>
              <button>Check it out!</button>
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
