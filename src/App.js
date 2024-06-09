import Home from './Home';
import Dashboard from "./Dashboard";
import './output.css';
import SignUp from './SignUp';
import Login from './Login';
import Contact from './Contact';
import Graphs from './Graphs';
import Insights from './Insights';


import { Routes, Route } from 'react-router-dom';
import Appointments from './Appointments';

function App() {
  return (
    <Routes data-theme='light'>
      <Route path='/' element={<Home/>}/>
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/graphs" element={<Graphs/>} />
      <Route path="/insights" element={<Insights/>} />
      <Route path='/appointments' element={<Appointments />} />
      
    </Routes>
  );
}

export default App;
