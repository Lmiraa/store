import React from 'react';
import styles from "../Shared/SuggestionsCard.module.css";


const SuggestionsCard = ({image,title,price,category}) => {
    
    return (
        <>
           <div className={styles.card}>
           <img src={image} alt="img"/>
            {/* <p>{title}</p> */}
            <p>{price} $</p>
            <h4>{category}</h4>
           </div>
        </>
    );
};

export default SuggestionsCard;




