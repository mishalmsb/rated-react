import _ from 'lodash';
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';

const FIELDS = [
	{
		name: 'title',
		label: 'Survey Title',
		dataType: 'string',
		noValueError: 'You must provide a title'
	},
	{
		name: 'subject',
		label: 'Subject Line',
		dataType: 'string',
		noValueError: 'You must provide a subject'
	},
	{
		name: 'body',
		label: 'Email Body',
		dataType: 'string',
		noValueError: 'You must provide a body'
	},
	{
		name: 'emails',
		label: 'Recipient List',
		dataType: 'multipleEmails',
		noValueError: 'You must provide recipients'
	}
];

class SurveyForm extends Component {
	renderFields() {
		return _.map(FIELDS, ({ name, label, dataType }, i) => {
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
						<button type="submit" className="teal btn-flat left white-text">
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

	errors.emails = validateEmails(values.emails || '');

	_.each(FIELDS, ({ name, noValueError }) => {
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
