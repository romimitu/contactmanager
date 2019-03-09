import React from 'react';
import {Link} from 'react-router-dom';

const Header = (props) =>{
	const {branding}=props;
    return(
        <nav className="navbar navbar-expand-sm bg-info navbar-dark mb-3 py-0">
        	<div className="container">
        		<Link to="/" className="navbar-brand">{branding}</Link>
				<div>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                        <li className="nav-item"><Link to="/contact/add-contact" className="nav-link">Add Contact</Link></li>
                        <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
                    </ul>
                </div>
        	</div>
        </nav>
    )
}

Header.defaultProps={
	branding: 'My App'
}
export default Header