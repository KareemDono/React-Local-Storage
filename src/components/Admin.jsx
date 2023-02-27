import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import "../css/Admin.css";
import { FaTrash, FaEdit } from "react-icons/fa";
import Navbar from "./Navbar";

const Admin = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const usersData = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(usersData);
  }, []);

  
  const handleDeleteUser = (index) => {
    const updatedUsers = [...users];
    updatedUsers.splice(index, 1);
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  const handleEditUser = (index) => {
    const updatedUser = users[index];
    updatedUser.isEditable = true;
    const updatedUsers = [...users];
    updatedUsers.splice(index, 1, updatedUser);
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };


  const handleSaveUser = (index) => {
    const updatedUser = users[index];
    const firstName = updatedUser.firstName;
    const lastName = updatedUser.lastName;
    const email = updatedUser.email;
    const password = updatedUser.password;
    if (
      firstName &&
      lastName &&
      email &&
      password
    ) {
      if (
        /^[a-zA-Z]+$/.test(firstName) &&
        /^[a-zA-Z]+$/.test(lastName) &&
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/.test(email) &&
        /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(
          password
        )
      ) {
        const updatedUsers = [...users];
        updatedUsers.splice(index, 1, updatedUser);
        updatedUser.isEditable = false;
        setUsers(updatedUsers);
        localStorage.setItem("users", JSON.stringify(updatedUsers));
      } else {
        alert(
          "First name and Last name should only contain letters, Email should be as an email format: mail@domain.com and password should be between 8-16 characters including numbers, capital letter and small letter"
        );
      }
    }
  };

  const handleCancelUser = (index) => {
    const updatedUser = users[index];
    updatedUser.isEditable = false;
    const updatedUsers = [...users];
    updatedUsers.splice(index, 1, updatedUser);
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  const handleChange = (event, index) => {
    const updatedUser = users[index];
    const { name, value } = event.target;
    updatedUser[name] = value;
    const updatedUsers = [...users];
    updatedUsers.splice(index, 1, updatedUser);
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  return (
    <div>
      <Navbar />
      <div className="users-table">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.length > 0 &&
              users.map((user, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    {user.isEditable ? (
                      <input
                        type="text"
                        name="firstName"
                        value={user.firstName}
                        onChange={(event) => handleChange(event, index)}
                      />
                    ) : (
                      user.firstName
                    )}
                  </td>
                  <td>
                    {user.isEditable ? (
                      <input
                        type="text"
                        name="lastName"
                        value={user.lastName}
                        onChange={(event) => handleChange(event, index)}
                      />
                    ) : (
                      user.lastName
                    )}
                  </td>
                  <td>
                    {user.isEditable ? (
                      <input
                        type="text"
                        name="email"
                        value={user.email}
                        onChange={(event) => handleChange(event, index)}
                      />
                    ) : (
                      user.email
                    )}
                  </td>
                  <td>
                    {user.isEditable ? (
                      <input
                        type="password"
                        name="password"
                        value={user.password}
                        onChange={(event) => handleChange(event, index)}
                      />
                    ) : (
                      user.password
                    )}
                  </td>
                  <td>
                    <FaTrash
                      onClick={() => handleDeleteUser(index)}
                      className="fa fa-trash-o fa-2x"
                      aria-hidden="true"
                    />
                    <FaEdit
                      onClick={() => handleEditUser(index)}
                      className="fa fa-pencil-square-o fa-2x"
                      aria-hidden="true"
                    />
                    {user.isEditable && (
                      <>
                        <button onClick={() => handleSaveUser(index)}>
                          Save
                        </button>
                        <button onClick={() => handleCancelUser(index)}>
                          Cancel
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Admin;
