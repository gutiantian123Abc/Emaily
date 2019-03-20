import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Payments extends Component{
    render() {
        return (
            <StripeCheckout
                name="Nature Cryo"
                description="1 Time Package for Nature Cryo"
                amount={500}
                token={token => this.props.handleToken(token)}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
            >
                <button className="waves-effect waves-light btn-small">
                    1 Pack
                </button>
            </StripeCheckout>
        );
    }
}

export default connect(null, actions)(Payments);