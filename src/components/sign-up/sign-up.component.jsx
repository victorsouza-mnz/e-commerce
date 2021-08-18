import React from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import './sign-up.styles.scss'

import {auth, createUserProfileDocument} from '../../firebase/firebase.utils'


class SignUp extends React.Component {
    constructor() {
        super()
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        const {displayName, email, password, confirmPassword} = this.state
        if(password !== confirmPassword) {
            alert("passwords don't match")
            return
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password)
            createUserProfileDocument(user, {displayName})
        } catch (error){
            console.error(error)
        }
        this.setState({
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        })
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({[name]: value})
    }

    render() {
        const {displayName, email, password, confirmPassword} = this.state
        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have a account !</h2>
                <span>Sign up with your email and password</span> 
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        name='displayName'
                        type='text'
                        value={displayName}
                        required
                        handleChange={this.handleChange}
                        label='Display Name'/>
                <FormInput
                        name='email'
                        type='email'
                        value={email}
                        required
                        handleChange={this.handleChange}
                        label='Email'/>
                <FormInput
                        name='password'
                        type='password'
                        value={password}
                        required
                        handleChange={this.handleChange}
                        label='Password'/>
                <FormInput
                        name='confirmPassword'
                        type='password'
                        value={confirmPassword}
                        required
                        handleChange={this.handleChange}
                        label='Confirm Password'/>
                <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
                
            </div>
        )
    }
}

export default SignUp