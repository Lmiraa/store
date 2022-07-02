import React from 'react';

//Styles
import styles from "../Categorization/productGroup.module.css";

//images
import Mens from "../../assetes/images/mens.png";
import women from "../../assetes/images/Women.png";
import digi from "../../assetes/images/digi.png";
import jewelery from "../../assetes/images/jewelery.png";

const ProductGroup = () => {
    return (
        <>
           <section className={styles.categoriSection}>
            <div  className={styles.container}>
            <h1  className={styles.headLine}>Product Group</h1>
               <div className={styles.productGroup}>
               <div className={styles.productGroupCard}>
               <img src={Mens} alt="img"/>
               <h3>men's clothing</h3>
               </div>
               <div  className={styles.productGroupCard}>
               <img src={women} alt="img"/>
               <h3>women's clothing</h3>
               </div>
               <div  className={styles.productGroupCard}>
               <img src={digi} alt="img"/>
               <h3>electronics</h3>
               </div>
               <div  className={styles.productGroupCard}>
               <img src={jewelery} alt="img"/>
               <h3>jewelery</h3>
               </div>
               </div>
            </div>
           </section>
        </>
    );
};

export default ProductGroup;