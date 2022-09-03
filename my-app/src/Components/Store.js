import React,{useContext} from 'react';

//component
import Product from './Shared/Product';

//context
import { proudctContext } from '../context/ProductContextProvider';

//Styles
import styles from "./Store.module.css";

const Store = () => {
    const products = useContext(proudctContext)

    return (
        <div className={styles.container}>
            {
                products.map(product => <Product 
                                                key={product.id} 
                                                productData={product}
                                            />)
            }
        </div>
    );
};

export default Store;