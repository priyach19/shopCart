import React from "react";
//import { useValue } from "../itemContext";
import styles from './styles/CartModal.module.css';
import {useValue} from '../itemContext';

function CartModal({ toggle }) {
    const {cart,total,clear}=useValue();
    console.log(cart);
  return (
    <div className={styles.cartModal}>
      <div className={styles.closeButton} >
        <button onClick={toggle}>Close</button>
    
      </div>
      <div className={styles.clearButton}>
         <button onClick={clear}>Clear</button>
         </div>
      <div className={styles.itemContainer}>
        {cart.map((item)=>{
            return(
                <div className={styles.cartCard} key={item.id}>
                    <h1>{item.name}</h1>
                    <h3>X{item.qty}</h3>
                    <h3>X{item.qty*item.price}</h3>
                </div>
            )
        })}
      </div>
      <div className={styles.total}>
        <div className={styles.totalText}>Total</div>
        <div className={styles.totalPrice}>{total}</div>
      </div>
    </div>
  );
}

export default CartModal;