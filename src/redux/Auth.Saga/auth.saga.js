import { all, call, put, takeEvery} from 'redux-saga/effects'
import * as ActionTypes from '../ActionTypes'
import { emailverification, loggedoutaction, signneduser } from '../Action/auth.action';
import { forgotpasswordapi, googleloginapi, logoutapi, SigninApi, SignupApi } from '../../Comman/auth.api';
import { setAlert } from '../Action/Alert.action';
import { history } from '../../history';

   
function* SignUp(action) {
   try {
      const user = yield call(SignupApi, action.payload);
      console.log(user.payload);
      yield put(setAlert({text:user.payload , color: "success"}))
      yield put(emailverification(user));
   } catch (e) {
      console.log(e.payload);
      yield put(setAlert({text : e.payload , color: "error"})) 
      yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}


function* signIn (action) {
    try{
      const user = yield call(SigninApi, action.payload);
      yield put(signneduser(user))
      history.push('/')
      yield put(setAlert({text:"Login Sucessfully", color:"success"}))
      console.log(user)
    }
    catch(e){
      console.log(e)
      yield put(setAlert({text:e.payload, color:"error"}))
    }
}


function* logout(action){
   try{
      const user = yield call(logoutapi, action.payload);
      console.log(user)
      history.push("/")
      yield put(setAlert({text:user.payload, color:"success"}))
      yield put(loggedoutaction())
   }
   catch(e){
      console.log(e)
   }
}

function* googlelogin(action){
   try{
      const user = yield call(googleloginapi)
      yield put(signneduser(user))
      history.push('/')
      yield put(setAlert({text:"Login Sucessfully", color:"success"}))
   }
   catch(e){
      console.log(e)
      yield put(setAlert({text:e.payload, color:"error"}))
   }
}

function* forgotPassword (action) {
   try{
      const user = yield call(forgotpasswordapi, action.payload)
      history.push('/')    
      console.log(user);
      yield put(setAlert({text:user.payload, color:"success"}))
   }
   catch(e){
      yield put(setAlert({text:e.payload, color:"error"}))
   }
}


function* watchsignup() {
  yield takeEvery(ActionTypes.SIGNUP_USER, SignUp);
}

function* watchsingin() {
   yield takeEvery(ActionTypes.SIGNIN_USER,signIn)
}

function* watchlogout(){
   yield takeEvery(ActionTypes.LOGOUT_USER,logout)
}

function* watchgooglelogin(){
   yield takeEvery(ActionTypes.GOOGLE_LOGIN,googlelogin)
}

function* watchforgotpassword(){
   yield takeEvery(ActionTypes.FORGOT_PASSWORD,forgotPassword)
}

export function * authSaga(){
    yield all([
      watchsignup(),
      watchsingin(),
      watchlogout(),
      watchgooglelogin(),
      watchforgotpassword(),
   ])
}



