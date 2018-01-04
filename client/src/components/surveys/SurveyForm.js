import _ from 'lodash';
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';

class SurveyForm extends Component {
	renderFields() {
		return _.map(formFields, ({ name, label, dataType }, i) => {
			return (
				<div className="input-field col s12" key={i}>
					<Field
						name={name}
						label={label}
						component={SurveyField}
						dataType={dataType}
						type="text"
					/>
				</div>
			);
		});
	}
	render() {
		return (
			<form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
				<div className="row">{this.renderFields()}</div>
				<div className="row center-align">
					<div className="input-field col s6">
						<Link to="/surveys" className="red btn-flat right white-text">
							Cancel
						</Link>
					</div>
					<div className="input-field col s6">
						<button type="submit" className="green btn-flat left white-text">
							Next
							<i className="material-icons right">done</i>
						</button>
					</div>
				</div>
			</form>
		);
	}
}

function validate(values) {
	const errors = {};

	errors.recipients = validateEmails(values.recipients || '');

	_.each(formFields, ({ name, noValueError }) => {
		if (!values[name]) {
			// errors[name] = 'You must provide a value';
			errors[name] = noValueError;
		}
	});

	return errors;
}

export default reduxForm({
	validate,
	form: 'surveyForm',
	destroyOnUnmount: false
})(SurveyForm);
