import React, { Component } from 'react'
import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import Navbar from '../components/Navbar';

export default class List2 extends Component {
  constructor() {
    super();
    this.state = {
      list: null
    }
  }
  componentDidMount() {
    this.getdata()
  }
  getdata() {
    fetch("http://localhost:3000/restaurant").then((res) => {
      res.json().then((result) => {
        this.setState({ list: result })
      })
    })
  }
  delete(id) {
    fetch(`http://localhost:3000/restaurant/${id}`, {
      method: 'DELETE',
    })
      .then((res) => {
        res.json().then((result) => {
          alert('Restaurant Deleted');
          this.getdata()
        });
      })
      .catch((error) => console.error(error));
  }
  render() {
    console.warn(this.state.list)
    return (
      <div className='create' style={{ textAlign: 'center' }}>
        <Navbar /><br />
        {
          this.state.list ?
            <div className="create_wrapper">

              <h1>Restro List</h1><br />
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Rating</th>
                    <th>Address</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    this.state.list.map((item, i) =>
                      <tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.rating}</td>
                        <td>{item.address}</td>
                        </tr>
                    )
                  }
                </tbody>
              </Table>
            </div>
            :
            <p>Please Wait</p>
        }
      </div>
    )

  }
}
