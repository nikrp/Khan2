import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { auth, db } from "./firebase";

export default function Appointments() {
    const location = useLocation();
    const navigate = useNavigate();
    const role = location.state.role;
    const [data, setData] = useState([]);

    useEffect(() => {
        const getDate = async () => {
            if (role === 'Student') {
                const q = query(collection(db, 'appointments'), where('uid', '==', auth.currentUser.uid));

                const stuff = await getDocs(q);

                setData(stuff.docs);
            } else {
                const snapshot = await getDoc(doc(db, 'orgs', auth.currentUser.uid));

                const q = query(collection(db, 'appointments'), where('uid', 'in', snapshot.data()['students']));
                const results = await getDocs(q);
                setData(results.docs);
            }
            
        }

        getDate();
    }, []);

    return (

        <div className={`min-h-screen`} data-theme='light'>
          
                    <h1 className={`animate-fadeIn font-bold text-success text-center text-5xl mr-20 w-full`}>EduPulse</h1>
                    <div className={`mx-auto w-fit flex items-center`}>
                        <button onClick={() => navigate('/Dashboard', {replace: true})} className={`animate-fadeIn btn mt-2 font-normal text-gray-700 text-lg mr-7`}>Dashboard</button>
                    </div>
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
      {data.map((d, index) => {
        return (
            <tr>
                <td></td>
                <td>{d.data().fName}</td>
                <td>{d.data().lName}</td>

                <td>{d.data().time}</td>
                <td>{d.data().date}</td>
                <td>{d.data().reason}</td>

            </tr>
        )
      })}
    </tbody>
  </table>
  </center>
</div>
            </div>
        </div>
    )
}