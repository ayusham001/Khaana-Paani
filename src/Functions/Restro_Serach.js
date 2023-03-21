import React, { Component } from 'react'
import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import Navbar from '../components/Navbar';
export default class Restro_Serach extends Component {
  constructor() {
    super();
    this.state = {
      searchData: null,
      nodata: false,
      lastsearch:''
    }
  }
  search(key) {
    // console.warn(key)
    this.setState({lastsearch:key})
    fetch('http://localhost:3000/restaurant?q=' + key).then((data) => {
      data.json().then((res) => {
        console.warn(res)
        if (res.length > 0) {
          this.setState({ searchData: res, nodata: false })
        }
        else {
          this.setState({ nodata: true, searchData: '' })
        }
      })
    })
  }
  delete(id)
  {
    fetch(`https://khaanapaani.netlify.app/restaurant/${id}`, {
      method: 'DELETE',
    })
      .then((res) => {
        res.json().then((result) => {
          alert('Restaurant Deleted');
          this.search(this.state.lastsearch)
        });
      })
      .catch((error) => console.error(error));
  }
  render() {
    return (
      <div className='create'>
      <Navbar/><br />
        <div className='create_wrapper'>
        <h1>Serach Here</h1><br />
          <input type="text" name="search" placeholder='Enter Data' required onChange={(e) => { this.search(e.target.value) }} /><br />
          <div>
            {
              this.state.searchData ?
                <div>
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
                        this.state.searchData.map((item, i) =>

                          <tr>
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
                </div> : ""
            }
          </div>
          {
            this.state.nodata ?
              <h3>No Data Found</h3> :
              ''
          }
        </div>
      </div>
    )
  }
}
