
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './component/common/Navbar';
import { Signup } from './pages/Signup';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import TopHeading from './component/common/TopHeading';

function App() {
  return (
    <div className="App">
      <TopHeading/>
      <Navbar/>  
       <Routes>
        <Route path='/signup' element={<Signup/>} />
        <Route path='/signup/login' element={<Login/>}  />
        <Route path='/login/forget-password' element={<ForgotPassword/>}  />
      </Routes>  
    </div>
  );
}

export default App;
