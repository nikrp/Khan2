import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { auth, db, model } from './firebase';
import { getDocs, collection, where, query, getDoc, doc } from 'firebase/firestore';
import { IoRefresh } from "react-icons/io5";
import { ImSpinner8 } from "react-icons/im";
import { AutoTokenizer, AutoModelForCausalLM } from '@xenova/transformers';
import OpenAIChat from './Chat';

const barChartData = [
  {
    name: 'Question 1',
    1: 3,
    2: 4,
    3: 5,
    4: 6,
    5: 7,
  },
  {
    name: 'Question 2',
    1: 3,
    2: 4,
    3: 5,
    4: 6,
    5: 7,
  },
  {
    name: 'Question 3',
    1: 3,
    2: 4,
    3: 5,
    4: 6,
    5: 7,
  },
  {
    name: 'Question 4',
    1: 3,
    2: 4,
    3: 5,
    4: 6,
    5: 7,
  },
  {
    name: 'Question 5',
    1: 3,
    2: 4,
    3: 5,
    4: 6,
    5: 7,
  },
  {
    name: 'Question 6',
    1: 3,
    2: 4,
    3: 5,
    4: 6,
    5: 7,
  },
  {
    name: 'Question 7',
    1: 3,
    2: 4,
    3: 5,
    4: 6,
    5: 7,
  },
  {
    name: 'Question 8',
    1: 3,
    2: 4,
    3: 5,
    4: 6,
    5: 7,
  },
  {
    name: 'Question 9',
    1: 3,
    2: 4,
    3: 5,
    4: 6,
    5: 7,
  },
];

