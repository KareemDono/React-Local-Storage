import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../css/SignIn.css";
import Navbar from "./Navbar";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const users = JSON.parse(localStorage.getItem("users"));

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      navigate("/profile");
    } else if (email === 'admin@admin.com' && password === 'admin') {
      navigate("/admin");
    } else {
      alert("Invalid Email or Password");
    }
  };

  const handleCreateAccountClick = () => {
    navigate("/signup");
  };
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="signin-form form-center-border">
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your Email"
              required
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Your Password"
              required
            />
          </Form.Group>
          <div style={{textAlign:"center",marginTop:"10px"}}>
          <Button variant="primary" type="submit" size="mid" block>
            Sign In
          </Button>
          </div>
          <div
            className="create-account"
            style={{ textAlign: "center", marginTop: "10px" }}
          >
            <Button
              variant="secondary"
              size="sm"
              onClick={handleCreateAccountClick}
            >
              Create an account
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default SignIn;