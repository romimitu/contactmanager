import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {Consumer} from '../../context';
import axios from 'axios';

class Contact extends Component {
  state={
    showInfo: false
  };

  showDetails=()=>{
    this.setState({
      showInfo: !this.state.showInfo
    })
  }
  deleteContact = async (dispatch, id)=>{
    axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    dispatch({type:'DELETE_CONTACT', payload:id})
  }
  render() {
    const {id, name, phone, email}=this.props.contact;
    const {showInfo}= this.state;
    return (

      <Consumer>
        {value =>{
          return(
            <div className="card card-body mb-3">
              <h4>Name: {name} 
                <i onClick={this.showDetails} className="fa fa-sort-down" style={{cursor: 'pointer'}}></i>
                <i onClick={this.deleteContact.bind(this, value.dispatch, id)} className="fa fa-times" style={{cursor: 'pointer', float:'right', color:'red'}}></i>
                <Link to={`/edit-contact/${id}`}><i className="fa fa-pencil-alt" style={{cursor: 'pointer', float:'right', color:'blue'}}></i></Link>
              </h4>
              {showInfo ? (
              <ul className="list-group">
                  <li className="list-group-item">phone: {phone}</li>
                  <li className="list-group-item">email: {email}</li>
              </ul>
              ) : null}
            </div>
          )
        }}
      </Consumer>
    )
  }
}

export default Contact
