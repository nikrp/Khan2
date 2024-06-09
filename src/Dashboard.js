import { useNavigate, useLocation } from 'react-router-dom'

import SurveyComponent from './Survey';
import Graphs from './Graphs';
import { auth, db } from './firebase';
import { useEffect, useState } from 'react';
import { doc, getDoc, addDoc, setDoc, collection } from 'firebase/firestore';







export default function Dashboard() {



  
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [reason, setReason] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [adminUser, setAdminUser] = useState('');

  
    const navigate = useNavigate();
    const [role, setRole] = useState('');
    const onButtonClick = () => {
      addDoc(collection(db, 'appointments'), {
        fName: fName,
        lName: lName,
        date: date,
        time: time,
        reason: reason,
        uid: auth.currentUser.uid,
      }).then(() => {
        navigate('/appointments', { replace: true, state: { role: role } });
      });
    }

    useEffect(() => {
      const getRole = async () => {
        const snap = await getDoc(doc(db, 'users', auth.currentUser.uid));
        setRole(snap.data()['type']);
      }

      getRole();
    }, []);
    
    
      const state = useLocation().state;
    const username = state ? state.username : "temp";

    return (
        <div data-theme='light' className={`min-h-screen`}>
              




            <div className={`min-h-screen flex justify-center items-center w-screen`}>
                <div className={`w-full`}>
                  {role === 'Administrator' ? (
                    <Graphs />
                  ) : (
                    <SurveyComponent />
                  )}
                </div>
            </div>
            <div className={`flex items-center px-2 py-2 fixed right-5 top-5 bg-gray-200 rounded-lg`}>
              
              {role === 'Student' && <button className="btn btn text-lg mr-4" onClick={()=>document.getElementById('my_modal_3').showModal()}>Create Appointment</button>}
                <dialog id="my_modal_3" className="modal">
                  <div className="modal-box">
                    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <input value={fName} onChange={(e) => setFName(e.target.value)} type="text" placeholder="Enter First Name" className="input input-bordered w-full mb-1 mt-3" />
    <input value={lName} onChange={(e) => setLName(e.target.value)} vtype="text" placeholder="Enter Last Name" className="input input-bordered w-full mb-1" />
    <input value={date} onChange={(e) => setDate(e.target.value)} type="text" placeholder="Enter Date(Month/Day/Year)" className="input input-bordered w-full mb-1" />
    <input value={time} onChange={(e) => setTime(e.target.value)} type="text" placeholder="Enter Time" className="input input-bordered w-full mb-1" />
    <input value={reason} onChange={(e) => setReason(e.target.value)} type="text" placeholder="Enter Reason" className="input input-bordered w-full mb-1" />
    <button onClick={onButtonClick} className={`btn btn-success animate-fadeIn text-lg w-full mb-3`}>Create Appointment</button>

    </div>
    

    </dialog>
    
              <button onClick={() => navigate('/appointments', { replace: true, state: {role: role} })} className={`btn text-lg mr-4`}>Appointments</button>
              
              <button onClick={() => {auth.signOut().then(() => {navigate('/', { replace: true })})}} className={`btn text-red-500 text-lg`}>Logout</button>
            </div>
        </div>
    );
}