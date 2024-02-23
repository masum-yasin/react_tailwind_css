import React, { useContext } from 'react';
import signup from '../../../public/img/login/signup.jpg'
import { useForm } from 'react-hook-form';
import { authContext } from '../../Providers/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'



const Signup = () => {
    const {
        register,
        handleSubmit,
        reset,
     
        formState: { errors },
      } = useForm()
      const {createuser,updateUserProfile} =useContext(authContext)
      const navigate = useNavigate()
      const onSubmit = data => {
        console.log(data)
        createuser(data.email,data.password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            updateUserProfile(data.name,data.photoURL)
            .then(() =>{
                console.log("User Profile info Update");
                reset();
                Swal.fire({
                    title: "User Create Successfully",
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
                  navigate("/")
            })
            .catch(error =>console.log(error))
        })

      }

    
    return (
       <>
       <div className='container mt-lg-5'>
<div className="row border-5">
  <div className="col-lg-6">
  <form  onSubmit={handleSubmit(onSubmit)}>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">User Name</label>
    <input type="text" {...register("name",{ required: true })} name="name" placeholder='Enter Yor Name' className="form-control" id="exampleInputPassword6" />
    {errors.name && <span className='text-danger'>This Name is required</span>}
   
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">photo URL</label>
    <input type="text" {...register("photoURL",{ required: true })} name="photoURL" placeholder='Enter Yoru Photo' className="form-control" id="exampleInputPassword6" />
    {errors.photoURL && <span className='text-danger'>photoURL is required</span>}
   
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" {...register("email",{required:true})} name="email" className="form-control"  placeholder='Email' id="exampleInputEmail1" aria-describedby="emailHelp" />
    {errors.email && <span className='text-danger'>This Email is required</span>}
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" {...register("password",{ required: true, minLength:6, maxLength: 20 })} name="password" placeholder='Enter Yor Password' className="form-control" id="exampleInputPassword1" />
    {errors.password?.type === "required" && (
        <p className="text-danger">Password must be 6 characters</p>
      )}
  </div>

<input type="submit"  className="form-control btn btn-dark text-white" value='Sign Up' id="exampleInputPassword1"  />
<div>
<p><small className='btn btn-dark mt-2' style={{width:"545px"}}><Link to={'/login'}>Alredy Have an Account</Link></small></p>
</div>
</form>
  </div>
  <div className="col-lg-6">
    <img src= {signup} alt="" style={{width:"550px"}}/>

  </div>
</div>
</div>
       </>
    );
}


export default Signup;