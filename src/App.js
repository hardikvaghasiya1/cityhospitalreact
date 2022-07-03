// import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import Home from './Container/Home/Home';
import { Switch } from 'react-router-dom';
import Department from './Container/Department/Department';
import Doctor from './Container/Doctor/Doctor';
import About from './Container/About/About';
import Contact from './Container/Contact/Contact';
import Appoitment from './Container/Appoitment/Appoitment';
import Medicine from './Container/Medicine/Medicine';
import Login from './Container/Login/Login';
import PublicRoute from './Container/PublicRoute/PublicRoute';
import PrivateRoute from './Container/PrivateRoute/PrivateRoute';
import Listappoitment from './Container/Appoitment/Listappoitment';
import { Provider } from 'react-redux'
import Counter from './Container/Counter/Counter';
import { configureStore } from './redux/Store';

function App() {

  let store = configureStore()


  return (
    <>
      <Header />
      <Provider store={store}>
        <Switch>
          <PublicRoute exact path={"/"} component={Home} />
          <PublicRoute exact path={"/department"} component={Department} />
          <PublicRoute exact path={"/doctor"} component={Doctor} />
          <PublicRoute exact path={"/about"} component={About} />
          <PrivateRoute exact path={"/contact"} component={Contact} />
          <PrivateRoute exact path={"/appoitment"} component={Appoitment} />
          <PrivateRoute exact path={"/listappoitment"} component={Listappoitment} />
          <PublicRoute exact path={"/medicine"} component={Medicine} />
          <PublicRoute exact path={"/counter"} component={Counter} />
          <PublicRoute restricted={true} exact path={"/login"} component={Login} />
        </Switch>
      </Provider>
      <Footer />
    </>
  );
}
export default App;