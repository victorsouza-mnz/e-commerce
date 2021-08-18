import React from 'react'
import './signin-and-signup.styles.scss'
import SignIn from '../../components/sign-in/sign-in.component'
import SignUp from '../../components/sign-up/sign-up.component'

const SigninAndSignupPage = () => (
    <div className='sign-in-and-sign-out'>
        <SignIn/>
        <SignUp/>
    </div>
)

export default SigninAndSignupPage