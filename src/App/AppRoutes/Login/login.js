import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { login } from '../../ReduxMaterial/StateSlicers/authSlice';
import './Login.css';

function Login() {
    const dispatch = useDispatch();

    return (
        <div className='Login'>
            <div className='Login-Box'>
                <h2>Login</h2>
                <div className='Login-Info'>
                    <Formik
                    initialValues={{email: "", password: "" }}

                    onSubmit={(formData) => {
                        console.log(formData);
                        if (formData.email === 'admin@folio3.com' && formData.password === 'adminpass'){
                            console.log('success');
                            dispatch(login());
                            document.getElementById('adminlink').click();
                        }
                    }}

                    validate={(values) => {
                        const errors = {};
                        if (!values.email) {
                          errors.email = "Required";
                        } else if (
                          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                          errors.email = "Invalid email address";
                        }
                        if (!values.password) {
                          errors.password = "Required";
                        }
                        return errors;
                    }}

                    >
                        {({ isSubmitting }) => (
                        <Form>
                            <Field
                            type="email"
                            name="email"
                            placeholder="Enter email address"
                            />
                            <ErrorMessage name="email" component="div" />

                            <Field 
                                type="password" 
                                name="password" 
                                placeholder="Enter your password"    
                            />
                            <ErrorMessage name="password" component="div" />

                            <button type="submit">
                                Login
                            </button>
                        </Form>
                        )}
                    </Formik>
                    <Link to='/signup'>Click Here To Register</Link>
                    <Link to='/admin' id='adminlink'></Link>
                </div>
            </div>
        </div> 
    )
}

export default Login;