import { useNavigate } from 'react-router-dom'
import logo from './image.png';
import { auth } from './firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';


export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onButtonClick = () => {
        signInWithEmailAndPassword(auth, email, password).then((result) => {
            navigate('/dashboard', { replace: true });
        });
    }

    return (
        <div className={`min-h-screen flex justify-center items-center flex-col bg-no-repeat`} data-theme='light' >
            <img src='https://t3.ftcdn.net/jpg/05/30/01/24/360_F_530012420_OxOf1xkLO7hKtzVDOZu0gWXmo8VM45SI.jpg' className={`fixed top-0 left-0 w-screen h-screen z-0`}/>
            <button className={`btn btn-success animate-fadeIn fixed top-5 left-5`} onClick={() => navigate('/', { replace: true })}>Home</button>
            <div className={`p-10 z-50 w-2/6 rounded-xl border-2 border-gray-300`}>
                <h1 className={`text-center animate-fadeIn text-4xl font-bold mb-2`}>Login</h1>
                <label className="form-control w-full mb-1">
                    <div className="label">
                        <span className="label-text animate-fadeIn text-lg">Email</span>
                    </div>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter your email" className="input input-bordered w-full input-md" />
                </label>
                <label className="form-control w-full mb-3">
                    <div className="label">
                        <span className="label-text animate-fadeIn text-lg">Password</span>
                    </div>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter your password" className="input input-bordered w-full input-md" />
                </label>
                <button onClick={onButtonClick} className={`btn btn-success animate-fadeIn text-lg w-full mb-3`}>Login</button>
                <p className={`w-full flex justify-between`}><span className={`mr-auto`}>Don't Have an Account? <span onClick={() => navigate('/signup', { replace: true })} className={`text-success cursor-pointer`}>Sign Up Today</span></span><span className={`text-success cursor-pointer`}>Forgot Password?</span></p>
            </div>    
        </div> 
    );
}