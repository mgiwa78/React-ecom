import React, { Component } from "react";
import "./sign-in.styles.scss";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

import FormInput from "../../components/form-input.component/form-input.component";
import CustonButton from "../../components/custon-button/custon-button.component";

export default class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;

    this.setState({ email: "", password: "" });

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2> I already have a account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            handlechange={this.handleChange}
            name="email"
            type="email"
            value={this.state.email}
            required
            label="Email"
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handlechange={this.handleChange}
            required
            label="Password"
          />
          <div className="buttons">
            <CustonButton type="button" value="Submit Form">
              Sign In
            </CustonButton>
            <CustonButton
              type="button"
              onClick={signInWithGoogle}
              isGoogleSignIn={true}
            >
              Sign In WIth Google
            </CustonButton>
          </div>
        </form>
      </div>
    );
  }
}
