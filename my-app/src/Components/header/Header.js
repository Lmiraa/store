import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//icons
import {faPhone,faUser,faSearch,faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import { faFacebook,faInstagram,faTwitter,faPinterest} from "@fortawesome/free-brands-svg-icons"

//Styles
import styles from "./Header.module.css";

//Images
import logo from "../../assetes/images/logo.png"

const Header = () => {
    return (
        <header className={styles.header}>

            {/* headerTop  Start*/}
            <div className={styles.headerTop}>
            <div className={styles.container}>
                <div className={styles.headerLeft}>
                <div className={styles.alignItemsCenter}>
                    <i><FontAwesomeIcon icon={faPhone}/></i>
                    <p>Call: +0123 456 789</p>
                    </div>
                </div>
                <div className={styles.headerRight}>
                    <div className={styles.socialIcons}>
                        <i>< FontAwesomeIcon icon={faFacebook}/></i>
                        <i>< FontAwesomeIcon icon={faInstagram}/></i>
                        <i>< FontAwesomeIcon icon={faTwitter}/></i>
                        <i>< FontAwesomeIcon icon={faPinterest}/></i>
                    </div>
                    <span>
                        <i style={{marginRight:"5px"}}>< FontAwesomeIcon icon={faUser} /></i>
                        Login
                    </span>
                </div>
            </div>
        </div>
        {/* hederTop End */}

        {/* headerMiddle */}
        <div className={styles.headerMiddle}>
            <div className={styles.container}>
                {/* left */}
            <div className={styles.headerLeft} style={{flex: "1 1 auto"}}>
                <form action="">
                    <button type="submit">
                        <i style={{color:"#333", fontSize:"1.2rem"}}>
                            <FontAwesomeIcon icon={faSearch}/>
                        </i>
                    </button>
                   <input type="text" placeholder="Search product.." name="search"/>
                </form>
            </div>
            {/* center */}
            <div className={styles.headerCenter}>
                    <div className={styles.logo}>
                       <img src={logo} alt="logo"/>
                       </div>
                    </div>
                    {/* Right */}
                    <div className={styles.headerRight}>
                        <div className={styles.shoppingCart}>
                        <i>< FontAwesomeIcon icon={faShoppingCart}/></i>
                        <span>0</span>
                        </div>
                    </div>
            </div>

        </div>
        </header>
    );
};

export default Header;