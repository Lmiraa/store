import React from 'react';

import Slider from "./Slider";
import ProductGroup from "../Components/Categorization/ProductGroup"
import Suggestions from "../Components/Shared/Suggestions ";
import Article from './Article';
import Guide from './Guide';


const Landing = () => {
    return (
        <div>
           <Slider/>
           <ProductGroup/>
           <Suggestions/>
           <Article/>
           <Guide/>
        </div>
    );
};

export default Landing;