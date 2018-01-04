import _ from 'lodash';

export default emails => {
	const arrayEmails = _.compact(emails.split(',').map(email => email.trim()));
	return arrayEmails.join(', ');
};
