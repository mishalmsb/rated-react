// import _ from 'lodash';
import React from 'react';
// import { connect } from 'react-redux';
// import formFields from './formFields';
// import { withRouter } from 'react-router-dom';
// import * as actions from '../../actions';

const SurveyFormReview = ({ onCancel }) => {
	return (
		<div>
			<div className="row center-align">
				<div className="input-field col s6">
					<button
						className="yellow darken-2 btn-flat right white-text"
						onClick={onCancel}
					>
						Back
					</button>
				</div>
			</div>
		</div>
	);
};

export default SurveyFormReview;
