import React,{useState,useEffect} from 'react';

import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

//toast
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { validate } from './validate';
import { notify } from './toast';
import styles from './SignUp.module.css';

const Login = () => {
    const [data,setData]=useState({
        email:"",
        password:"",
    })
    const [errors,setErrors]=useState({});
    const [touched,setTouched]=useState({});

    useEffect(()=>{
        setErrors(validate(data,"Login"))
    },[data]);

     const  changeHandler=event=>{
           setData({...data,[event.target.name]:event.target.value})
       }
      
    const focusHandler = event=>{
        setTouched({...touched,[event.target.name]: true})
    }
    const navigate = useNavigate();
    
    const submitHandler = event =>{
        event.preventDefault();
        if(!Object.keys(errors).length){
           notify("You Loged is succes","success")
           navigate('/ ', {replace:true});
          
        }else{
            notify("Invalide data!","error")
            setTouched({
                email:true,
                password:true,
            })
            
        }
    }

    return (
        <div className={styles.container}>
          <form className={styles.formContainer} onSubmit={submitHandler}>
              <h2 className={styles.header}>Login</h2>
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
              <div className={styles.formButtons}>
              <Link to="/SignUp">signUp</Link>
              <button type="submit">Login</button>
              </div>
          </form>
          <ToastContainer />
        </div>
    );
};

export default Login;