import React from 'react';
import Navbar from './Navbar';
import Cart from './Cart';
import firebase from 'firebase/app';

class App extends React.Component {
  constructor(){
    super();
    this.state={
       products:[],
       loading:true
    }

    this.db = firebase.firestore();
}

componentDidMount(){
  //Firebase Reading data from Cart
  // firebase.firestore()
  // .collection('products')
  // .get()
  // .then((snapshot)=> {
  //   console.log(snapshot);

  //   snapshot.docs.map((doc)=>{
  //     console.log((doc.data()))
  //   });
  //   const products = snapshot.docs.map((doc)=>{
  //     const data = doc.data();
  //     data['id'] = doc.id;
  //     return data;
  //     return doc.data();
  //   })
  //   this.setState({
  //     products,
  //     loading: false   // will not render "loading" after reloading the page
  //   })
  // })

  //Reading the data from firbase
  // 
  this.db
  .collection('products')
  .onSnapshot((snapshot)=> {        // listner to update product details without refreshing the page
    console.log(snapshot);

    snapshot.docs.map((doc)=>{
      console.log((doc.data()))
    });
    const products = snapshot.docs.map((doc)=>{
      const data = doc.data();
      data['id'] = doc.id;
      return data;
      return doc.data();
    })
    this.setState({
      products,
      loading: false   // will not render "loading" after reloading the page
    })
  })
}
handleIncreaseQuantity =(product)=>{
    const{products} = this.state;
    const index= products.indexOf(product);

    // products[index].qty +=1;
    // this.setState({
    //     products
    // })
    const docRef = this.db.collection('products').doc(products[index].id);

    docRef.update({
      qty: products[index].qty +1
    })
    .then(()=>{
      console.log('updated successfully')
    })
    .catch((error)=>{
      console.log('Error', error);
    })
}
handleDecreaseQuantity =(product)=>{
    const{products} = this.state;
    const index= products.indexOf(product);
    if(product.qty>0){
    // products[index].qty -=1;
    // this.setState({
    //     products
    // })
    const docRef = this.db.collection('products').doc(products[index].id);
    docRef.update({
      qty: products[index].qty -1
    })
    .then(()=>{
      console.log('updated')
    })
    .catch((error)=>{
      console.log('Error'. error);
    })
}
}
handleDeleteProduct =(id)=>{
    const {products} = this.state;
    // const items = products.filter((item)=> item.id !== id);      // Filter()
    // this.setState({                                         // will render the updated data
    //     products:items
    // })
    const docRef = this.db.collection('products').doc(id);
    docRef
    .delete()
    .then(()=>{
      console.log('Deleted')
    })
    .catch((error)=>{
      console.log('Error'. error);
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
    const {products , loading} = this.state;
  return (
    <div className="App">
     <Navbar count={this.getCartCount()} />
     <Cart
      products = {products} 
      onIncreaseQuantity={this.handleIncreaseQuantity}
      onDecreaseQuantity = {this.handleDecreaseQuantity}
      onDeleteProduct = {this.handleDeleteProduct}/>
      {loading && <h1> Loading products...</h1>}
      <div style={{ padding: 10,fontSize: 25}}>TOTAL: {this.getCartTotal()}</div>
    </div>
    
  );
  }
}

export default App;
