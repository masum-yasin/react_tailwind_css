import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { loadCaptchaEnginge, LoadCanvasTemplate,  validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Providers/AuthProvider';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2'
import login from '../../../public/assets/login/login.jpg'


const Login = () => {
    // const captchaRef = useRef(null)

    const [disabled, setDisabled] = useState(true)
    const {signIn} = useContext(AuthContext)
    useEffect(()=>{
        loadCaptchaEnginge(6); 
    },[])
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";



    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        signIn(email,password)
        .then(resut =>{
          const user = resut.user;
          console.log(user);
      
        // Sweet Toast for login alart//

        Swal.fire({
          title: "Welcome Login Successfully",
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
          },
        })
        navigate(from, { replace: true });
        });
        
       
      

    }
    const handleValidateCaptcha = (e)=>{
        const user_captcha_value = e.target.value;
        if(validateCaptcha(user_captcha_value)){
            setDisabled(false)
            
        }
       
    }
    return (
       <>
       <Helmet>
        <title>Bistro Boss | Login</title>
       </Helmet>
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content  flex-col lg:flex-row-reverse">
         
          <div className="card shrink-0 md:w-1/2 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered" name='email' required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" className="input input-bordered"name='password' required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                <LoadCanvasTemplate />
                </label>
                <input onBlur={handleValidateCaptcha} type="text" placeholder="type the captcha above" className="input input-bordered"name='captcha' required />
                <button  className="btn btn-outline btn-success btn-xs mt-3 p-4 text-center">Validate</button>
              </div>
              <div className="form-control mt-6">
               
                <input disabled = {disabled} type="submit"  className="btn btn-primary" value="login"/>
              </div>
            </form>
            <button className='py-6 bg-blue-800'><Link  to={'/signup'}>Create New Account</Link></button>
          
          </div>
          
          <div className="text-center md:w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          <img src={login} alt="" style={{width:'700px',marginTop:'20px', }} />
          <h5 className='text-3xl font-bold mt-5 text-success'>Give Your Email And Password</h5>
          </div>
       
        </div>
      
      </div>
   
       </>
    );
};

export default Login;