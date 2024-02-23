import React, {useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../Providers/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(authContext);
    const location = useLocation();
    if(loading){
        return <div className="progress">
  <div className="progress-bar" role="progressbar" style={{width: '25%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>25%</div>
</div>

    }
    if(user){
        return children;
    }
    return <Navigate to={'/login'} state={{form:location}} replace></Navigate>
};

export default PrivateRoute;