import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
	renderContent() {
		switch (this.props.auth) {
			case null:
				return;
			case false:
				return (
					<li>
						<a href="/auth/google">Login With Google</a>
					</li>
				);
			default:
				return (
					<li>
						<a href="/api/logout">Logout</a>
					</li>
				);
		}
	}

	render() {
		return (
			<nav>
				<div className="nav-wrapper">
					<Link
						to={this.props.auth ? '/surveys' : '/'}
						className="left brand-logo"
					>
						Rated
					</Link>
					{/* hide-on-med-and-down */}
					<ul id="nav-mobile" className="right">
						{this.renderContent()}
						{/* <li>
							<a>Login With Google</a>
						</li> */}
						{/* <li>
							<a href="badges.html">Components</a>
						</li>
						<li>
							<a href="collapsible.html">JavaScript</a>
						</li> */}
					</ul>
				</div>
			</nav>
		);
	}
}

function mapStateToProps({ auth }) {
	return { auth };
}

export default connect(mapStateToProps)(Header);
