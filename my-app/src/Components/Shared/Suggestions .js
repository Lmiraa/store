import React,{useState,useEffect} from 'react';
import axios from 'axios';

//Styles
import styles from "../Shared/Suggestions.module.css";

//Component
import SuggestionsCard from './SuggestionsCard';

//Images
import lodear from "../../assetes/images/loding3.gif";

const Suggestions  = () => {
    const [products,setProduct]=useState([]);

    useEffect(()=>{
      axios.get('https://fakestoreapi.com/products')
      .then(response => setProduct(response.data))
    },[])
   
    return (
        <>
        <section className={styles.SuggestionsSec}>
            <div className={styles.container}>
            <h1  className={styles.headLine}>Best-selling products</h1>
            <div className={styles.SuggestionsBox}>
            <div className={styles.slides}>
            <div> 
                {
            products.length ?
            products.filter(product => product.category === "women's clothing")
            .map(product => <SuggestionsCard  key={product.id}image={product.image}
                 title={product.title} description={product.description} 
                 price={product.price} category={product.category}
                 productData={product}/>) :
                 <div className={styles.lodear}><img src={lodear} alt="loding ..."/></div>
            }
            </div>
            </div>
            </div>
            </div>
        </section>
        </>
      
    );
};




export default Suggestions ;