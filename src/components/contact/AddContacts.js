import React, { Component } from 'react';
// import uuid from 'uuid';
import axios from 'axios';
import { Consumer } from '../../context';
import TextInputGroup from '../layout/TextInputGroup';

class AddContacts extends Component {

	state ={
		'name':'',
		'email':'',
		'phone':'',
		errors:{}
	}

	onChange = (e) => {
		this.setState ({ [e.target.name] : e.target.value });
	}
	onSubmit = async (dispatch, e) => {
		e.preventDefault();
		const {name, email, phone} = this.state;
		const newContact ={
			name,
			email,
			phone
		};
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

		const res=await axios.post('https://jsonplaceholder.typicode.com/users', newContact); 
		
		dispatch({ type: 'ADD_CONTACT', payload: res.data})

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

export default AddContacts;