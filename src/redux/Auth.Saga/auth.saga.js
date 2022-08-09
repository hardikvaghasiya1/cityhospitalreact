import { all, call, put, takeEvery} from 'redux-saga/effects'
import * as ActionTypes from '../ActionTypes'
import { emailverification, signneduser } from '../Action/auth.action';
import { SigninApi, SignupApi } from '../../Comman/auth.api';
import { setAlert } from '../Action/Alert.action';

   
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
      yield put(setAlert({text:"Login Sucessfully", color:"success"}))
      console.log(user)
    }
    catch(e){
      console.log(e)
      yield put(setAlert({text:e.payload, color:"error"}))
    }
}

function* watchsignup() {
  yield takeEvery(ActionTypes.SIGNUP_USER, SignUp);
}

function* watchsingin() {
   yield takeEvery(ActionTypes.SIGNIN_USER,signIn)
}

export function * authSaga(){
    yield all([
      watchsignup(),
      watchsingin()
   ])
}



