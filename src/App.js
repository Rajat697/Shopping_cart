import React from 'react';
import Navbar from './Navbar';
import Cart from './Cart';

class App extends React.Component {
  constructor(){
    super();
    this.state={
       products:[
        {
            price: 999,
            title : 'Watch',
            qty: 0,
            img:'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=694&q=80',
            id: 1
        },{
            price: 999,
            title : 'Phone',
            qty: 0,
            img:'https://images.unsplash.com/photo-1525598912003-663126343e1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            id: 2
        },{
            price: 999,
            title : 'laptop',
            qty: 0,
            img:'https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1468&q=80',
            id: 3
        } 
       ]
    }
}
handleIncreaseQuantity =(product)=>{
    const{products} = this.state;
    const index= products.indexOf(product);
    products[index].qty +=1;
    this.setState({
        products
    })
}
handleDecreaseQuantity =(product)=>{
    const{products} = this.state;
    const index= products.indexOf(product);
    if(product.qty>0){
    products[index].qty -=1;
    this.setState({
        products
    })
}
}
handleDeleteProduct =(id)=>{
    const {products} = this.state;
    const items = products.filter((item)=> item.id !== id);      // Filter()
    this.setState({                                         // will render the updated data
        products:items
    })

}
getCartCount = () =>{
  const {products} = this.state;
  let count = 0;
  products.forEach((product) => {
   count += product.qty; 
  })

  return count;
}
getCartTotal = () =>{
  const{products} = this.state;
  let cartTotal = 0;
  products.forEach((product) =>{
    cartTotal += product.qty * product.price
  })
  return cartTotal;
}
  render(){
    const {products} = this.state;
  return (
    <div className="App">
     <Navbar count={this.getCartCount()} />
     <Cart
      products = {products} 
      onIncreaseQuantity={this.handleIncreaseQuantity}
      onDecreaseQuantity = {this.handleDecreaseQuantity}
      onDeleteProduct = {this.handleDeleteProduct}/>
      <div style={{ padding: 10,fontSize: 25}}>TOTAL: {this.getCartTotal()}</div>
    </div>
    
  );
  }
}

export default App;
