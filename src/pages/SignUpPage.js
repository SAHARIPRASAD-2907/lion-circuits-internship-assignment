import React, { useState, useContext } from "react";
import { UserContext } from "../hooks/user.context";
import FormInput from "../components/FormInput";
import Button from "../components/Button";
import "./sign-up-page.scss";

function SignUpPage() {
  const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    address: "",
  };
  const [formFields, setFormFields] = useState(defaultFormFields);
  const {
    displayName,
    email,
    password,
    confirmPassword,
    phoneNumber,
    address,
  } = formFields;
  // const { setCurrentUser } = useContext(UserContext);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }
  };

  const handleChange = (event) => {
    console.log();
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Phone Number"
          type="text"
          required
          onChange={handleChange}
          name="phoneNumber"
          value={phoneNumber}
        />

        <FormInput
          label="Address"
          type="text"
          required
          onChange={handleChange}
          name="address"
          value={address}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button type="submit">Create Account</Button>
      </form>
    </div>
  );
}

export default SignUpPage;
