import './App.css';
import Header from './Header/Header';
import AppRoutes from './AppRoutes/AppRoutes';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

function App (){
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    return (    
        <Router>
            <Header isLoggedIn={isLoggedIn}/>
            <AppRoutes isLoggedIn={isLoggedIn}/>
        </Router>
    )
}

export default App;