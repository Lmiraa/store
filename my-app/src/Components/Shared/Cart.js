import React,{useContext} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//context
import { cartContext } from '../../context/CartContextProvider';

//function
import { shorten } from '../../helper/function';

//icons
import {faTrash} from '@fortawesome/free-solid-svg-icons';

//styles
import styles from "./Cart.module.css"

const Cart = (props) => {
    const{dispatch}=useContext(cartContext);
    const {image,title,price,quantity} = props.data;

    return (
        
          <div className={styles.container}>
              <img className={styles.productImg} src={image} alt="product"/>
              <div className={styles.data}>
                  <h3>{shorten(title)}</h3>
                  <p>{price} $</p>
              </div>
             <div>
             <span className={styles.quantity}>{quantity}</span>
             </div>
             <div className={styles.buttonContainer}>
             {
                 quantity > 1 ?
                 <button onClick={()=> dispatch({type:"DECRESE" ,payload:props.data})}>-</button>:
                 <button onClick={()=> dispatch({type:"REMOVE_ITEM" ,payload:props.data})}><i><FontAwesomeIcon icon={faTrash}/></i></button>
             }
              <button onClick={()=> dispatch({type:"INCRESE" ,payload:props.data})}>+</button>
             </div>
              </div> 
       
    );
};

export default Cart;