import React, { useState, useContext } from "react";
import { UserContext } from "../hooks/user.context";
import Button from "../components/Button";
import FormInput from "../components/FormInput";
import "./login-page.scss";
import { Navigate, useNavigate } from "react-router-dom";
import isEmail from "validator/lib/isEmail";

const defaultFormFields = {
  email: "",
  password: "",
};

const user = {
  email: "sahariprasad2000@gmail.com",
  password: "prasad2000",
};

function LoginPage() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const history = useNavigate();

  const { setCurrentUser } = useContext(UserContext);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!isEmail(email)) return alert("Enter correct email");

    if (!(password === user.password)) return alert("Passowrd not correct");

    if (email === user.email && password === user.password) {
      console.log("Working");
      setCurrentUser(true);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="text"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
        </div>
      </form>
      {/* <div className="buttons-container">
        <Button onClick={handleClick}>Sign Up</Button>
      </div> */}
    </div>
  );
}

export default LoginPage;
