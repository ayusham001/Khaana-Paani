import React, { Component, useEffect } from 'react'
import { json, Navigate, withRouter } from 'react-router-dom';
import Navbar from './Navbar';
import "../App.css"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            password: '',
            loggedIn: false,
        }
    }

    login() {
        fetch('https://khaanapaani.netlify.app/login?q=' + this.state.name).then((data) => {
            data.json().then((res) => {
                console.warn(res)
                if (res.length > 0) {
                    localStorage.setItem('login', JSON.stringify(res));
                    this.setState({ loggedIn: true });
                }
                else {
                    alert('Please enter correct Username/ Password')
                }
            })
        })
            .catch((error) => console.error(error));
    }
    render() {
        if (this.state.loggedIn) {
            return <Navigate to="/list" />;
        }
        return (
            <>
                <Navbar />
                <div className="page">
                    <h1>Login</h1>
                    <form id="login" method="post" action="insert.php">
                        <div className="inputbox">
                            <input type="text" name="username" required onChange={(e) => this.setState({ name: e.target.value })} />
                            <label>Username/ E-Mail</label>
                        </div>
                        <div className="inputbox">
                            <input type="password" name="password" required onChange={(e) => this.setState({ password: e.target.value })} />
                            <label>Password</label>
                        </div>
                        <div className="button">
                            <input type="button" name="login" value="Log In" onClick={() => this.login()} />
                        </div>
                        <div className="log">
                            <p>Create New account</p>
                            <Link to="/Signup"> <Button>Signup</Button></Link>
                        </div>
                    </form>
                </div>
            </>
        )
    }
}

