import React from "react";


// inherting class called componenet inside the  react package
class CartItem extends React.Component {            // we need to give it one method

    constructor(){
        super();
        this.state={
            price: 999,
            title : 'Phone',
            qty: 1,
            img:''
        }
    }
    increaseQuantity=() =>{
        // console.log('this', this.state)


        //Via giving it object
        // this.setState({
        //     qty: this.state.qty +1
        // });

        // if previous state require then use this method 
        this.setState((prevState) =>{
            return{
                qty: prevState.qty+1
            }
        });

    }
    decreaseQuantity=()=>{
        
        this.setState((prevState) =>{
            if(prevState.qty>0){
            return{
                qty: prevState.qty-1
                }
            }
        });
    }
    render(){
        const {price, title,qty} = this.state;              // getting these properties from this object
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image}/>

                </div>
                <div className="right-block">
                    <div style={{fontSize: 25}}>{title}</div>
                    <div style={{color: '#777',fontSize:25}}>Rs: {price}</div>
                    <div style={{color: '#777',fontSize:25}}>Qty: {qty}</div>
                    <div className="cart-item-actions"></div>
                    <img alt="increase" className="action-icons" src="https://as1.ftcdn.net/v2/jpg/02/51/03/82/1000_F_251038282_CLb3d8tk99bGoU9ILEYS8vY215fgRmGT.jpg" 
                    onClick={this.increaseQuantity}/>
                    <img alt="decrease" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/992/992683.png" 
                    onClick={this.decreaseQuantity} />
                    <img alt="delete" className="action-icons" src="https://cdn-icons.flaticon.com/png/512/3102/premium/3102186.png?token=exp=1648033533~hmac=23a469bb99af9ed5c92e65a4fd3b35db" />

                </div>
            </div>
        )
    }
} 

const styles ={
    image:{
      height:110,
      width:110,
      borderRadius:4,
      background: '#ccc' 
    }
  }
  

export default CartItem;
