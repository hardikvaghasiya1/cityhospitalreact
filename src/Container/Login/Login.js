import React, { useState } from 'react';
import * as yup from 'yup';
import { Form, Formik, useFormik } from 'formik';
import { forgotpassword, googleloginAction, loginAction, signupaction } from '../../redux/Action/auth.action';
import { useDispatch } from 'react-redux';
import GoogleIcon from '@mui/icons-material/Google';

function Login(props) {

    const dispatch = useDispatch()

    let [UseType, setUseType] = useState("Login");
    let loginerror = {
        email: yup.string().email("Enter a valid Email").required("Email is reqired"),
        password: yup.string().min(6, 'Password length must be greater than 6 characters.').max(12, 'Password length must be less than 12 characters.').required("Password is Required")
    }
    let signuperror = {
        // name: yup.string().required('Name is Required'),
        email: yup.string().email("Enter a valid Email").required("Email is reqired"),
        password: yup.string().min(6, 'Password length must be greater than 6 characters.').max(12, 'Password length must be less than 12 characters.').required("Password is Required")
    }
    let forgoterror = {
        email: yup.string().email("Enter a valid Email").required("Email is reqired"),
    }
    let schema, initial;
    if (UseType === 'Login') {
        schema = yup.object().shape(loginerror);
        initial = {
            email: '',
            password: ''
        }
    }
    else if (UseType === 'Signup') {
        schema = yup.object().shape(signuperror);
        initial = {
            // name: '',
            email: '',
            password: ''
        }
    }
    else if (UseType === 'ForgotPassword') {
        schema = yup.object().shape(forgoterror);
        initial = {
            email: ''
        }
    }

    const signinwithgoogle = () => {
        dispatch(googleloginAction())
    }

    const formik = useFormik({
        initialValues: initial,
        validationSchema: schema,
        onSubmit: values => {
            if (UseType === 'Login') {
                console.log('Login Successfully');
                // sessionStorage.setItem("user", '12345');
                dispatch(loginAction(values));
            }
            else if (UseType === 'Signup') {
                console.log('Signup Successfully');
                dispatch(signupaction(values));
                formik.resetForm();
            }
            else if (UseType === 'ForgotPassword') {
                console.log("popopop")
                dispatch(forgotpassword(values));
            }
        },

    });
    return (
        <main>
            <section id="appointment" className="appointment">
                <div className="container">
                    <div className="section-title">
                        {
                            UseType === 'ForgotPassword' ? <h3 className='text-center'>Forgot Password</h3> :
                                UseType === "Login" ?
                                    <div><h2>Login</h2></div> :
                                    <div><h2>Signup</h2></div>
                        }
                    </div>
                    <Formik value={formik}>
                        <Form onSubmit={formik.handleSubmit}>
                            {
                                UseType === 'ForgotPassword' ? (
                                    <>
                                        <div className="col-md-4 form-group mt-3 mt-md-0">
                                            <input type="email" className="form-control" name="email" placeholder="Your Email" onChange={formik.handleChange} />
                                            {formik.errors.email ? <p className="text-danger small">{formik.errors.email}</p> : null}
                                        </div>
                                        <div className='text-center'>
                                            <button type='submit' className="appointment-btn scrollto m-0"
                                                onClick={() => setUseType("ForgotPassword")}>Verify Email</button>
                                        </div>
                                    </>
                                ) : null
                            }

                            {
                                UseType === 'Signup' ? (
                                    <div>
                                        <div className="col-md-4 form-group mt-4">
                                            <input type="email" className="form-control" name="email" placeholder="Your Email" onChange={formik.handleChange} />
                                            {formik.errors.email ? <p className="text-danger small">{formik.errors.email}</p> : null}
                                        </div>
                                        <div className="col-md-4 form-group mt-4">
                                            <input type="password" name="password" className="form-control" placeholder="Your Password" onChange={formik.handleChange} />
                                            {formik.errors.password ? <p className="text-danger small">{formik.errors.password}</p> : null}
                                        </div>
                                    </div>
                                ) : null

                            }
                            {
                                UseType === "Login" ? (
                                    <div>
                                        <div className="col-md-4 form-group mt-3 mt-md-0">
                                            <input type="email" className="form-control" name="email" placeholder="Your Email" onChange={formik.handleChange} />
                                            {formik.errors.email ? <p className="text-danger small">{formik.errors.email}</p> : null}
                                        </div>
                                        <div className="col-md-4 mt-4 form-group">
                                            <input type="password" name="password" className="form-control" placeholder="Your Password" onChange={formik.handleChange} />
                                            {formik.errors.password ? <span className="text-danger small">{formik.errors.password}</span> : null}
                                        </div>
                                    </div>
                                ) : null
                            }


                            {
                                UseType === "Login" ? (
                                    <>
                                        <div className="d-flex mt-3">
                                            <div>
                                                <button
                                                    type="submit"
                                                    className="appointment-btn m-0"
                                                    onClick={() => { setUseType("Login"); }}>
                                                    Login
                                                </button>
                                            </div>
                                            <div>
                                                <button
                                                    type="submit"
                                                    className="appointment-btn"
                                                    onClick={() => { setUseType("Signup") }} >
                                                    Sign Up
                                                </button>
                                            </div>
                                        </div>
                                        <div>
                                            <p
                                                className="cursor-pointer mt-2"
                                                onClick={() => setUseType("ForgotPassword")}
                                                style={{ cursor: "pointer" }}>
                                                Forgot Password ?
                                            </p>
                                        </div>
                                    </>
                                ) : (
                                        <>
                                            <div className='d-flex'>
                                                <button
                                                    type="submit"
                                                    className="appointment-btn mt-4"
                                                    onClick={() => { setUseType("Signup") }} >
                                                    Sign Up
                                                </button>
                                                <button
                                                    type='submit'
                                                    className="appointment-btn mt-4"
                                                    onClick={() => setUseType("Login")}>
                                                    Login
                                                </button>
                                            </div>
                                            <p
                                                className="my-4"
                                                style={{ cursor: "pointer" }}
                                                    onClick={() => { signinwithgoogle() }}>
                                                <GoogleIcon className='me-2' />Signin with Google
                                            </p>
                                        </>
                                    )
                            }

                        </Form>
                    </Formik>
                </div>
            </section>
        </main>
    );
}

export default Login;