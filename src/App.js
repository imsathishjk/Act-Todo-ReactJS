import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import "./index.css"
import Landing from './Pages/Landing';
import { useState } from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));

function App() {
  const [users, setusers] = useState([
    {
      username: "John",
      password: "123"
    }
  ]);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login users={users} setusers={setusers} />}></Route>
          <Route path='/Signup' element={<Signup users={users} setusers={setusers} />}></Route>
          <Route path='/Landing' element={<Landing />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
