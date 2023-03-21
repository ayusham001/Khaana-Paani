import React,{useState } from "react";
import styled from "styled-components";
import hero from "../assets/hero.jpg";
import heroDesign from "../assets/HeroDesign.png";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo, faHouse, faListUl, faPlus, faSearch, faSignIn, faSignOut } from '@fortawesome/free-solid-svg-icons'

import Login from "./Login";
import { Button } from "react-bootstrap";
export default function Hero() {
  // const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    <Login />
  }

  return (
    <Section id="home">
      <div className="background">
        <img src={hero} alt="Background Image" />
      </div>
      <div className="content">
        <div className="sale">
          <img src={heroDesign} alt="" />
          <h1>
            BIG SALE
            <span>50% OFF</span>
          </h1>
        </div>
        <div className="info">
          <h2>Khaana Paani</h2>
          <em>
          Welcome to our restaurant search website! We are dedicated to helping you find the best restaurants in your area. Simply enter your location and cuisine preferences, and we'll provide you with a list of top-rated restaurants that match your criteria. 
          <br/><Link to="/List"><Button>EXPLORE NOW</Button></Link>
          </em>
          {/* <button  onClick={handleButtonClick}>EXPLORE NOW</button> */}
          
          {/* {isOpen && <Login />} */}
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  height: 90vh;
  width: 100vw;
  position: relative;
  .background {
    height: 100%;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      filter: brightness(60%);
    }
  }
  .content {
    position: absolute;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    .sale {
      position: relative;
      left: 10%;
      img {
        height: 70vh;
      }
      h1 {
        color: white;
        position: absolute;
        top: 25vh;
        left: 15vh;
        font-size: 4.5rem;
        span {
          display: block;
          font-size: 5vw;
        }
      }
    }
    .info {
      position: absolute;
      top: 30%;
      right: 5%;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 1rem;
      h2 {
        color: #f9c74f;
        font-size: 4rem;
        letter-spacing: 0.5rem;
      }
      em {
        color: white;
        width: 50%;
        text-align: end;
        font-size: 1.2rem;
        line-height: 2rem;
        letter-spacing: 0.1rem;
      }
      button {
        padding: 1rem 2rem;
        font-size: 1.4rem;
        background-color: #fc4958;
        border: none;
        color: white;
        font-weight: 800;
        letter-spacing: 0.2rem;
        transition: 0.3s ease-in-out;
        cursor: pointer;
        &:hover {
          background-color: #f9c74f;
        }
      }
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    .content {
      flex-direction: column;
      .sale {
        display: none;
      }
      .info {
        h2 {
          font-size: 2rem;
        }
        em {
          width: 100%;
        }
        Button{
          display: none;
        }
      }
    }
  }
`;
