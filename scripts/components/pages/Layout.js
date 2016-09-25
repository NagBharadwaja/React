import React from "react";
import { Link } from "react-router";

export default class Layout extends React.Component{
	/*navigate(){
		this.props.history.pushState(null, "/");
	}*/
	navigate(){
		this.props.history.replaceState(null, "/");
	}
	render(){
		return(
			<div>
				<h1>Hello Naga</h1>
				{this.props.children}
				<Link to="archives"><button class="btn btn-success">Archives</button></Link>
				<Link to="settings">Settings</Link>
				<button onClick={this.navigate.bind(this)}>Featured</button>
			</div>
		);
	}
}

