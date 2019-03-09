import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Contacts from  './components/contact/Contacts';
import Header from  './components/layout/Header';
import About from  './components/pages/About';
import NotFound from  './components/pages/NotFound';
import AddContacts from  './components/contact/AddContacts';
import EditContacts from  './components/contact/EditContacts';
import {Provider} from  './context';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  render() {
    return (
	    <Provider>
	    	<Router>
		      <div className="App">
		        <Header branding="Contact Maneger" />
		      	<div className="container">
		      		<Switch>
		      			<Route exact path="/" component={Contacts} />
		      			<Route exact path="/contact/add-contact" component={AddContacts} />
		      			<Route exact path="/edit-contact/:id" component={EditContacts} />
		      			<Route exact path="/about" component={About} />
		      			<Route exact component={NotFound} />
			        </Switch>
		      	</div>
		      </div>
	    	</Router>
	    </Provider>
    );
  }
};

export default App;
