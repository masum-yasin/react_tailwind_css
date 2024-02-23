import React, { useContext, useEffect, useRef, useState } from 'react';
import login from '../../../public/img/login/login.jpg'

import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { authContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2'

const Login = () => {
  const [disabled, setDisabled] = useState(true)
  const captchaRef = useRef(null);
  const navigate =useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const {signIn} = useContext(authContext)
  const handleLogin = event =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value
    console.log(email,password);
    signIn(email,password)
    .then(result =>{
      const user = result.user;
      console.log(user);
      Swal.fire({
        title: "User Login Successfully",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
      });
      navigate(from,{replace:true});
    })
  }
  useEffect(()=>{
    loadCaptchaEnginge(6); 
  },[])
  const handleValidateCaptcha =(e)=>{
// const value =captchaRef.current.value;
// console.log(value);
    const user_captcha_value =e.target.value;
    if(validateCaptcha(user_captcha_value)){
      setDisabled(false)
    }
  }
    return (
       <>
<div className='container mt-lg-5'>
<div className="row border-5">
  <div className="col-lg-6">
  <form onSubmit={handleLogin}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" name="password"  className="form-control" id="exampleInputPassword1" />
   
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">
    <LoadCanvasTemplate />
  </label>
    <input onBlur={handleValidateCaptcha} type="text" placeholder='type the text above' className="form-control" id="exampleInputPassword1" />
    <button className='btn btn-success mt-3' style={{width:"550px"}}>Validate</button>
  </div>
 
  <input disabled={disabled} type="submit"  className="form-control btn btn-dark text-white" value='Login' id="exampleInputPassword1"  />
  <button type='submit' className='btn btn-dark mt-2' style={{width:"550px"}}><Link to={'/signup'}>Register Account</Link></button>
</form>
  </div>
  <div className="col-lg-6">
    <img src= {login} alt="" style={{width:"650px",marginTop:"10px"}}/>

  </div>
</div>
</div>

       </>
    );
};

export default Login;