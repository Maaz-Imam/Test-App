import Main from './Main/Main';
import Login from './Login/login';
import Signup from './Signup/Signup';
import Cart from './Cart/Cart';
import Logout from './Logout/Logout';
import Admin from './Admin/Admin';
import { Routes, Route } from 'react-router-dom';

function AppRoutes ({ isLoggedIn }){

    return (    
        <Routes>
            <Route exact path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/admin" element={<Admin />} />
        </Routes>
    )
}

export default AppRoutes;