import './Login.css';
import React, { useState } from 'react';


function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
      });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        // Add your login logic here, such as sending a request to your server
    
        console.log('Form data submitted:', formData);
        // You can use Axios or the Fetch API to send the data to your server for authentication
      };
    
    return (
        <div className='Login'>
            <div className='Login-Box'>
                <div className='Login-Box-Box'>
                    <h2>Login</h2>
                    <div className='Login-Info'>
                        <form onSubmit={handleSubmit}>
                            <div>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder='Enter Email'
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />
                            </div>
                            <div>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder='Enter Password'
                                value={formData.password}
                                onChange={handleInputChange}
                                required
                            />
                            </div>
                            <div>
                                <button type="submit">Login</button>
                            </div>
                        </form>
                        <a href='/signup'>Click Here To Register</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;