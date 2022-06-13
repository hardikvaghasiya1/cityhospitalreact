import React, { useState } from 'react';
import * as yup from 'yup';
import { Form, Formik, useFormik } from 'formik';

function Login(props) {
    let [UseType, setUseType] = useState("Login");
    let loginerror = {
        email: yup.string().email("Enter a valid Email").required("Email is reqired"),
        password: yup.string().min(6, 'Password length must be greater than 6 characters.').max(12, 'Password length must be less than 12 characters.').required("Password is Required")
    }
    let signuperror = {
        name: yup.string().required('Name is Required'),
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
            name: '',
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
    const formik = useFormik({
        initialValues: initial,
        validationSchema: schema,
        onSubmit: values => {
            if (UseType === 'Login') {
                console.log('Login Successfully');
                sessionStorage.setItem("user", '12345');
            }
            else if (UseType === 'Signup') {
                console.log('Signup Successfully');
            }
            else if (UseType === 'ForgotPassword') {
                console.log('Forgot Password Sucessfully');
            }
        },
    });
    return (
        <main>
            <section id="appointment" className="appointment">
                <div className="container">
                    <div className="section-title">
                        {
                            UseType === 'ForgetPassowrd' ? <h3 className='text-center'>Forgot Password</h3> :
                                UseType === "Login" ?
                                    <div><h2>Login</h2></div> :
                                    <div><h2>Signup</h2></div>
                        }
                        <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
                            blandit quam volutpat sollicitudin. Fusce tincidunt sit amet ex in volutpat. Donec lacinia finibus tortor.
                            Curabitur luctus eleifend odio. Phasellus placerat mi et suscipit pulvinar.</p>
                    </div>
                    <Formik value={formik}>
                        <Form onSubmit={formik.handleSubmit}>
                            {
                                UseType === 'ForgetPassword' ? (
                                    <div className="col-md-4 form-group mt-3 mt-md-0">
                                        {/* <h2 className="fw-bold text-danger">Forgot Your Password</h2>  */}
                                        <input type="email" className="form-control" name="email" placeholder="Your Email" onChange={formik.handleChange} />
                                        {formik.errors.email ? <p className="text-danger small">{formik.errors.email}</p> : null}
                                    </div>
                                ) : null
                            }

                            {
                                UseType === 'Signup' ? (
                                    <div>
                                        <div className="col-md-4 form-group">
                                            <input type="name" className="form-control" name="name" placeholder="Your Name" onChange={formik.handleChange} />
                                            {formik.errors.name ? <p className="text-danger small">{formik.errors.name}</p> : null}
                                        </div>
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
                                    <div>
                                        <div className="text-center">
                                            <button
                                                type="submit"
                                                className=""
                                                onClick={() => { setUseType("Login"); }}>
                                                Login </button></div>
                                        <p className="mt-3 cursor-pointer" onClick={() => setUseType("ForgetPassowrd")}
                                            style={{ cursor: "pointer" }}>Forgot Password</p>

                                        <button
                                            type="submit"
                                            className="mt-4"
                                            onClick={() => { setUseType("Signup"); }} >
                                            Sign Up </button>
                                    </div>)
                                    :
                                    (
                                        <div>
                                            <h6 className="fw-bold my-4" style={{ cursor: "pointer" }}>Already Have An Account ?</h6>
                                            <button type='submit' className="appointment-btn scrollto m-0">
                                                {
                                                    UseType === 'ForgetPassowrd' ? "Send OTp" : "Sign Up"
                                                }   </button>
                                            <button type='submit' className="appointment-btn scrollto m-0"
                                                onClick={() => setUseType("Login")}>Login</button>
                                        </div>
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