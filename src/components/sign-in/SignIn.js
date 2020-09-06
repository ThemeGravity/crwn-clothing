import React, {Component} from 'react';

import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";
import { auth, signInWithGoogle} from "../../firebase/firebase.util";

import './sign-in.styles.scss';

class SingIn extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = async e => {
    e.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);

      this.setState({
        email: '',
        password: ''
      })
    } catch (error) {
      console.error(error);
    }

  }

  handleChange = e => {
    const {value, name} = e.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            label="Email"
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            required/>
          <FormInput
            label="Password"
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            required/>
          <div className="buttons">
            <CustomButton type="submit">Sing in</CustomButton>
            <CustomButton isGoogleSignIn onClick={signInWithGoogle} type='button'>Sing in with Google</CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

export default SingIn;
