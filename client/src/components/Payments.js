import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Payments extends Component {
	onToken = token => {
		console.log(token);
		this.props.handleToken(token);
	};
	render() {
		return (
			<StripeCheckout
				name="Emaily"
				description="$5 from 5 survey credits"
				amount={500}
				token={this.onToken}
				stripeKey={process.env.REACT_APP_STRIPE_KEY}
			>
				<button className="btn">Add Credits</button>
			</StripeCheckout>
		);
	}
}

export default connect(null, actions)(Payments);
