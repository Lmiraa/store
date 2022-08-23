import React from 'react';

//style
import style from "../Components/Guide.module.css";

//img 
import guide1 from "../assetes/images/Guide1.jpg";
import guide2 from "../assetes/images/Guide2.jpg";

const Guide = () => {
    return (
        <section>
           <div className={style.container}>
            <div className={style.geBox}>
                <div>
                    <img src={guide1}  alt="guide" />
                </div>
                <div>
                    <img src={guide2}  alt="guide" />
                </div>
            </div>

           </div>
        </section>
    );
};

export default Guide;