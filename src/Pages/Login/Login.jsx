import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../../assets/images/login/login.svg"
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useContext, useState } from "react";
import { AuthContext } from "../../Components/AutProvider";
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import axios from "axios";

const Login = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const handleGoogleLogin = () => {
        signInWithPopup(auth, provider)
    }
    
    const [showPassword, setShowPassword] = useState("");
    const [error, setError] = useState(null);
    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signIn(email, password)

        .then(result => {
            const loggedInUser = result.user;
            console.log(loggedInUser);
            const user = {email};
            // navigate(location?.state ? location?.state : "/")
            // Get Accsess Token

            axios.post("http://localhost:5000/jwt", user)
            .then(res => {
                console.log(res.data)
            })

        })
        .catch(error => {
            console.error(error)
        })
        }
    
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row  rounded-lg">
                    <div className="mr-16 w-1/2">
                        <img src={img} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm bg-slate-300 ">
                        <h1 className="text-3xl text-center mt-6 font-bold">Login now!</h1>
                        <form onSubmit={handleLogin} className="card-body ">
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="Email" name="email" required placeholder="Your Email Address" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>

                                <input type={showPassword ? "text" : "password"} name="password" required placeholder="Password" className="input input-bordered" />
                                <span className="absolute mt-[51px] right-[50px]" onClick={() => setShowPassword(!showPassword)} >
                                    {
                                        showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
                                    }
                                </span>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover mt-4">Forgot password?</a>
                                </label>
                            </div>
                            <div>
                                <h1 className="text-xl font-bold">Login With</h1>
                                <button onClick={handleGoogleLogin} className="btn btn-outline rounded-b mt-4 w-40 lowercase">
                                    <FaGoogle></FaGoogle>
                                    Google
                                </button>
                                <br />
                                <button className="btn btn-outline rounded-t w-40 lowercase">
                                    <FaGithub></FaGithub>
                                    GitHub
                                </button>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <p className="text-center mt-4">Do Not Have Account ? <Link className="text-blue-700 font-bold" to="/signup">Register</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;