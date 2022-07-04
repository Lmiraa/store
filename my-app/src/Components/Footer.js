import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//Icons
import { faFacebook,faInstagram,faTwitter} from "@fortawesome/free-brands-svg-icons"

//Styles
import styles from "./Footer.module.css";

//Images
import express from "../assetes/images/express-delivery.svg";
import cash from "../assetes/images/cash-on-delivery.svg";
import days from "../assetes/images/days-return.svg";
import original from "../assetes/images/original-products.svg";
import support from "../assetes/images/support.svg";


const Footer = () => {
    return (
        <footer className={styles.mainContainer}>
            <div className={styles.container}>
                <section className={styles.slugSec}>
                    <div>
                        <img src={express} alt="express"/>
                        <p>Quick access</p>
                    </div>
                    <div>
                        <img src={cash} alt="cash"/>
                        <p>Possibility of paying on-site</p>
                    </div>
                    <div>
                        <img src={support} alt="support"/>
                        <p>7 days a week- 24 hours a day</p>
                    </div>
                    <div>
                        <img src={days} alt="days"/>
                        <p>Seven-day return guarantee</p>
                    </div>
                    <div>
                        <img src={original} alt="original"/>
                        <p>Guarantee of the originality of the goods</p>
                    </div>
                   
                </section>
                <section className={styles.slugSec}>
                   <div className={styles.Headline}>
                    <h4>OnlineShop</h4>
                    <ul>
                        <li>Product</li>
                        <li>About Us</li>
                        <li>Contact</li>
                    </ul>
                   </div>
                   <div className={styles.Headline}>
                   <h4>Customer Service</h4>
                    <ul>
                        <li>Return of goods</li>
                        <li>Track orders</li>
                        <li>Feedback</li>
                        <li>FAQs</li>
                    </ul>
                   </div>
                   <div className={styles.Headline}>
                   <h4>Shopping Guide</h4>
                    <ul>
                        <li>How to place an order</li>
                        <li>Payment Guide</li>
                    </ul>
                   </div>
                   <div className={styles.Headline}>
                    <h4>Stay with us</h4>
                    <ul className={styles.socialIcons}>
                        <li><FontAwesomeIcon icon={faInstagram}/></li>
                        <li><FontAwesomeIcon icon={faFacebook}/></li>
                        <li><FontAwesomeIcon icon={faTwitter}/></li>
                    </ul>
                   </div>
                </section>
                <section className={styles.copyRight}>
                    <h3>Copyright © 2022 - All rights reserved.</h3>
                </section>
            </div>
        </footer>
    );
};

export default Footer;