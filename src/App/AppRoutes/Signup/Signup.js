import './Signup.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function Signup() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPass: '',
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
    
        if (formData.password !== formData.confirmPass) {
            alert("Passwords don't match");
            return
        }
        // Add your Signup logic here, such as sending a request to your server
    
        console.log('Form data submitted:', formData);
        // You can use Axios or the Fetch API to send the data to your server for authentication
      };
    
    return (
        <div className='Signup'>
            <div className='Signup-Box'>
                <div className='Signup-Box-Box'>
                    <h2>Register User</h2>
                    <div className='Signup-Info'>
                        <form onSubmit={handleSubmit}>
                            <div>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder='Enter Name'
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                            />
                            </div>
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
                            <input
                                type="password"
                                name="confirmPass"
                                id="confirmPass"
                                placeholder='Confirm Password'
                                value={formData.confirmPass}
                                onChange={handleInputChange}
                                required
                            />
                            </div>
                            <div>
                                <button type="submit">Register</button>
                            </div>
                        </form>
                        <Link to='/login'>Click Here To Login</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup;