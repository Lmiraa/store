import React from 'react';

//style
import style from "../Components/Article.module.css";

//gif
import slider from "../assetes/images/R (6).gif";

//image
import Article1 from "../assetes/images/image1.jpg";
import Article2 from "../assetes/images/image2.jpg";
import Article3 from "../assetes/images/image3.jpg";


const Article = () => {
    return (
       <section>
        <div className={style.container}>
            <h1 className={style.headerTitle}>Click Shop Blog</h1>
            <div className={style.mainContainer}>
            <ul className={style.rightRow}>
            <li className={style.aeBox}>
                <img src={Article1} alt="Article" />
               <div className={style.titleBox} >
                    <h4> 
                         10 tips for building a sustainable wardrobe
                    </h4>
                    <p>
                         Given the importance of the environmental issue and trying to preserve it, many of us are thinking about sustainable fashion these days and having a sustainable wardrobe. The volume of textile waste has increased to 17 million tons in the United States alone, according to the EPA. Clothing and footwear waste 5.8% ...
                    </p>
               </div>
            </li>
            <li className={style.aeBox}>
                <img src={Article2} alt="Article" />
                <div className={style.titleBox} >
                    <h4>
                         Familiarity with the principles of buying and set clothes for women
                    </h4>
                    <p>
                         Women's clothing shopping is done appropriately when you are familiar with the relevant shopping principles and tips. In this article, you will learn the most important points of buying women's clothing and especially buying a manteau...                            
                    </p>
               </div>
            </li>
            <li className={style.aeBox}>
                <img src={Article3} alt="Article" />
                <div className={style.titleBox} >
                    <h4>
                         How to set a multi-layered skirt in your style?
                    </h4>
                    <p>
                         Have you ever used multi-layered skirts in your style? If you don't have this skirt in your wardrobe, it's time to create attractive styles with it by adding to your collection of clothes. In this article, we examine how to set up a multi-layered skirt, choose its material and wear the right positions...
                    </p>
               </div>
            </li>
        </ul>
        <div className={style.leftRow}>
            <img src={slider} alt="slider"/>
            </div>
        </div>
        </div>
       </section>
    );
};

export default Article;