import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
	const reviewFields = _.map(formFields, ({ name, label }) => {
		return (
			<div key={name} className="col s12">
				<label>{label}</label>
				<p style={{ marginTop: '3px' }}>{formValues[name]}</p>
			</div>
		);
	});
	return (
		<div>
			<h5>Please confirm your entries</h5>
			<div className="row">{reviewFields}</div>
			<div className="row center-align">
				<div className="input-field col s6">
					<button
						className="yellow darken-3 btn-flat right white-text"
						onClick={onCancel}
					>
						Back
					</button>
				</div>
				<div className="input-field col s6">
					<button
						className="green btn-flat left white-text"
						onClick={() => submitSurvey(formValues, history)}
					>
						Send Survey
						<i className="material-icons right">email</i>
					</button>
				</div>
			</div>
		</div>
	);
};

function mapStateToProps(state) {
	return {
		formValues: state.form.surveyForm.values
	};
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
