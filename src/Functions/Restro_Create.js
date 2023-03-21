import React, { Component } from 'react'

import Navbar from '../components/Navbar';
import { Button } from 'react-bootstrap';
export default class Restro_Create extends Component {
  constructor() {
    super();
    this.state = {
      name: null,
      email: null,
      rating: null,
      address: null
    }
  }
  create() {
    fetch(
      "https://khaanapaani.netlify.app/restaurant", {
      method: 'Post',
      headers:
        { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.state)
    }).then((res) => {
      res.json().then((result) => {
        alert("restaurant added")
      })
    })
  }
  render() {
    return (
      <div className='create'>
        <Navbar/>
        <br />
        <div className='create_wrapper'>
        <h1>Add Restro</h1><br />
          <input onChange={(e) => { this.setState({ name: e.target.value }) }}
            placeholder="Enter Name" /><br />
          <input type="email" onChange={(e) => { this.setState({ email: e.target.value }) }}
            placeholder="Enter Email" /><br />
          <input type="number" onChange={(e) => { this.setState({ rating: e.target.value }) }}
            placeholder="Enter Rating" /><br />
          <input onChange={(e) => { this.setState({ address: e.target.value }) }}
            placeholder="Enter Address" /><br /><br />
          <Button onClick={() => { this.create() }}>Add</Button>
        </div>
      </div>
    )
  }
}