const pieChartData = [
  { name: 'Question 1', value: 400 },
  { name: 'Question 2', value: 300 },
  { name: 'Question 3', value: 300 },
  { name: 'Question 4', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function Graphs() {
  const [done, setDone] = useState(false);
  const [studentData, setStudentData] = useState(undefined);
  const [model, setModel] = useState(null);
 const [tokenizer, setTokenizer] = useState(null);
  const navigate = useNavigate();

  const getData = async () => {
    setDone(false);

    const snapshot = await getDoc(doc(db, 'orgs', auth.currentUser.uid));
    let count = 0;

    let q = query(collection(db, 'surveyResults'), where('question1', '==', 1));
    let snap = await getDocs(q);
    snap.docs.map((aDoc) => {
      if (snapshot.data()['students'].includes(aDoc.id)) {
        count++;
      }

      
    });
    barChartData[0][1] = count;
    count = 0;

    q = query(collection(db, 'surveyResults'), where('question1', '==', 2));
    snap = await getDocs(q);
    snap.docs.map((aDoc) => {
      if (snapshot.data()['students'].includes(aDoc.id)) {
        count++;
      }

      
    });
    barChartData[0][2] = count;
    count = 0;

    q = query(collection(db, 'surveyResults'), where('question1', '==', 3));
    snap = await getDocs(q);
    snap.docs.map((aDoc) => {
      if (snapshot.data()['students'].includes(aDoc.id)) {
        count++;
      }

      
    });
    barChartData[0][3] = count;
    count = 0;

    q = query(collection(db, 'surveyResults'), where('question1', '==', 4));
    snap = await getDocs(q);
    snap.docs.map((aDoc) => {
      if (snapshot.data()['students'].includes(aDoc.id)) {
        count++;
      }

      
    });
    barChartData[0][4] = count;
    count = 0

    q = query(collection(db, 'surveyResults'), where('question1', '==', 5));
    snap = await getDocs(q);
    snap.docs.map((aDoc) => {
      if (snapshot.data()['students'].includes(aDoc.id)) {
        count++;
      }

      
    });
    barChartData[0][5] = count;
    count=0;

    q = query(collection(db, 'surveyResults'), where('question2', '==', 1));
    snap = await getDocs(q);
    snap.docs.map((aDoc) => {
      if (snapshot.data()['students'].includes(aDoc.id)) {
        count++;
      }

      
    });
    barChartData[1][1] = count;
    count=0;
    
    q = query(collection(db, 'surveyResults'), where('question2', '==', 2));
    snap = await getDocs(q);
    snap.docs.map((aDoc) => {
      if (snapshot.data()['students'].includes(aDoc.id)) {
        count++;
      }

      
    });
    barChartData[1][2] = count;
    count=0;
    
    q = query(collection(db, 'surveyResults'), where('question2', '==', 3));
    snap = await getDocs(q);
    snap.docs.map((aDoc) => {
      if (snapshot.data()['students'].includes(aDoc.id)) {
        count++;
      }

      
    });
    barChartData[1][3] = count;
    count=0;

    q = query(collection(db, 'surveyResults'), where('question2', '==', 4));
    snap = await getDocs(q);
    snap.docs.map((aDoc) => {
      if (snapshot.data()['students'].includes(aDoc.id)) {
        count++;
      }

      
    });
    barChartData[1][4] = count;
    count=0;

    q = query(collection(db, 'surveyResults'), where('question2', '==', 5));
    snap = await getDocs(q);
    snap.docs.map((aDoc) => {
      if (snapshot.data()['students'].includes(aDoc.id)) {
        count++;
      }

      
    });
    barChartData[1][5] = count;
    count=0;

    q = query(collection(db, 'surveyResults'), where('question3', '==', 1));
    snap = await getDocs(q);
    snap.docs.map((aDoc) => {
      if (snapshot.data()['students'].includes(aDoc.id)) {
        count++;
      }

      
    });
    barChartData[2][1] = count;
    count=0;
    
    q = query(collection(db, 'surveyResults'), where('question3', '==', 2));
    snap = await getDocs(q);
    snap.docs.map((aDoc) => {
      if (snapshot.data()['students'].includes(aDoc.id)) {
        count++;
      }

      
    });
    barChartData[2][2] = count;
    count=0;
    
    q = query(collection(db, 'surveyResults'), where('question3', '==', 3));
    snap = await getDocs(q);
    snap.docs.map((aDoc) => {
      if (snapshot.data()['students'].includes(aDoc.id)) {
        count++;
      }

      
    });
    barChartData[2][3] = count;
    count=0;

    q = query(collection(db, 'surveyResults'), where('question3', '==', 4));
    snap = await getDocs(q);
    snap.docs.map((aDoc) => {
      if (snapshot.data()['students'].includes(aDoc.id)) {
        count++;
      }

      
    });
    barChartData[2][4] = count;
    count=0;

    q = query(collection(db, 'surveyResults'), where('question3', '==', 5));
    snap = await getDocs(q);
    snap.docs.map((aDoc) => {
      if (snapshot.data()['students'].includes(aDoc.id)) {
        count++;
      }

      
    });
    barChartData[2][5] = count;
    count=0;

    q = query(collection(db, 'surveyResults'), where('question4', '==', 1));
    snap = await getDocs(q);
    snap.docs.map((aDoc) => {
      if (snapshot.data()['students'].includes(aDoc.id)) {
        count++;
      }

      
    });
    barChartData[3][1] = count;
    count=0;
    
    q = query(collection(db, 'surveyResults'), where('question4', '==', 2));
    snap = await getDocs(q);
    snap.docs.map((aDoc) => {
      if (snapshot.data()['students'].includes(aDoc.id)) {
        count++;
      }

      
    });
    barChartData[3][2] = count;
    count=0;
    
    q = query(collection(db, 'surveyResults'), where('question4', '==', 3));
    snap = await getDocs(q);
    snap.docs.map((aDoc) => {
      if (snapshot.data()['students'].includes(aDoc.id)) {
        count++;
      }

      
    });
    barChartData[3][3] = count;
    count=0;

    q = query(collection(db, 'surveyResults'), where('question4', '==', 4));
    snap = await getDocs(q);
    snap.docs.map((aDoc) => {
      if (snapshot.data()['students'].includes(aDoc.id)) {
        count++;
      }

      
    });
    barChartData[3][4] = count;
    count=0;

    q = query(collection(db, 'surveyResults'), where('question4', '==', 5));
    snap = await getDocs(q);
    snap.docs.map((aDoc) => {
      if (snapshot.data()['students'].includes(aDoc.id)) {
        count++;
      }

      
    });
    barChartData[3][5] = count;
    count = 0;

    q = query(collection(db, 'surveyResults'), where('question5', '==', 1));
    snap = await getDocs(q);
    snap.docs.map((aDoc) => {
      if (snapshot.data()['students'].includes(aDoc.id)) {
        count++;
      }

      
    });
    barChartData[4][1] = count;
    count = 0;
    
    q = query(collection(db, 'surveyResults'), where('question5', '==', 2));
    snap = await getDocs(q);
    snap.docs.map((aDoc) => {
      if (snapshot.data()['students'].includes(aDoc.id)) {
        count++;
      }

      
    });
    barChartData[4][2] = count;
    count = 0;
    
    q = query(collection(db, 'surveyResults'), where('question5', '==', 3));
    snap = await getDocs(q);
    snap.docs.map((aDoc) => {
      if (snapshot.data()['students'].includes(aDoc.id)) {
        count++;
      }

      
    });
    barChartData[4][3] = count;
    count = 0;

    q = query(collection(db, 'surveyResults'), where('question5', '==', 4));
    snap = await getDocs(q);
    snap.docs.map((aDoc) => {
      if (snapshot.data()['students'].includes(aDoc.id)) {
        count++;
      }

      
    });
    barChartData[4][4] = count;
    count = 0;

    q = query(collection(db, 'surveyResults'), where('question5', '==', 5));
    snap = await getDocs(q);
    snap.docs.map((aDoc) => {
      if (snapshot.data()['students'].includes(aDoc.id)) {
        count++;
      }

      
    });
    barChartData[4][5] = count;
    count = 0;

    q = query(collection(db, 'surveyResults'), where('question6', '==', 1));
    snap = await getDocs(q);
    snap.docs.map((aDoc) => {
      if (snapshot.data()['students'].includes(aDoc.id)) {
        count++;
      }

      
    });
    barChartData[5][1] = count;
    count = 0;
    
    q = query(collection(db, 'surveyResults'), where('question6', '==', 2));
    snap = await getDocs(q);
    snap.docs.map((aDoc) => {
      if (snapshot.data()['students'].includes(aDoc.id)) {
        count++;
      }

      
    });
    barChartData[5][2] = count;
    count = 0;
    
    q = query(collection(db, 'surveyResults'), where('question6', '==', 3));
    snap = await getDocs(q);
    snap.docs.map((aDoc) => {
      if (snapshot.data()['students'].includes(aDoc.id)) {
        count++;
      }

      
    });
    barChartData[5][3] = count;
    count = 0;

    q = query(collection(db, 'surveyResults'), where('question6', '==', 4));
    snap = await getDocs(q);
    snap.docs.map((aDoc) => {
      if (snapshot.data()['students'].includes(aDoc.id)) {
        count++;
      }

      
    });
    barChartData[5][4] = count;
    count = 0;

    q = query(collection(db, 'surveyResults'), where('question6', '==', 5));
    snap = await getDocs(q);
    snap.docs.map((aDoc) => {
      if (snapshot.data()['students'].includes(aDoc.id)) {
        count++;
      }

      
    });
    barChartData[5][5] = count;
    count = 0;

    q = query(collection(db, 'surveyResults'), where('question7', '==', 1));
    snap = await getDocs(q);
    snap.docs.map((aDoc) => {
      if (snapshot.data()['students'].includes(aDoc.id)) {
        count++;
      }

      
    });
    barChartData[6][1] = count;
    count = 0;
    
    q = query(collection(db, 'surveyResults'), where('question7', '==', 2));
    snap = await getDocs(q);
    snap.docs.map((aDoc) => {
      if (snapshot.data()['students'].includes(aDoc.id)) {
        count++;
      }

      
    });
    barChartData[6][2] = count;
    count = 0;
    
    q = query(collection(db, 'surveyResults'), where('question7', '==', 3));
    snap = await getDocs(q);
    snap.docs.map((aDoc) => {
      if (snapshot.data()['students'].includes(aDoc.id)) {
        count++;
      }

      
    });
    barChartData[6][3] = count;
    count = 0;

    q = query(collection(db, 'surveyResults'), where('question7', '==', 4));
    snap = await getDocs(q);
    snap.docs.map((aDoc) => {
      if (snapshot.data()['students'].includes(aDoc.id)) {
        count++;
      }

      
    });
    barChartData[6][4] = count;
    count = 0;

    q = query(collection(db, 'surveyResults'), where('question7', '==', 5));
    snap = await getDocs(q);
    snap.docs.map((aDoc) => {
      if (snapshot.data()['students'].includes(aDoc.id)) {
        count++;
      }

      
    });
    barChartData[6][5] = count;
    count = 0;

    q = query(collection(db, 'surveyResults'), where('question8', '==', 1));
    snap = await getDocs(q);
    snap.docs.map((aDoc) => {
      if (snapshot.data()['students'].includes(aDoc.id)) {
        count++;
      }

      
    });
    barChartData[7][1] = count;
    count = 0;
    
    q = query(collection(db, 'surveyResults'), where('question8', '==', 2));
    snap = await getDocs(q);
    snap.docs.map((aDoc) => {
      if (snapshot.data()['students'].includes(aDoc.id)) {
        count++;
      }

      
    });
    barChartData[7][2] = count;
    count = 0;
    
    q = query(collection(db, 'surveyResults'), where('question8', '==', 3));
    snap = await getDocs(q);
    snap.docs.map((aDoc) => {
      if (snapshot.data()['students'].includes(aDoc.id)) {
        count++;
      }

      
    });
    barChartData[7][3] = count;
    count = 0;

    q = query(collection(db, 'surveyResults'), where('question8', '==', 4));
    snap = await getDocs(q);
    snap.docs.map((aDoc) => {
      if (snapshot.data()['students'].includes(aDoc.id)) {
        count++;
      }

      
    });
    barChartData[7][4] = count;
    count = 0;

    q = query(collection(db, 'surveyResults'), where('question8', '==', 5));
    snap = await getDocs(q);
    snap.docs.map((aDoc) => {
      if (snapshot.data()['students'].includes(aDoc.id)) {
        count++;
      }

      
    });
    barChartData[7][5] = count;
    count = 0;

    q = query(collection(db, 'surveyResults'), where('question9', '==', 1));
    snap = await getDocs(q);
    snap.docs.map((aDoc) => {
      if (snapshot.data()['students'].includes(aDoc.id)) {
        count++;
      }

      
    });
    barChartData[8][1] = count;
    count = 0;
    
    q = query(collection(db, 'surveyResults'), where('question9', '==', 2));
    snap = await getDocs(q);
    snap.docs.map((aDoc) => {
      if (snapshot.data()['students'].includes(aDoc.id)) {
        count++;
      }

      
    });
    barChartData[8][2] = count;
    count = 0;
    
    q = query(collection(db, 'surveyResults'), where('question9', '==', 3));
    snap = await getDocs(q);
    snap.docs.map((aDoc) => {
      if (snapshot.data()['students'].includes(aDoc.id)) {
        count++;
      }

      
    });
    barChartData[8][3] = count;
    count = 0;

    q = query(collection(db, 'surveyResults'), where('question9', '==', 4));
    snap = await getDocs(q);
    snap.docs.map((aDoc) => {
      if (snapshot.data()['students'].includes(aDoc.id)) {
        count++;
      }

      
    });
    barChartData[8][4] = count;
    count = 0;

    q = query(collection(db, 'surveyResults'), where('question9', '==', 5));
    snap = await getDocs(q);
    snap.docs.map((aDoc) => {
      if (snapshot.data()['students'].includes(aDoc.id)) {
        count++;
      }

      
    });
    barChartData[8][5] = count;
    count = 0;

    setDone(true);
  }

  const getStudentData = async () => {
    const snapshot = await getDoc(doc(db, 'orgs', auth.currentUser.uid));

    const q = query(collection(db, 'surveyResults'), where('uid', 'in', snapshot.data()['students']));
    const snap = await getDocs(q);

    setStudentData(snap.docs);
  }
useEffect(() => {
  async function run() {
    try {
      const tokenizer = await AutoTokenizer.from_pretrained('failspy/Meta-Llama-3-8B-Instruct-abliterated-v3');
      const model = await AutoModelForCausalLM.from_pretrained('failspy/Meta-Llama-3-8B-Instruct-abliterated-v3');
     
      setTokenizer(tokenizer);
      setModel(model);
    } catch (error) {
      console.error('Error loading model or tokenizer:', error);
    }

    if (!model || !tokenizer) {
      return <div>Loading...</div>;
    }

  } 
  
  //run();
  getStudentData();
  getData();
}, []);

  return (
    <div>
    <button onClick={() => navigate('/Dashboard', { replace: true })} className={`animate-fadeIn btn btn-success fixed top-5 left-5`}>Dashboard</button>
    <div data-theme="light" className="min-h-screen flex flex-col items-center">
         <h1 className={`font-semibold text-success text-4xl mb-10 mt-5`}>Student Survey Repsonses</h1>
        <div className="w-5/6 p-10 rounded-xl bg-gray-200 mb-4">
          <button className={`btn mb-5`} onClick={getData}>Refresh <IoRefresh /></button>
          <div className={`flex justify-center items-center w-full`}>
            {done ? <ResponsiveContainer width="100%" height={400}>
              <BarChart
                data={barChartData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                  <Bar dataKey="1" fill="#639F83" />
                  <Bar dataKey="2" fill="#A1A2A3" />
                  <Bar dataKey="3" fill="#47B394" />
                  <Bar dataKey="4" fill="#D1EBE2" />
                  <Bar dataKey="5" fill="#75C3A0" />
              </BarChart>
            </ResponsiveContainer> : (
              <div className={`flex items-center`}>
                <p className={`text-2xl font-bold mr-5`}>Collecting Data</p>
                <ImSpinner8 className={`animate-spin`} size={35} />
              </div>
            )}
          </div>
        </div>
        <div>
          <button className={`btn mb-5`} onClick={getStudentData}>Refresh <IoRefresh /></button>
          <table className="table table-zebra table-lg">
            {/* head */}
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Question 1</th>
                <th>Question 2</th>
                <th>Question 3</th>
                <th>Question 4</th>
                <th>Question 5</th>
                <th>Question 6</th>
                <th>Question 7</th>
                <th>Question 8</th>
                <th>Question 9</th>
              </tr>
            </thead>
            <tbody>
              {studentData && studentData.map((doc, index) => {
                return (
                  <tr key={index}>
                    <td>{doc.data()['fName']}</td>
                    <td>{doc.data()['lName']}</td>
                    <td>{doc.data()['email']}</td>
                    <td>{doc.data()['question1']}</td>
                    <td>{doc.data()['question2']}</td>
                    <td>{doc.data()['question3']}</td>
                    <td>{doc.data()['question4']}</td>
                    <td>{doc.data()['question5']}</td>
                    <td>{doc.data()['question6']}</td>
                    <td>{doc.data()['question7']}</td>
                    <td>{doc.data()['question8']}</td>
                    <td>{doc.data()['question9']}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
    </div>
    </div>
  );
}