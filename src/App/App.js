import './App.css';
import Header from './Header/Header';
import AppRoutes from './AppRoutes/AppRoutes';
import { CartProvider } from './AppRoutes/Cart/CartContext';
import { BrowserRouter as Router } from 'react-router-dom';

function App (){
    return (    
        <Router>
            <CartProvider>
                <Header />
                <AppRoutes />
            </CartProvider>
        </Router>
    )
}

export default App;