import Main from './Main/Main';
import Login from './Login/login';
import Signup from './Signup/Signup';
import Cart from './Cart/Cart';
import { Routes, Route } from 'react-router-dom';

function AppRoutes (){
    return (    
        <Routes>
            <Route exact path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/cart" element={<Cart />} />
        </Routes>
    )
}

export default AppRoutes;