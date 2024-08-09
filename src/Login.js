import React from 'react'
import './Login.css'
import Button from '@mui/material/Button';
import { auth, provider } from './firebase';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Login() {
  const [state, dispatch] = useStateValue();
  const signIn = () => {
    auth.
      signInWithPopup(provider)
      .then((result) => {
        console.log(result.user);
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user
        })
      })
      .catch((err) => {
        console.log(err);
        alert(err.mesage);
      })

  }
  return (
    <div className='login'>
      <div className='login__logo'>
        <img
          src="https://logowik.com/content/uploads/images/facebook-new-2023-icon9594.logowik.com.webp"
          alt=""
        />

        <img
          src="https://logos-world.net/wp-content/uploads/2020/05/Facebook-Logo.jpg"
          alt=""
        />
      </div>
      <Button type="submit" onClick={signIn}>Sign In</Button>
    </div>
  )
}

export default Login
