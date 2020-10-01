import React from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "../logout-button/logout-button";
import LoginButton from "../login-button/login-button";
import "./style.css";
import logo from "../../assets/logo.png";
import Image from "react-bootstrap/Image";
import ProfileWelcome from "../ProfileWelcome/profilewelcome";

const MainNav = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <Nav className="mr-auto">
      <Image
        className="logo"
        src={logo}
        roundedCircle
        style={{ height: "auto", width: "20%" }}
      />
      {isAuthenticated && (
        <Nav.Link
          as={RouterNavLink}
          to="/"
          exact
          activeClassName="router-link-exact-active"
          style={{ color: "white" }}
        >
          Home
        </Nav.Link>
      )}
      {isAuthenticated && (
        <Nav.Link
          as={RouterNavLink}
          to="/dashboard"
          exact
          activeClassName="router-link-exact-active"
          style={{ color: "white" }}
        >
          Dashboard
        </Nav.Link>
      )}
      {isAuthenticated && (
        <NavDropdown
          title="Chat"
          id="collasible-nav-dropdown"
          style={{ color: "white" }}
        >
          <NavDropdown.Item
            as={RouterNavLink}
            to="/chat"
            exact
            activeClassName="router-link-exact-active"
            href="/chat"
          >
            Global
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.2">Battle Royal</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">MMO</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.4">Single Player</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.4">Call of Duty</NavDropdown.Item>
        </NavDropdown>
      )}
      {/* <Nav.Link
=======
const MainNav = () => (
  <Nav className="mr-auto">
    <Image
      className="logo"
      src={logo}
      roundedCircle
      style={{ height: "auto", width: "20%" }}
    />
    <Nav.Link
      as={RouterNavLink}
      to="/"
      exact
      activeClassName="router-link-exact-active"
      style={{ color: "white" }}
    >
      Home
    </Nav.Link>
    <Nav.Link
      as={RouterNavLink}
      to="/dashboard"
      exact
      activeClassName="router-link-exact-active"
      style={{ color: "white" }}
    >
      Dashboard
    </Nav.Link>
    <NavDropdown
      title="Chat"
      id="collasible-nav-dropdown"
      style={{ color: "white" }}
    >
      <NavDropdown.Item
        as={RouterNavLink}
        to="/chat"
        exact
        activeClassName="router-link-exact-active"
        href="/chat"
      >
        Global
      </NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item href="#action/3.2">Battle Royal</NavDropdown.Item>
      <NavDropdown.Item href="#action/3.3">MMO</NavDropdown.Item>
      <NavDropdown.Item href="#action/3.4">Single Player</NavDropdown.Item>
      <NavDropdown.Item href="#action/3.4">Call of Duty</NavDropdown.Item>
    </NavDropdown>
    {/* <Nav.Link

      as={RouterNavLink}
      to="/chat"
      exact
      activeClassName="router-link-exact-active"
      style={{ color: "white" }}
    >
      Chat
    </Nav.Link> */}
    </Nav>
  );
};
const AuthNav = () => {
  const { isAuthenticated } = useAuth0();
  console.log("AuthNav isAuthenticated", isAuthenticated);
  return <Nav>{isAuthenticated ? <LogoutButton /> : <LoginButton />}</Nav>;
};
const ProfileNav = () => {
  return (
    <Nav className="justify-content-end">
      <ProfileWelcome />
    </Nav>
  );
};
const NavBar = () => {
  return (
    <Navbar bg="dark" expand="md">
      <Navbar.Brand as={RouterNavLink} className="logo" to="/" />
      <MainNav />
      <ProfileNav />
      <AuthNav />
    </Navbar>
  );
};
export default NavBar;
