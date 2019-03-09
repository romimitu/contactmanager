import React, { Component } from 'react';
// import uuid from 'uuid';
import axios from 'axios';
import { Consumer } from '../../context';
import TextInputGroup from '../layout/TextInputGroup';

class EditContacts extends Component {

	state ={
		'name':'',
		'email':'',
		'phone':'',
		errors:{}
	}

	onChange = (e) => {
		this.setState ({ [e.target.name] : e.target.value });
	}

	async componentDidMount(){
		const {id} = this.props.match.params;
		const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
		this.setState({
			name: res.data.name,
			email: res.data.email,
			phone: res.data.phone
		});
	}

	onSubmit = async (dispatch, e) => {
		e.preventDefault();
		const {name, email, phone} = this.state;

		if(name === ''){
			this.setState({errors:{name: 'Name field is required.'}});
			return;
		}
		if(email === ''){
			this.setState({errors:{email: 'Email field is required.'}});
			return;
		}
		if(phone === ''){
			this.setState({errors:{phone: 'Phone field is required.'}});
			return;
		}

		const updContact = {
			name, 
			email,
			phone
		}

		const {id} = this.props.match.params;

		const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, updContact);

		dispatch({type: 'EDIT_CONTACT', payload: res.data});

		this.setState({
			name :'',
			email:'',
			phone:'',
			errors: {}
		});
		this.props.history.push('/');
	}

	render() {
		const {name, email, phone, errors} = this.state;

		return (
			<Consumer>
				{value =>{
					const {dispatch} = value;
					return(
						<div className="card mb-3">
							<div className="card-header">Add Contact</div>
							<div className="card-body">
								<TextInputGroup
									label='Name'
									name='name'
									value={name}
									onChange={this.onChange}
									error={errors.name}
								/>
								<TextInputGroup
									label='Email'
									name='email'
									value={email}
									onChange={this.onChange}
									error={errors.email}
								/>
								<TextInputGroup
									label='Phone'
									name='phone'
									value={phone}
									onChange={this.onChange}
									error={errors.phone}
								/>
								<input type="button" className="btn btn-block btn-success" value="Add" onClick={this.onSubmit.bind(this, dispatch)} />
							</div>
						</div>
					);
				}}
			</Consumer>
		);
	}
}

export default EditContacts;