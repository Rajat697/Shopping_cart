import React from "react";



const Navbar = (props) => {            
    
    
        return (
            <div style={styles.nav}>
                <div style={styles.cartIconContainer}>
                    <img style={styles.cartIcon} src="https://cdn-icons.flaticon.com/png/512/649/premium/649931.png?token=exp=1648447238~hmac=875697b74ff36b65340939334da73a28" alt="cart-icon"/>
                    <span style={styles.cartCount}>3</span>
                </div>
                
            </div>
        );
    } 

    const styles = {
        cartIcon: {
          height: 32,
          marginRight: 20
        },
        nav: {
          height: 70,
          background: '#4267b2',
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center'
        },
        cartIconContainer: {
          position: 'relative'
        },
        cartCount: {
          background: 'yellow',
          borderRadius: '50%',
          padding: '4px 8px',
          position: 'absolute',
          right: 0,
          top: -9
        }
      };
  

export default Navbar;
