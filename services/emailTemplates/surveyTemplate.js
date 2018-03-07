const keys = require('../../config/keys');

module.exports = survey => {
	return `
		<html>
			<body>
				<div style="text-align: center;">
					<!-- <h3>I'd like your input!</h3> -->
					<h3>Rate us please!</h3>
					<!-- <p>Please answer the following question:</p> -->
					<p>${survey.body}</p>
					<div style="display: inline;">
						<a href="${keys.redirectDomain}/api/surveys/${survey.id}/rate1">1</a>
					</div>
					<div style="display: inline;">
						<a href="${keys.redirectDomain}/api/surveys/${survey.id}/rate2">2</a>
					</div>
					<div style="display: inline;">
						<a href="${keys.redirectDomain}/api/surveys/${survey.id}/rate3">3</a>
					</div>
					<div style="display: inline;">
						<a href="${keys.redirectDomain}/api/surveys/${survey.id}/rate4">4</a>
					</div>
					<div style="display: inline;">
						<a href="${keys.redirectDomain}/api/surveys/${survey.id}/rate5">5</a>
					</div>
				</div>
			</body>
		</html>
	`;
};
