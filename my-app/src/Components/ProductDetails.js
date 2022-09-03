import React,{useContext} from 'react';

import { useParams,Link } from 'react-router-dom';

//context
import { proudctContext } from '../context/ProductContextProvider';

//styles
import styles from "./ProductDetails.module.css";

const ProductDetails = () => {
  const params = useParams();
  const data = useContext(proudctContext);
  const product = data[params.id -1];
  const{image,title,description,price,category}=product;
    return (
      <div className={styles.container}>
      <img src={image} className={styles.image} alt="product"/>
      <div className={styles.textContainer}>
          <h3>{title}</h3>
          <p className={styles.description}>{description}</p>
          <p className={styles.category}> <span>category: </span> {category} </p>
          <div className={styles.buttonContainer}>
             <span className={styles.price}>{price} $</span>
              <Link to="/products">back to shop</Link>
          </div>
      </div>

   </div>
    );
};

export default ProductDetails;