import React, { useState, useEffect } from "react";
import styled from "styled-components";
import logo from "../assets/logo.png"
import foodYummy from "../assets/FoodYummy.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo, faHouse, faListUl, faPlus, faSearch, faSignIn, faSignOut } from '@fortawesome/free-solid-svg-icons'


import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
export default function Navbar() {
  const [navbarState, setNavbarState] = useState(false);
  const html = document.querySelector("html");
  
  const isLoggedIn = localStorage.getItem('login') !== null;
  html.addEventListener("click", () => setNavbarState(false));
  return (
    <>
      <Nav>
        <div className="brand">
        <Link to="/"><img src={logo} alt="Icon" /></Link>
          <div className="toggle">
            {navbarState ? (
              <VscChromeClose onClick={() => setNavbarState(false)} />
            ) : (
              <GiHamburgerMenu
                onClick={(e) => {
                  e.stopPropagation();
                  setNavbarState(true);
                }}
              />
            )}
          </div>
        </div>
        <ul className="links">
          <li>
          <Link to="/"><FontAwesomeIcon icon={faHouse} /> Home</Link>
          </li>
          {
            isLoggedIn ?
            <>
          <li>
          <Link to="/Create"><FontAwesomeIcon icon={faPlus} /> Create</Link>
          </li>
          <li>
          <Link to="/List"><FontAwesomeIcon icon={faListUl} /> List</Link>
          </li>
          <li>
            <Link to="/Search"><FontAwesomeIcon icon={faSearch} /> Search</Link>
          </li>
          </>
            :
              null
          }
          <li>
          <Link to="/Details"><FontAwesomeIcon icon={faCircleInfo} /> Details</Link>
          </li>
          <li>
          {
            localStorage.getItem('login') ?<Link to="/Logout"><FontAwesomeIcon icon={faSignOut} /> Logout</Link>
              :<Link to="/Login"><FontAwesomeIcon icon={faSignIn} /> Login</Link>

          }
          </li>
        </ul>
      </Nav>
      <ResponsiveNav state={navbarState} className={navbarState ? "show" : ""}>
        <ul>
          <li>
          <Link to="/" className="active"
              onClick={() => setNavbarState(false)}><FontAwesomeIcon icon={faHouse} /> Home</Link>
          </li>
          {
            isLoggedIn ?
            <>
          <li>
          <Link to="/Create"><FontAwesomeIcon icon={faPlus} /> Create</Link>
          </li>
          <li>
          <Link to="/List"><FontAwesomeIcon icon={faListUl} /> List</Link>
          </li>
          <li>
            <Link to="/Search"><FontAwesomeIcon icon={faSearch} /> Search</Link>
          </li>
          </>
            :
              null
          }
          <li>
          <Link to="/Details"><FontAwesomeIcon icon={faCircleInfo} /> Details</Link>
          </li>
          <li>
          {
            localStorage.getItem('login') ?<Link to="/Logout"><FontAwesomeIcon icon={faSignOut} /> Logout</Link>
              :<Link to="/Login"><FontAwesomeIcon icon={faSignIn} /> Login</Link>

          }
          </li>
        </ul>
      </ResponsiveNav>
    </>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4vw;
  .brand {
    img {
    width: 13rem;
      cursor: pointer;
    }
    .toggle {
      display: none;
    }
  }
  .links {
    display: flex;
    list-style-type: none;
    margin-top:1rem;
    gap: 2rem;
    li {
      a {
        color: #fc4958;
        font-weight: 600;
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 0.2rem;
        transition: 0.3s ease-in-out;
        &:hover {
          color: #f9c74f;
        }
      }
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    .brand {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      top: 0;
      .toggle {
        display: block;
      }
    }
    .links {
      display: none;
    }
  }
`;
const ResponsiveNav = styled.div`
  position: fixed;
  right: -100vw;
  top: 0;
  z-index: 10;
  background-color: white;
  height: 100vh;
  width: ${({ state }) => (state ? "60%" : "0%")};
  transition: 0.3s ease-in-out;
  display: flex;
  opacity: 0;
  visibility: hidden;
  ul {
    list-style-type: none;
    width: 100%;
    margin-top: 3rem;
    li {
      width: 100%;
      margin: 1rem 0;
      margin-left: 2rem;
      a {
        text-decoration: none;
        color: #fc4958;
        font-size: 1.2rem;
        transition: 0.1s ease-in-out;
        &:hover {
          color: #fc4958;
        }
        .active {
          color: #f9c74f;
        }
      }
      &:first-of-type {
        a {
          color: #fc4958;
          font-weight: 900;
        }
      }
    }
  }
`;
