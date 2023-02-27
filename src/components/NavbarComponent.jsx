import { useState } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NavbarComponent = () => {
    const [isSignedIn, setIsSignedIn] = useState(!!localStorage.getItem('user'));
  const navigate = useNavigate();

  const handleSignOut = () => {
    setIsSignedIn(false);
    navigate('/signin');
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="/">Welcome</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto text-white">
          {isSignedIn && (
            <>
              <Nav.Link href="/profile">Profile</Nav.Link>
              <Button onClick={handleSignOut}>Sign Out</Button>
            </>
          )}
        </Nav>
        <Nav className="ml-auto text-white">
          {!isSignedIn && (
            <>
              <Nav.Link href="/signup">Sign Up</Nav.Link>
              <Nav.Link href="/signin">Sign In</Nav.Link>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
