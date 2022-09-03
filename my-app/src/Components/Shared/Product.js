import React,{useContext} from 'react';
import { Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//function
import { shorten,isInCart,quantityCount } from '../../helper/function';

//icons
import {faTrash} from '@fortawesome/free-solid-svg-icons';

//context
import { cartContext } from '../../context/CartContextProvider';

//styles
import styles from "./Product.module.css"

const Product = ({productData}) => {

    const {state,dispatch}=useContext(cartContext);

    return (
        <div className={styles.container}>
           <img className={styles.cardImage} src={productData.image} alt="img" /> 
           <h3>sh{shorten(productData.title)}</h3>
           <p>{productData.price} $</p>
           <div className={styles.linkContainer}>
            <Link to={`/Products/${productData.id}`}>details</Link>
            <div className={styles.buttonContainer}>
              
                { quantityCount (state,productData.id) === 1 && <button className={styles.smallButtons}  onClick={() => dispatch({type:"REMOVE_ITEM", payload:productData})}><i><FontAwesomeIcon icon={faTrash}/></i></button>}
                { quantityCount (state,productData.id) > 1 && <button className={styles.smallButtons} onClick={() => dispatch({type:"DECRESE", payload:productData})}>-</button>}
                {quantityCount (state,productData.id) > 0 && <span className={styles.counter}>{quantityCount(state,productData.id)}</span>}
                
                {
               isInCart(state,productData.id)?
               <button  className={styles.smallButtons}  onClick={() => dispatch({type:"INCRESE", payload:productData})}>+</button>:
               <button onClick={() => dispatch({type:"ADD_ITEM", payload:productData})}>Add to Cart</button>
                }

            </div>
           </div>

        </div>
    );
};

export default Product;