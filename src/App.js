import "./App.css";
import Header from "./components/Header";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import { Fragment, useContext } from "react";
import { UserContext } from "./hooks/user.context";

function App() {
  const { createUser } = useContext(UserContext);
  return (
    <Router>
      <Routes>
        {createUser ? (
          <Route path="/" element={<Header />}>
            <Route index element={<HomePage />} />
            <Route path="profile" element={<ProfilePage />} />
          </Route>
        ) : (
          <Fragment>
            <Route path="/" element={<LoginPage />} />
            {/* <Route path="sign-up" element={<SignUpPage />} /> */}
          </Fragment>
        )}
      </Routes>
    </Router>
  );
}

export default App;
