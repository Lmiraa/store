import React,{useState,useEffect} from 'react';

import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

//toast
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { validate } from './validate';
import { notify } from './toast';
import styles from './SignUp.module.css';

const SignUp = () => {
    const [data,setData]=useState({
        name:"",
        email:"",
        password:"",
        confirmPassword:"",
        isAccpted:false,
    })
    const [errors,setErrors]=useState({});
    const [touched,setTouched]=useState({});

    useEffect(()=>{
        setErrors(validate(data,"SignUp"))
    },[data]);

     const  changeHandler=event=>{
       if(event.target.name === "isAccpted"){
           setData({...data,[event.target.name]:event.target.checked})
       }else{
           setData({...data,[event.target.name]:event.target.value})
       }
      
    }
    const focusHandler = event=>{
        setTouched({...touched,[event.target.name]: true})
    }
    
    const navigate = useNavigate();

    const submitHandler = event =>{
        event.preventDefault();
        if(!Object.keys(errors).length){
           notify("You signed is succes","success")
           navigate('/',{replace:true});
        }else{
            notify("Invalide data!","error")
            setTouched({
                name:true,
                email:true,
                password:true,
                confirmPassword:true,
                isAccpted:true,
            })
            
        }
    }

    return (
        <div className={styles.container}>
          <form className={styles.formContainer} onSubmit={submitHandler}>
              <h2 className={styles.header}>Sig Up</h2>
             
              <div className={styles.formField}>
                  <label>Name</label>
                  <input 
                  className={(errors.name && touched.name) ? styles.unCompleted : styles.formInput}
                  type="text" 
                  name="name" 
                  value={data.name}
                   onChange={changeHandler} 
                   onFocus={focusHandler}
                   />
                  {errors.name && touched.name && <span>{errors.name}</span>}
              </div>
              <div className={styles.formField}>
                  <label>Email</label>
                  <input 
                  className={(errors.email && touched.email) ? styles.unCompleted : styles.formInput}
                  type="text" 
                  name="email" 
                  value={data.email} 
                  onChange={changeHandler} 
                  onFocus={focusHandler
                  }/>
                  {errors.email && touched.email && <span>{errors.email}</span>}
              </div>
              <div className={styles.formField}> 
                  <label>Password</label>
                  <input
                   className={(errors.password && touched.password) ? styles.unCompleted : styles.formInput}
                   type="Password" 
                   name="password"
                   value={data.password}
                   onChange={changeHandler} 
                   onFocus={focusHandler}
                    />
                  {errors.password && touched.password && <span>{errors.password}</span>}
              </div>
              <div className={styles.formField}>
                  <label>Confirm Password</label>
                  <input 
                  className={(errors.confirmPassword && touched.confirmPassword)? styles.unCompleted : styles.formInput}
                  type="password" 
                  name="confirmPassword" 
                  value={data.confirmPassword} 
                  onChange={changeHandler} 
                  onFocus={focusHandler}
                  />
                  {errors.confirmPassword && touched.confirmPassword && <span>{errors.confirmPassword}</span>}
              </div>
              <div className={styles.formField}>
                 <div className={styles.checkBoxContauiner}>
                 <label>I accept trem of privecy policy</label>
                  <input
                  type="checkbox" name="isAccpted" 
                  value={data.isAccpted} onChange={changeHandler}
                   onFocus={focusHandler}
                   />
                 </div>
                  {errors.isAccpted && touched.isAccpted && <span>{errors.isAccpted}</span>}
              </div>
              <div className={styles.formButtons}>
              <Link to="/Login">Login</Link>
              <button type="submit">SigUp</button>
              </div>
          </form>
          <ToastContainer />
        </div>
    );
};

export default SignUp;