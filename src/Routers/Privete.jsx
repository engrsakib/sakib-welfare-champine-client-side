import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const Privete = ({childeren}) => {
    const { user, setLoadding, Loadding} = useContext(AuthContext);
    
    if(Loadding){
        return;
    }
   
    
    
    if(user && user?.mail){
        return childeren;
    }

    return (
         <Navigate to={`/auth/login`}></Navigate>
    );
};

export default Privete;