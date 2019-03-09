import React, { Component } from 'react';

class AddContacts extends Component {

	constructor (props){
		super(props);
		this.nameInput= React.createRef();
		this.emailInput=React.createRef();
		this.phoneInput=React.createRef();

	}
	
	onSubmit = (e) => {
		e.preventDefault();
		const contact = {
			name : this.nameInput.current.value,
			email : this.emailInput.current.value,
			phone : this.phoneInput.current.value
		}
		console.log(contact);
	}
	static defaultProps ={
		name : 'romi',
		email : 'romi@mail.com',
		phone : '01762932312'
	}
	render() {
		const {name, email, phone} = this.props;
		return (
			<div className="card mb-3">
				<div className="card-header">Add Contact</div>
				<div className="card-body">
					<div className="form-group">
						<label htmlFor="name">name</label>
						<input type="text" className="form-control" name="name" defaultValue={name} ref={this.nameInput}/>
					</div>
					<div className="form-group">
						<label htmlFor="email">email</label>
						<input type="text" className="form-control" name="email" defaultValue={email} ref={this.emailInput}/>
					</div>
					<div className="form-group">
						<label htmlFor="phone">phone</label>
						<input type="text" className="form-control" name="phone" defaultValue={phone} ref={this.phoneInput}/>
					</div>
					<input type="button" className="btn btn-block btn-success" value="Add" onClick={this.onSubmit} />
				</div>
			</div>
		);
	}
}

export default AddContacts;