import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, sendPasswordResetEmail, confirmPasswordReset } from "firebase/auth";
import { auth } from "../firebase"

export const SignupApi = (data) => {
    return new Promise(function (resolve, reject) {
        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                const user = userCredential.user;
                onAuthStateChanged(auth, (user) => {
                    if (user) {
                        sendEmailVerification(user);
                        const uid = user.uid;
                    } else {
                        // User is signed out
                    }
                });
            })
            .then((emailafterverify) => {
                onAuthStateChanged(auth, (user) => {
                    console.log(user.emailVerified)
                    if (user) {
                        if (user.emailVerified) {
                            resolve({ payload: "Email Successfull" });
                        } else {
                            resolve({ payload: "Please Verify Your Email" });
                        }
                    } else {
                        reject({ payload: "somthing went wrong" });
                    }
                });

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                if (errorCode.localeCompare("auth/email-already-in-use") === 0) {
                    reject({ payload: "Email Is Already registered" });
                } else {
                    reject({ payload: errorCode })
                }
            });
    })
}

export const SigninApi = (user) => {
    return new Promise(function (resolve, reject) {
        signInWithEmailAndPassword(auth, user.email, user.password)
            .then((user) => {
                if (user.user.emailVerified) {
                    resolve({ payload: user.user })
                }
                else {
                    reject({ payload: "Email is not Verify" })
                }
            })
            .catch((error) => {
                if (error.code.localeCompare("auth/wrong-password") === 0) {
                    reject({ payload: "Password Is Wrong" })
                }
                else if (error.code.localeCompare("auth/user-not-found") === 0) {
                    reject({ payload: "Please Enter a register email" })
                }
                else {
                    reject({ payload: error.code })
                }
                // console.log(error)
            })
    })
}


export const logoutapi = () => {
    return new Promise(function (resolve, reject) {
        signOut(auth)
            .then((user) => {
                resolve({ payload: "Logout Sucessfully" })
            })
            .catch((error) => {
                reject({ payload: error.code })
            })
    })

}

export const googleloginapi = () => {
    return new Promise(function (resolve, reject) {
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                resolve({payload:result.user})
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
                reject({payload:errorCode})
            });

    })
}

export const forgotpasswordapi = (data) => {
    return new Promise(function(resolve , reject){
        sendPasswordResetEmail(auth, data.email)
        .then((user)=>{
            resolve({payload:"Check Your Register Email"})
        })
        .catch((error) => {
            reject({payload:error.code})
        })
    })
}