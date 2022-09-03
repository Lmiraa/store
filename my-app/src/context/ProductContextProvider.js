import React, { useEffect, useState,createContext } from 'react';

//Api
import { getProducts } from '../services/api';

 export const proudctContext = createContext();

const ProductContextProvider = ({children}) => {

    const [products,setProducts]=useState([]);

    useEffect(()=>{
        const FetchApi = async () => {
            setProducts (await getProducts());
        }
        FetchApi();
    },[]);

    
    return (
      <proudctContext.Provider value={products}>
        {children}
      </proudctContext.Provider>
    );
};

export default ProductContextProvider;