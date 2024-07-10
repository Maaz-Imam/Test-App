import './App.css';
import Header from './Header/Header';
import Main from './Main/Main';
import Login from './Login/login';
import Signup from './Signup/Signup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App (){
    return (    
        <Router>
            <Header />
            <Routes>
                <Route exact path="/" element={<Main />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/cart" element={<Login />} />
            </Routes>
        </Router>
    )
}

export default App;