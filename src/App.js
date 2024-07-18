import './App.css';
import Header from './Header/Header';
import Main from './Main/Main';
import Login from './Login/login';
import Signup from './Signup/Signup';
import Cart from './Cart/Cart';
import { CartProvider } from './Context/CartContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App (){
    
    return (    
        <Router>
            <CartProvider>
                <Header />
                <Routes>
                    <Route exact path="/" element={<Main />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </CartProvider>
        </Router>
    )
}

export default App;