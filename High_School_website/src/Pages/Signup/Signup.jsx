import React from 'react';
import signup from '../../../public/img/login/signup.jpg'

const Signup = () => {
    return (
        <div style={{marginTop:"100px"}}>
<div className="row container p-lg-3" >
<form className='col-lg-7'>
<div className="form-group row">
<label htmlFor="inputName" className="col-sm-1 col-form-label">Name</label>
<div className="col-sm-8">
<input type="text" className="form-control p-3" id="inputName" placeholder="Enter Your User Name" />
</div>
</div>

<div className="form-group row mt-3">
<label htmlFor="inputEmail" className="col-sm-1 col-form-label">Email</label>
<div className="col-sm-8">
<input type="email" className="form-control p-3" id="inputEmail" placeholder="Enter Your Email" />
</div>
</div>
<div className="form-group row mt-3">
<label htmlFor="inputPassword" className="col-sm-1 col-form-label">Password</label>
<div className="col-sm-8">
<input type="password" className="form-control p-3" id="inputPassword" placeholder="Enter Your Password" />
</div>
</div>
<div className="form-group row mt-3">
<label htmlFor="inputPassword" className="col-sm-1 col-form-label">Password</label>
<div className="col-sm-8">
<input type="password" className="form-control p-3" id="inputPassword" placeholder="Enter Your Confirm Password" />
</div>
</div>

<div className="form-group row mt-3">
<label htmlFor="inputsubmit" className="col-sm-1 col-form-label">SUBMIT</label>
<div className="col-lg-8">
<input type="submit" className="form-control button p-3" id="inputSubmit" placeholder="Submit" />
</div>
</div>
</form>
  <div className='col-lg-5'>
  <img src={signup} alt=""  style={{width:"600px"}} />
</div>
    </div>
  
        </div>
    );
};

export default Signup;