import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../Providers/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import signup from '../../../public/assets/login/signup.jpg'

const SignUP = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = data => {
    console.log(data);
    createUser(data.email, data.password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        updateUserProfile(data.name, data.photoURL)
          .then(() => {
            console.log('user profile info update');
          })
          .catch(error => console.log(error));
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500
        });
        navigate('/');
      })
      .catch(error => console.log(error));
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Sign Up</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="Enter Name" className="input input-bordered" {...register("name", { required: true })} name='name' />
                {errors.name && <span className='bg-red-700'>Name field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="text" placeholder="photo URL" className="input input-bordered" {...register("photoURL", { required: true })} />
                {errors.name && <span className='bg-red-700'>photoURL field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" {...register("email", { required: true })} name='email' className="input input-bordered" />
                {errors.email && <span className='bg-red-700'>Email field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" className="input input-bordered" {...register("password", { required: true, minLength: 6, maxLength: 20 })} name='password' required />
                {errors.password && errors.password.type === 'required' && <p className='text-red-700'>password is required</p>}
                {errors.password && errors.password.type === 'minLength' && <p className='text-red-700'>password must be 6 characters</p>}
                {errors.password && errors.password.type === 'maxLength' && <p className='text-red-700'>password must be 20 less</p>}
                <label className="label">
                  <a href="password" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input type="submit" className="btn btn-primary" value="Sign Up" />
              </div>
            </form>
            <button className='py-6 bg-blue-800'><Link to={'/login'}>Already Have a Acount</Link></button>
          </div>
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">SignUP Form!</h1>
            <img src={signup} alt="" style={{width:'700px',marginTop:'20px', }} />
          <h5 className='text-3xl font-bold mt-5 text-success'>Please Create Your Account</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUP;



