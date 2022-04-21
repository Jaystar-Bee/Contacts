// import * as firebase from 'firebase/app'
import { getAuth } from "firebase/auth";

// import auth from './../../../firebase'  
import { sendSignInLinkToEmail, isSignInWithEmailLink, signInWithEmailLink } from "firebase/auth";
export default {
    async sendMagicLogin(context, payload) {
        try {
            const auth = getAuth()
            const email = payload.email
            const actionCodeSettings = {
                url: 'https://localhost:8080',
                handleCodeInApp: true,
            }
            await sendSignInLinkToEmail(auth, email, actionCodeSettings)
            window.localStorage.setItem('emailForContacts', email);
        } catch (error) {
            console.log(error)
        }
    },

    async tryLogin() {
        try {
            const auth = getAuth();
            if (isSignInWithEmailLink(auth, window.location.href)) {
                let email = window.localStorage.getItem('emailForContacts');
                if (!email) {
                    email = window.prompt('Please enter your email')
                }
                const result = await signInWithEmailLink(auth, email, window.location.href)
                console
                console.log(result.user)
            }

        } catch (error) {
            console.log
        }
    }
}