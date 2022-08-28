export const validate =(data,type)  =>{
   const errors = {};

   if(!data.email){
       errors.email="Email requierd"
   }else if(!/\S+@\S+\.\S+/.test(data.email)){
       errors.email="Email Adress is invalide"
   }else{
      delete errors.email
   }

   if(!data.password){
       errors.password="Password is requierd"
   }else if(data.password.length <6){
       errors.password="Password need to be 6 character or more"
   }else {
       delete errors.password
   }

  

   
   if (type === "SignUp"){
    
      if(!data.name.trim()){
         errors.name="Usename requierd"
     }else{
        delete errors.name
     }

      if(!data.confirmPassword){
         errors.confirmPassword="confirm the password"
     }else if(data.confirmPassword !== data.password){
         errors.confirmPassword="Password is not match"
     }else{
         delete errors.confirmPassword
     }
     
      if(data.isAccpted){
         delete errors.isAccpted
     }else{
         errors.isAccpted="Accept our regulatioms"
     }
   }
   return errors;

}