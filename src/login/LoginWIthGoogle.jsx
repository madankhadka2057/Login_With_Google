import React, { useState, useEffect } from 'react'
import './login.css'
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import axios  from 'axios'
import { useNavigate } from 'react-router-dom';

const LoginWIthGoogle = () => {
  const [LoginDetails, setLoginDetails] = useState();
  const navigate=useNavigate
  useEffect(() => {
    if (LoginDetails) {
      handleData();
    }
  }, [LoginDetails]);

  
  const handleData = async () => {
    try {
      const response = await axios.post("http://localhost:3001/login", LoginDetails);
      if(response.status===200){
        window.location.href="/"
      }else if(response.status===201){
        window.location.href="/"
      }else{
        alert("Something error please try again")
      }
    } catch (error) {
      console.error("Error while sending data:", error);
    }
  }

  return (
    <>
      <GoogleLogin 
        buttonText="Continue with Google"
        onSuccess={credentialResponse => {
          const credentialResponseDecode = jwtDecode(credentialResponse.credential);
          localStorage.setItem("sub",credentialResponseDecode.sub)
          // console.log(credentialResponseDecode);
          setLoginDetails({
            email: credentialResponseDecode.email,
            given_name: credentialResponseDecode.given_name,
            name: credentialResponseDecode.name,
            picture: credentialResponseDecode.picture,
            sub: credentialResponseDecode.sub
          });
        }}
        onError={() => {
          console.log('Login Failed');
        }}
      />
    </>
  )
}

export default LoginWIthGoogle;
