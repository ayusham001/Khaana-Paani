import React, { Component } from 'react'
import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import Navbar from '../components/Navbar';
import './Restro_List.css';

export default class Restro_List extends Component {
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
    fetch("https://json-api-zfng.onrender.com/restaurant").then((res) => {
      res.json().then((result) => {
        this.setState({ list: result })
      })
    })
  }
  delete(id) {
    fetch(`https://json-api-zfng.onrender.com/restaurant/${id}`, {
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
      <div className='create'>
        <Navbar /><br />
        {
          this.state.list ?
            <div className="create_wrapper">

              <h1>Restro List</h1><br />
              <div className="table-responsive">
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Rating</th>
                      <th>Address</th>
                      <th>Operation</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      this.state.list.map((item, i) =>
                        <tr key={i}>
                          <td>{item.id}</td>
                          <td>{item.name}</td>
                          <td>{item.email}</td>
                          <td>{item.rating}</td>
                          <td>{item.address}</td>
                          <td><Link to={"/Update/" + item.id}><FontAwesomeIcon icon={faPenToSquare} color={'blue'} /></Link>&emsp;
                            <span style={{ cursor: 'pointer' }} onClick={() => this.delete(item.id)}><FontAwesomeIcon icon={faTrash} color={'red'} /></span></td>
                        </tr>
                      )
                    }
                  </tbody>
                </Table>
              </div>
            </div>
            :
            <h1>Please Wait</h1>
        }
      </div>
    )

  }
}
