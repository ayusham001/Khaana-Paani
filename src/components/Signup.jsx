import React, { Component, useEffect } from 'react'
import './Signup.css';
import { json, Navigate, withRouter } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import Navbar from './Navbar';
export default class Signup extends Component {
    constructor() {
        super();
        this.state = {
            name: null,
            password: null,
            loggedIn: false,
        }
    }
    create() {
        fetch(
            "https://json-api-zfng.onrender.com/login", {
            method: 'POST',
            headers:
                { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state)
        }).then((res) => {
            res.json().then((result) => {
                alert("Account Created")
                this.setState({ loggedIn: true });
            })
        })
    } render() {

        if (this.state.loggedIn) {
            return <Navigate to="/Login" />;
        }
        return (
            <>
                <Navbar />
                <div className="page">
                    <h1>SIGN-UP</h1>
                    <div className="inputbox">
                        <input type="text" name="username" onChange={(e) => { this.setState({ name: e.target.value }) }} required />
                        <label>Username</label>
                    </div>
                    <div className="inputbox">
                        <input type="password" name="pass" onChange={(e) => { this.setState({ password: e.target.value }) }} required onfocusout="passlen()" />
                        <label>Password</label>
                    </div>
                    <div className="button">
                        <input type="button" name="login" value="Sign up"onClick={() => { this.create() }} />
                    </div>
                    <div className="log">
                        <p>Already have an account?</p>
                        <Link to="/Login"> <Button>Log-In</Button></Link>
                    </div>
                </div>
            </>
        );
    };
}