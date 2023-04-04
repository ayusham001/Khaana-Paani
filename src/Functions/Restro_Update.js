import React, { Component } from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { Button } from 'react-bootstrap';
export default function Restro_Update(props) {
  let params = useParams();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState('');
  const [address, setAddress] = useState('')
  const [id, setId] = useState('')

  useEffect(() => {
    fetch('https://json-api-zfng.onrender.com/restaurant/' + params.id)
      .then((response) => response.json())
      .then((result) => {
        setName(result.name);
        setEmail(result.email);
        setRating(result.rating);
        setAddress(result.address);
        setId(result.id);
      })
      .catch((error) => console.error(error));
  }, [params.id]);

  function update() {
    fetch(`https://json-api-zfng.onrender.com/restaurant/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, rating, address }),
    })
      .then((res) => {
        res.json().then((result) => {
          alert('Restaurant Updated');
        });
      })
      .catch((error) => console.error(error));
  }
  return (
    <div className="create">
    <Navbar/>
      <br />
      <h1>Restro Update</h1>
      <br />
      <div className="create_wrapper">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Name"
        />
        <br />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Email"
        />
        <br />
        <input
          type="text"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          placeholder="Enter Rating"
        />
        <br />
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Enter Address"
        />
        <br />
        <br />
        <Button onClick={update}>Update</Button>
      </div>
    </div>
  );
}
