import React, {useState} from 'react'
import './Login.css'
import {FaUser, FaLock, FaFacebook, FaInstagram} from 'react-icons/fa'
import {FcGoogle} from 'react-icons/fc'
import {MdEmail} from 'react-icons/md'
import img1 from "../../img/products/log.svg"
import img2 from "../../img/products/register.svg"
import {Link} from 'react-router-dom'
import {GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../../firebase'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [click, setClick] = useState(false);
    const googleProvider = new GoogleAuthProvider();

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const GoogleLogin = async () => {
      try{
        await signInWithPopup(auth, googleProvider)
        toast.success('Successfully login!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }catch(error){
        console.log(error)
        toast.error('Failed to log in!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    }

    const register = async () => {
      try{
        const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
        console.log(user)
        toast.success('Successfully sign up!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }catch(error){
        console.log(error)
        toast.error('Failed to sign up!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    }

    const login = async () => {
      try{
        const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
        console.log(user)
        toast.success('Successfully login!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }catch(error){
        console.log(error)
        toast.error('Failed to log in!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    }

    return (
    <div className={click ? "sign-up-mode container" : "container"}>
      <div className="forms-container">
        <ToastContainer />
        <div className="signin-signup">
          <form action="#" className="sign-in-form">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i><FaUser/></i>
              <input type="text" placeholder="Email" onChange={(e) => {setLoginEmail(e.target.value)}}/>
            </div>
            <div className="input-field">
              <i><FaLock/></i>
              <input type="password" placeholder="Password" onChange={(e) => {setLoginPassword(e.target.value)}}/>
            </div>
            <input type="submit" value="Login" className="btn solid" onClick={login}/>
            <p className="social-text">Or Sign in with social platforms</p>
            <div className="social-media">

              <Link className="social-icon" onClick={GoogleLogin}>
                <span className="btn-icon"><FcGoogle /></span>
                <span className="btn-text">Sign in with Google</span>
              </Link>

            </div>
          </form>
          <form action="#" className="sign-up-form">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i><FaUser/></i>
              <input type="text" placeholder="Name"/>
            </div>
            <div className="input-field">
              <i><FaUser/></i>
              <input type="text" placeholder="Email" onChange={(e) => {setRegisterEmail(e.target.value)}}/>
            </div>
            <div className="input-field">
              <i><MdEmail/></i>
              <input type="password" placeholder="Password" onChange={(e) => {setRegisterPassword(e.target.value)}}/>
            </div>
            <div className="input-field">
              <i><FaLock/></i>
              <input type="password" placeholder="Confirm Password"/>
            </div>
            <input type="submit" className="btn" value="Sign up" onClick={register}/>
            <p className="social-text">Or Sign up with social platforms</p>
            <div className="social-media">
              <Link className="social-icon" onClick={GoogleLogin}>
                <span className="btn-icon"><FcGoogle /></span>
                <span className="btn-text">Sign up with Google</span>
              </Link>
            </div>
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
              Join our community now ! Get your hands on tech accessories featuring popular characters and iconic motifs!
            </p>
            <button className="btn transparent" id="sign-up-btn" onClick={() => setClick(!click)}>Sign up</button>
          </div>
          <img src={img1} className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>
              Sign in now and let's get your phone dressed up with our newly printed cases only available in our store
            </p>
            <button className="btn transparent" id="sign-in-btn" onClick={() => setClick(!click)}>Sign in</button>
          </div>
          <img src={img2} className="image" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Login