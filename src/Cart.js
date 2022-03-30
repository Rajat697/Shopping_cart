import React from "react";
import CartItem from './CartItem';

// inherting class called componenet inside the  react package
// class Cart extends React.Component {            // we need to give it one method
    // constructor(){
    //     super();
    //     this.state={
    //        products:[
    //         {
    //             price: 999,
    //             title : 'Watch',
    //             qty: 0,
    //             img:'',
    //             id: 1
    //         },{
    //             price: 999,
    //             title : 'Phone',
    //             qty: 0,
    //             img:'',
    //             id: 2
    //         },{
    //             price: 999,
    //             title : 'laptop',
    //             qty: 0,
    //             img:'',
    //             id: 3
    //         } 
    //        ]
    //     }
    // }
    // handleIncreaseQuantity =(product)=>{
    //     const{products} = this.state;
    //     const index= products.indexOf(product);
    //     products[index].qty +=1;
    //     this.setState({
    //         products
    //     })
    // }
    // handleDecreaseQuantity =(product)=>{
    //     const{products} = this.state;
    //     const index= products.indexOf(product);
    //     if(product.qty>0){
    //     products[index].qty -=1;
    //     this.setState({
    //         products
    //     })
    // }
    // }
    // handleDeleteProduct =(id)=>{
    //     const {products} = this.state;
    //     const items = products.filter((item)=> item.id !== id);      // Filter()
    //     this.setState({                                         // will render the updated data
    //         products:items
    //     })

    // }
    const Cart = (props) => {
    // render(){
        const{products}= props;
        return(
            //rendring Cartitem into cart
            <div className="cart">
                {products.map((product)=>{
                    return (
                    <CartItem 
                    product={product} 
                    key={product.id}
                    onIncreaseQuantity={props.onIncreaseQuantity}
                    onDecreaseQuantity = {props.onDecreaseQuantity}
                    onDeleteProduct = {props. onDeleteProduct}
                    
                    /> 
                    )
                })}
                
                   
            </div>

        );
    
}




export default Cart;
