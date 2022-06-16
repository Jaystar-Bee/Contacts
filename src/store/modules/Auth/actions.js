// import * as firebase from 'firebase/app'
import { getAuth } from "firebase/auth";
import router from './../../../router'

import { sendSignInLinkToEmail, isSignInWithEmailLink, signInWithEmailLink } from "firebase/auth";
export default {
    async sendMagicLogin(context, payload) {
        try {
            const auth = getAuth()
            const email = payload.email
            const actionCodeSettings = {
                url: 'https://phoneup.netlify.app/login',
                ///////////////////////////////////
                //Testing mode for the localhost
                // url: 'http://localhost:8080/login',
                handleCodeInApp: true,
            }
            await sendSignInLinkToEmail(auth, email, actionCodeSettings)
            localStorage.setItem('emailForContacts', email);
        } catch (error) {
            const err = new Error(error.message || 'Check your Internet Connection')
            throw err
        }
    },

    async tryLogin(context) {
        try {
            const auth = getAuth();
            if (isSignInWithEmailLink(auth, window.location.href)) {
                let email = localStorage.getItem('emailForContacts');
                if (!email) {
                    alert('Use the same browser to login')
                    return
                }
                const result = await signInWithEmailLink(auth, email, window.location.href)
                //remove email from localStorage
                localStorage.removeItem('emailForContacts')
                //
                // console.log(result.user)
                const expiresIn = result.user.stsTokenManager.expirationTime
                const userId = result.user.uid
                const userToken = result.user.accessToken
                localStorage.setItem('userId', userId)
                localStorage.setItem('userToken', userToken)
                localStorage.setItem("expiresIn", expiresIn)

                // console.log(result.user.uid)
                await context.commit('setUser', { userId: userId, token: userToken })
                router.replace('/friends')

            }

        } catch (error) {
            const err = new Error(error.message || 'Check your Internet Connection')
            throw err
        }
    },
    autoLogin(context) {
        const userId = localStorage.getItem('userId')
        const userToken = localStorage.getItem('userToken')
        const expiresIn = localStorage.getItem('expiresIn')

        if (new Date().getTime() > Number.parseInt(expiresIn)) {
            context.dispatch('logoutUser')
            return;
        }
        context.commit('setUser', { userId: userId, token: userToken })
    },
    logoutUser(context) {
        localStorage.removeItem('userId')
        localStorage.removeItem('userToken')
        context.commit('clearUser')
    }
}