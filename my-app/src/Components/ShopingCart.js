import React ,{ useContext }from 'react';
import { Link } from 'react-router-dom';

//context
import { cartContext } from '../context/CartContextProvider';

//component
import Cart from './Shared/Cart';


//styles
import styles from "./ShopingCart.module.css";


const ShopingCart = () => {

    const {state,dispatch}=useContext(cartContext);

    return (
        <div className={styles.container}>
          <div className={styles.cartContainer}>
          {
            state.selectedItems.map(item => <Cart key={item.id} data={item}/>)
          }
          </div>
         

         {
              state.itemsCounter > 0 && <div  className={styles.peyment}>
                  <p><span>total item:</span>{state.itemsCounter}</p>
                  <p><span>total peyment:</span>{state.total} $</p>
                 <div className={styles.buttonContainer}>
                     <button className={styles.checkout} onClick={()=> dispatch({type:"CHECKOUT"})}>checkout</button>
                     <button  className={styles.clear} onClick={()=> dispatch({type:"CLEAR"})}>CLEAR</button>
                 </div>
              </div>
             
          }

          {
             state.checkOut && <div className={styles.complate}>
                <h3> Checkout sucssesfully</h3>
                  <Link to="/Products">Buy more</Link>
             </div>
          }
         
          {
             !state.checkOut && state.itemsCounter === 0 && <div className={styles.complate}>
                  <h3>Want to buy?</h3>
                  <Link to="/Products">Go to shop</Link>
              </div>
          }
        </div>

    );
};

export default ShopingCart;