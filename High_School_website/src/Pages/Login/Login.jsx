import React, { useEffect, useState } from 'react';
// import login from '../../../public/img/login/login.jpg'
import { Link } from 'react-router-dom';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';

const Login = () => {
  const [disabled, setDisabled] = useState(true)
  const handleLogin = event =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value
    console.log(email,password);
  }
  useEffect(()=>{
     loadCaptchaEnginge(6); 
  },[])
  const handleValidateCaptcha =(e)=>{
    const user_captcha_value =e.target.value;
    if(validateCaptcha(user_captcha_value)){
      setDisabled(false)
    }
  }
    return (
       <>
  <div className='row' style={{marginTop:"100px",textAlign:"center"}}>
       
  <form className='col-lg-10' onSubmit={handleLogin} style={{marginTop:"40px"}}>
        <div className="form-group row">
    <label htmlFor="inputemail" className="col-sm-1 col-form-label">Email</label>
    <div className="col-sm-8">
      <input type="email" className="form-control p-3" name='email' id="inputName" placeholder="Enter Your Email" />
    </div>
  </div>
  <div className="form-group row mt-3">
    <label htmlFor="inputState" className="col-sm-1 col-form-label">Password</label>
    <div className="col-sm-8">
      <input type="password" className="form-control p-3" name='password' id="inputpassword" placeholder=" Enter Your Password" />
    </div>
  </div>
  <div className="form-group row mt-3">
<label htmlFor="inputCaptcha" className="col-sm-1 col-form-label"> <LoadCanvasTemplate /></label>
<div className="col-sm-8">
<input onBlur={handleValidateCaptcha} type="text"  className="form-control p-3" id="inputCaptcha" placeholder="type the catpcha above"/>
<button className='btn btn-success mt-2' style={{width:"750px"}}>Validate</button>
</div>
</div>
 
 <div className="form-group row mt-3">
    <label htmlFor="inputsubmit" className="col-sm-1 col-form-label">Login</label>
    <div className="col-lg-8">
      <input disabled={disabled} type="submit" className="form-control btn p-3" id="inputSubmit" placeholder="Login" value="login" />
    </div>
  </div>
  <div className="form-group row mt-3">
    
    <div className="col-lg-8">
     <button style={{width:"300px",marginLeft:"100px",width:"750px"}} className="form-control button " id="inputsignup" ><Link to={'/signup'} >Create Your Account</Link></button>
    </div>
  </div>
</form>
{/* <div className='col-lg-2'>
    <img src={login} alt="" style={{width:"300px"}} />
</div> */}
  </div>
       </>
    );
};

export default Login;