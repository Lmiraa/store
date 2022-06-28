import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//icons
import {faPhone,faUser} from '@fortawesome/free-solid-svg-icons';
import { faFacebook,faInstagram,faTwitter,faPinterest} from "@fortawesome/free-brands-svg-icons"

//Styles
import styles from "./Header.module.css";

const Header = () => {
    return (
        <header className={styles.header}>

            {/* headerTop  Start*/}
            <div className={styles.hederTop}>
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
        </header>
    );
};

export default Header;