
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from './firebase';
import { getDoc, collection, addDoc, updateDoc, setDoc, doc, query, where, getDocs, arrayUnion } from 'firebase/firestore';
const Person = 'Are you a Student or Administrator';
const SignUp = (props) => {
  const [username, setUsername] = useState('');
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [adminUser, setAdminUser] = useState('');
  const [role, setRole] = useState('');

  const navigate = useNavigate();
  const onButtonClick = () => {
    console.log(role);
    createUserWithEmailAndPassword(auth, email, password).then((result) => {
        const q = query(collection(db, 'users'), where('uid', '==', result.user.uid));
        getDocs(q).then((snapshot) => {
            if (snapshot.docs.length == 0) {
                setDoc(doc(db, 'users', result.user.uid), {
                    fName: fName,
                    lName: lName,
                    username: username,
                    email: email,
                    type: role,
                }).then(() => {
                    if (role === 'Administrator') {
                        setDoc(doc(db, 'orgs', result.user.uid), {
                            students: [],
                        });
                    }

                    if (role === 'Student') {
                        const q = query(collection(db, 'users'), where('username', '==', adminUser));
                        getDocs(q).then((snap) => {
                            if (snap.docs.length === 0) {
                                alert("Admin Not Found");
                            } else {
                                const user = snap.docs[0].id;
                                updateDoc(doc(db, 'orgs', user), {
                                    students: arrayUnion(result.user.uid),
                                });
                            }
                        });
                    }
                    navigate('/dashboard', { replace: true });
                });
            } else {
                navigate('/dashboard', { replace: true });
            }
        });
    });
  }

  return (
    <div className={`h-screen flex justify-center items-center`} data-theme = 'light'>
        <img src='https://t3.ftcdn.net/jpg/05/30/01/24/360_F_530012420_OxOf1xkLO7hKtzVDOZu0gWXmo8VM45SI.jpg' className={`fixed top-0 left-0 w-screen h-screen z-0`}/>
        <button className={`btn btn-success animate-fadeIn fixed top-5 left-5`} onClick={() => navigate('/', { replace: true })}>Home</button>
        <div className={`p-10 w-2/6  z-50 rounded-xl border-2 border-gray-300`}>
            <h1 className={`text-center animate-fadeIn text-4xl font-bold mb-2`}>Sign Up</h1>
            <div className={`w-full flex justify-between mb-1`}>
                <label className="form-control w-[49%]">
                    <div className="label">
                        <span className="label-text animate-fadeIn text-lg">First Name</span>
                    </div>
                    <input value={fName} onChange={(e) => setFName(e.target.value)} type="text" placeholder="Enter your first name" className="input input-bordered w-full input-md" />
                </label>
                <label className="form-control w-[49%]">
                    <div className="label">
                        <span className="label-text animate-fadeIn text-lg">Last Name</span>
                    </div>
                    <input value={lName} onChange={(e) => setLName(e.target.value)} type="text" placeholder="Enter your last name" className="input input-bordered w-full input-md" />
                </label>
            </div>
            <label className="form-control w-full mb-1">
                <div className="label">
                    <span className="label-text animate-fadeIn text-lg">Email</span>
                </div>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter your email" className="input input-bordered w-full input-md" />
            </label>
            <label className="form-control w-full mb-1">
                    <div className="label">
                        <span className="label-text  animate-fadeIn text-lg">Username</span>
                    </div>
                    <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Enter your first name" className="input input-bordered w-full input-md" />
                </label>
            <label className="form-control w-full mb-1">
                <div className="label">
                    <span className="label-text animate-fadeIn text-lg">Password</span>
                </div>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter your password" className="input input-bordered w-full input-md" />
            </label>
            <label className="form-control w-full mb-3">
                <div className="label">
                    <span className="label-text animate-fadeIn text-lg">Role</span>
                </div>
                <select defaultValue={role} onChange={(e) => setRole(e.target.value)} className="select select-bordered select-md">
                    <option value={''} disabled selected>Pick one</option>
                    <option value={'Administrator'}>Administrator</option>
                    <option value={'Student'}>Student</option>
                </select>
            </label>
            {role === "Student" && (
                <label className="form-control w-full mb-1">
                <div className="label">
                    <span className="label-text animate-fadeIn text-lg">Admin Username</span>
                </div>
                <input value={adminUser} onChange={(e) => setAdminUser(e.target.value)} type="text" placeholder="Enter your administrators username" className="input input-bordered w-full input-md" />
                </label>
            )}         
            <button onClick={onButtonClick} className={`btn btn-success animate-fadeIn text-lg w-full mb-3`}>Sign Up</button>
            <p className={`w-full flex justify-between`}><span className={`mr-auto`}>Already Have an Account? <span onClick={() => navigate('/login', { replace: true })} className={`text-success cursor-pointer`}>Login</span></span></p>
        </div>    
    </div>
  )
}

export default SignUp;