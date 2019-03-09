import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const TextInputGroup =({
	label,
	value,
	type,
	name,
	onChange,
	error
}) => {
	return (
		<div className="form-group">
			<label htmlFor={name}>{label}</label>
			<input type={type} className={classnames('form-control', {'is-invalid' : error})} name={name} 
			value={value} onChange={onChange} />
			{error && <div className="invalid-feedback">{error}</div>}
		</div>
	);
};

TextInputGroup.defaultProps ={
	type : 'text'
};

TextInputGroup.propTypes ={
	label : PropTypes.string.isRequired
};

export default TextInputGroup;