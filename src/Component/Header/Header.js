import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import ThemeContexts from '../../Context/ThemeContext';
import Alert from '../AlertComp/Alert';
import { useSelector, useDispatch } from 'react-redux';
import { logoutaction } from '../../redux/Action/auth.action';


function Header(props) {    
    const theme = useContext(ThemeContexts)
    // console.log(theme)

    const authuser = useSelector(state => state.signup)
    console.log(authuser)

    const dispatch = useDispatch()

    const handleLogout = () => {
        console.log("handlelogout")
        dispatch(logoutaction())
    } 


    return (
        <div className="main-header">
            <div id="topbar" className={`d-flex align-items-center fixed-top ${theme.theme}`}>
                <div className="container d-flex justify-content-between">
                    <div className="contact-info d-flex align-items-center">
                        <i className="bi bi-envelope" /> <a href="mailto:contact@example.com">cityhospital@example.com</a>
                        <i className="bi bi-phone" /> +91 9988776655
                    </div>
                    <div className='d-none d-lg-flex social-links align-items-center'>
                        <a href="#" className="twitter"><i className="bi bi-twitter" /></a>
                        <a href="#" className="facebook"><i className="bi bi-facebook" /></a>
                        <a href="#" className="instagram"><i className="bi bi-instagram" /></a>
                        <a href="#" className="linkedin"><i className="bi bi-linkedin" /></a>
                        <button className='change-icon'  onClick={()=> {theme.toogle_theme(theme.theme)}}>
                            Change Theme
                        </button>
                    </div>
                </div>
                
            </div>
            <header id="header" className="fixed-top">
                <div className="container d-flex align-items-center">
                    <div className="logo">
                        <NavLink to={'/'}>
                            <h1 className="logo me-auto">City</h1><br />
                            <h2 className="logo-tiny-text me-auto">Multispeciality Hospital</h2>
                        </NavLink>
                    </div>
                    <nav id="navbar" className="navbar order-last order-lg-0">
                        <ul>
                            <li><NavLink className="nav-link scrollto active" exact to={'/'}>Home</NavLink></li>
                            <li><NavLink className="nav-link scrollto" exact to={'/department'}>Department</NavLink></li>
                            <li><NavLink className="nav-link scrollto" exact to={'/doctor'}>Doctors</NavLink></li>
                            <li><NavLink className="nav-link scrollto" exact to={'/about'}>About</NavLink></li>
                            <li><NavLink className="nav-link scrollto" exact to={'/contact'}>Contact</NavLink></li>
                            <li><NavLink className="nav-link scrollto" exact to={'/counter'}>Counter</NavLink></li>
                            <li><NavLink className="nav-link scrollto" exact to={'/medicine'}>Medicine</NavLink></li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle" />
                    </nav>
                    <NavLink to={'/appoitment'} className="appointment-btn scrollto"><span className="d-none d-md-inline">Make an</span>Appointment</NavLink>

                    {
                        authuser.user === null ?
                        <NavLink to={'/login'}  className="appointment-btn scrollto"><span className="d-none d-md-inline">Login/ Signup</span></NavLink>
                        :
                        <NavLink to={'/login'} onClick={handleLogout} className="appointment-btn scrollto"><span className="d-none d-md-inline">Logout</span></NavLink>
                    }
                    <Alert/>
                </div>
            </header>
        </div>


    );
}

export default Header;