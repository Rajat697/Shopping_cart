import React from "react";
import CartItem from './CartItem';

// inherting class called componenet inside the  react package
class Cart extends React.Component {            // we need to give it one method
    constructor(){
        super();
        this.state={
           products:[
            {
                price: 999,
                title : 'Watch',
                qty: 0,
                img:'',
                id: 1
            },{
                price: 999,
                title : 'Phone',
                qty: 0,
                img:'',
                id: 2
            },{
                price: 999,
                title : 'laptop',
                qty: 0,
                img:'',
                id: 3
            } 
           ]
        }
    }
    render(){
        const{products}= this.state;
        return(
            //rendring Cartitem into cart
            <div className="cart">
                {products.map((product)=>{
                    return <CartItem product={product} key={product.id}/> 
                })}
                
                   
            </div>

        );
    }
}




export default Cart;
