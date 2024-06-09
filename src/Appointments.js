import { collection, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { auth } from "./firebase";

export default function Appointments() {
    const location = useLocation();
    const navigate = useNavigate();
    const role = location.state.role;
    const [data, setData] = useState([]);

    useEffect(() => {
        const getDate = async () => {
            const q = query(collection(db, 'appointments'), where('uid', '==', auth.currentUser.uid));
        }
    }, []);

    return (

        <div className={`min-h-screen`} data-theme='light'>
          <img className="animate-fadeIn w-10 h-10 mr-6" src="https://cdn-icons-png.flaticon.com/512/245/245336.png" alt="nice"/>
                    <h1 className={`animate-fadeIn font-bold text-success text-5xl mr-20`}>EduPulse</h1>
                    <button onClick={() => navigate('/Dashboard', {replace: true})} className={`animate-fadeIn btn btn-ghost font-normal text-gray-700 text-lg mr-7`}>Dashboard</button>
                    <button onClick={() => navigate('/Graphs', {replace: true})} className={`animate-fadeIn btn btn-ghost font-normal text-gray-700 text-lg mr-7`}>Graphs</button>
                    
           <div className={`p-10 w-5/6 border-2 mx-auto mt-10`}>
            <div className="overflow-x-auto">
      <center>
        
  <table className="table mx-auto">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Time</th>
        <th>Date</th>
        <th>Reason</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>Ankur</th>
        <td>Barde</td>
        <td>3:45</td>
        <td>7/</td>
      </tr>
      {/* row 2 */}
      <tr className="hover">
        <th>2</th>
        <td>Hart Hagerty</td>
        <td>Desktop Support Technician</td>
        <td>Purple</td>
      </tr>
      {/* row 3 */}
      <tr>
        <th>3</th>
        <td>Brice Swyre</td>
        <td>Tax Accountant</td>
        <td>Red</td>
      </tr>
    </tbody>
  </table>
  </center>
</div>
            </div>
        </div>
    )
}