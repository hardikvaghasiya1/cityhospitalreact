// import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import Home from './Container/Home/Home';
import { Route, Switch } from 'react-router-dom';
import Department from './Container/Department/Department';
import Doctor from './Container/Doctor/Doctor';
import About from './Container/About/About';
import Contact from './Container/Contact/Contact';
import Appoitment from './Container/Appoitment/Appoitment';
import Medicine from './Container/Medicine/Medicine';
import Login from './Container/Login/Login';
import PublicRoute from './Container/PublicRoute/PublicRoute';
import PrivateRoute from './Container/PrivateRoute/PrivateRoute';

function App() {
  return (
    <>
    <Header/>
    <Switch>
      <PublicRoute exact path={"/"} component={Home}/>
      <PrivateRoute exact path={"/department"} component={Department}/>
      <PublicRoute exact path={"/doctor"} component={Doctor}/>
      <PublicRoute exact path={"/about"} component={About}/>
      <PublicRoute exact path={"/contact"} component={Contact}/>
      <PublicRoute exact path={"/appoitment"} component={Appoitment}/>
      <PublicRoute exact path={"/medicine"} component={Medicine}/>
      <PublicRoute restricted={true} exact path={"/login"} component={Login}/>
    </Switch>
    <Footer/>
    </>
  );
}
export default App;