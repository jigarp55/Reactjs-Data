import React, { useEffect, useState } from 'react'
import axios  from 'axios'
import { useNavigate} from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import { UserError, UserSuc } from '../slice/userslice';
import { useDispatch, useSelector } from 'react-redux';
export default function LoginPage() {

   const [ user, setUser ] = useState({});

   const dis = useDispatch();
   const profile = useSelector(y=>y.user.data); 
  
   
     const login = useGoogleLogin({
       onSuccess: (codeResponse) => setUser(codeResponse),
       onError: (error) => console.log('Login Failed:', error)
   });

   console.log(profile);

   useEffect(
      () => {
          if (user) {
            axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                      headers: {
                          Authorization: `Bearer ${user.access_token}`,
                          Accept: 'application/json'
                      }
                  })
                  .then((res) => {
                     if(res.status == 401)
                     { dis (UserSuc(null));
                     }
                     else
                     {
                     dis (UserSuc(res.data));
                     }









                     
                  })
                  .catch((err) => {
                     dis(UserError(err));
                  });
          }
      },
      [user]);

  const logOut = () => {
   googleLogout();
   dis(UserError(null));
};
    
   
  const errorMessage = (error) => {
      console.log(error);
  };

     const nav = useNavigate();

    
  return (
    <div>

<div>
            <h2>React Google Login</h2>
            <br />
            <br />
            {profile && profile?.email  ? (
                <div>
                    <img src={profile?.picture} alt="user image" />
                    <h3>User Logged in</h3>
                    <p>Name: {profile?.name}</p>
                    <p>Email Address: {profile?.email}</p>
                    <br />
                    <br />
                    <button onClick={logOut}>Log out</button>
                </div>
            ) : (
                <button onClick={() => login()}>Sign in with Google 🚀 </button>
            )}
        </div>

    </div>
  )
}
