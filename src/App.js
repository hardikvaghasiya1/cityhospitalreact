import logo from './logo.svg';
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

function App() {
  return (
    <>
    <Header/>
    <Switch>
      <Route exact path={"/"} component={Home}/>
      <Route exact path={"/department"} component={Department}/>
      <Route exact path={"/doctor"} component={Doctor}/>
      <Route exact path={"/about"} component={About}/>
      <Route exact path={"/contact"} component={Contact}/>
      <Route exact path={"/appoitment"} component={Appoitment}/>
      <Route exact path={"/medicine"} component={Medicine}/>
      <Route exact path={"/login"} component={Login}/>
    </Switch>
    <Footer/>
    </>
  );
}
export default App;