import React from 'react';
import login from '../../../public/img/login/login.jpg'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
       <>
  <div className='row'>
       
  <form className='col-lg-6'>
        <div className="form-group row">
    <label htmlFor="inputemail" className="col-sm-1 col-form-label">Email</label>
    <div className="col-sm-8">
      <input type="email" className="form-control p-3" id="inputName" placeholder="Enter Your Email" />
    </div>
  </div>
  <div className="form-group row mt-3">
    <label htmlFor="inputState" className="col-sm-1 col-form-label">Password</label>
    <div className="col-sm-8">
      <input type="password" className="form-control p-3" id="inputpassword" placeholder=" Enter Your Password" />
    </div>
  </div>
 
 <div className="form-group row mt-3">
    <label htmlFor="inputsubmit" className="col-sm-1 col-form-label">SUBMIT</label>
    <div className="col-lg-8">
      <input type="submit" className="form-control button p-3" id="inputSubmit" placeholder="Submit" />
    </div>
  </div>
  <div className="form-group row mt-3">
    
    <div className="col-lg-8">
     <button style={{width:"430px",marginLeft:"60px"}} className="form-control button p-3" id="inputsignup"><Link to={'/signup'}>Create Your Account</Link></button>
    </div>
  </div>
</form>
<div className='col-lg-6'>
    <img src={login} alt="" style={{width:"600px"}} />
</div>
  </div>
       </>
    );
};

export default Login;