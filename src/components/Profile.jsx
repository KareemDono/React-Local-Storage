import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "../css/Profile.css";
import NavbarComponent from "./NavbarComponent";


const Profile = () => {
  const [isEditable, setIsEditable] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = JSON.parse(localStorage.getItem("currentUser"));



  if (!user) {
    return <div>You're not logged in.</div>;
  }

  const handleEditClick = () => {
    setIsEditable(true);
    setFirstName(user.firstName);
    setLastName(user.lastName);
    setEmail(user.email);
    setPassword(user.password);
  };

  const handleSaveClick = () => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const nameRegex = /^[a-zA-Z]*$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/;

    if (!firstName.match(nameRegex)) {
      alert("First Name should only contain letters");
      return;
    }
    if (!lastName.match(nameRegex)) {
      alert("Last Name should only contain letters");
      return;
    }
    if (!email.match(emailRegex)) {
      alert('Email should be in the format of "mail@domain.com"');
      return;
    }
    if (!password.match(passwordRegex)) {
      alert(
        "Password should be between 8-16 characters and must contain at least one number, one uppercase letter, and one lowercase letter"
      );
      return;
    }
    const users = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : [];
    const newUser = { firstName, lastName, email, password };
    const updatedUsers = users.map(user=> user.email === newUser.email ? newUser : user)
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    localStorage.setItem("currentUser", JSON.stringify(newUser));
    setIsEditable(false);
  };

  const handleCancelClick = () => {
    setIsEditable(false);
  };

  return (
    <div>
      <div>
        <NavbarComponent />
      </div>
      <div className="profile-form text-center border border-dark p-3">
        <Form>
          <Form.Group controlId="formBasicFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Edit First Name"
              disabled={!isEditable}
            />
          </Form.Group>
          <Form.Group controlId="formBasicLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Edit Last Name"
              disabled={!isEditable}
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Edit Email"
              disabled={!isEditable}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Edit Password"
              disabled={!isEditable}
            />
          </Form.Group>
          <div className="text-center">
            {isEditable ? (
              <>
                <div
                  className="save"
                  style={{ textAlign: "center", marginTop: "10px" }}
                >
                  <Button variant="success" onClick={handleSaveClick}>
                    Save
                  </Button>
                </div>
                <div
                  className="cancel"
                  style={{ textAlign: "center", marginTop: "10px" }}
                >
                  <Button variant="danger" onClick={handleCancelClick}>
                    Cancel
                  </Button>
                </div>
              </>
            ) : (
              <div
                className="edit"
                style={{ textAlign: "center", marginTop: "10px" }}
              >
                <Button variant="primary" onClick={handleEditClick}>
                  Edit
                </Button>
              </div>
            )}
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Profile;