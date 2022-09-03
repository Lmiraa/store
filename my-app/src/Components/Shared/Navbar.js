import React,{ useState,useContext } from 'react';
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Link } from 'react-router-dom';

//context
import { cartContext } from '../../context/CartContextProvider';

//icons
import {faPhone,faUser,faSearch,faShoppingCart,faLightbulb,faBars,faClose } from '@fortawesome/free-solid-svg-icons';
import { faFacebook,faInstagram,faTwitter,faPinterest} from "@fortawesome/free-brands-svg-icons"

//Styles
import styles from "./Navbar.module.css";

//Images
import logo from "../../assetes/images/logo.png"

const Ul=styled.div`
display: flex;
align-items: center;
list-style: none;
color: #fff;
font-size: 1rem;
font-weight: 200;
cursor: pointer;
li {
    position: relative;
    padding: 0 10px;
    &:nth-child(1){
        display:none;
        justify-content: end;
        font-size: 1.5rem;
        padding: 20px 20px;
        border:none;
        transform:${(props)=>(props.open? 'translateX(0px)':'translateX(-100%);')};
       }
}
form{
    display: none;
    input{
        padding: 10px;
        font-size: 13px;
        border: 1px solid grey;
        float: left;
        width: 80%;
        background: #333333;
        border-right-width: 0;
    }
    button{
    float: left;
    width: 20%;
    padding: 10px;
    background: #cc9966;
    cursor: pointer;
    }
}
@media (max-width: 580px){
    form{
        display:block;
    }
}
@media(max-width:768px){
    flex-direction: column;
    width: 300px;
    height: 100vh;
    position: fixed;
    left: 0px;
    border: none;
    top: 0;
    background-color: #333;
    transform:${(props)=>(props.open? 'translateX(0px)':'translateX(-100%);')};
    transition: all 0.5s ease 0s;
    margin: 0;
    z-index: 1;
    li{
        width: 100%;
        padding: 5px 20px;
        box-sizing: border-box;
        border-bottom: .1rem solid hsla(0,0%,100%,.08);
        font-size: 0.9rem;
        cursor: pointer;
        &:nth-child(1){
            display: flex;
        
             }
             
    }

`

const Navbar = () => {
    const [open,setOpen] =useState(false)
    const [fixe,setFixe] =useState(false)

    const {state}=useContext(cartContext);

    function setFixed(){
        if(window.scrollY>=500){
            setFixe(true)
        }else{
            setFixe(false)
        }
    }
    
    window.addEventListener("scroll",setFixed);

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
                    <Link to="/SignUp">
                        <i style={{marginRight:"5px"}}>< FontAwesomeIcon icon={faUser} /></i>
                        Login
                    </Link>
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
                       <Link to = "/cart"><i>< FontAwesomeIcon icon={faShoppingCart}/></i></Link>
                        <span>{state.itemsCounter}</span>
                        </div>
                    </div>
            </div>

        </div>
        {/*headerBottom */}
        <div className={fixe? styles.fixe :styles.headerBottom}>
                <div className={styles.container}>
                    <div className={styles.headerLeft}>
                        <div className={styles.mainNav}>
                        <Ul className={styles.menu} open={open}>
                        <li open={open} onClick={()=> setOpen(!open)}><FontAwesomeIcon icon={faClose}/></li>
                        <form  style={{margin:"0 auto 20px",maxWidth:"300px"}}>
                           <input type="text" placeholder="Search product.." name="search" />
                            <button type="submit">
                            <i style={{color:"#fff", fontSize:"1rem"}}> <FontAwesomeIcon icon={faSearch}/></i>
                            </button>
                         </form>
                        <li><Link to="/">Home</Link></li>  
                        <li><Link to="/Products">Product</Link></li>   
                        <li>About us</li>   
                        <li>Contact</li>
                        </Ul> 
                        </div>
                        <i className={styles.bars}><FontAwesomeIcon icon={faBars} open={open} onClick={()=> setOpen(!open)}/></i> 
                    </div>
                    <div className={styles.headerRight }>
                        <i >< FontAwesomeIcon icon={faLightbulb}/></i>
                        <p className={styles.textWhite }>Clearance Up to 30% Off</p>
                    </div>
                </div>
                </div>
        </header>
    );
};

export default Navbar;