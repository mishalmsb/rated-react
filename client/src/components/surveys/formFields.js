export default [
	{
		name: 'title',
		label: 'Campaign Title',
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
		name: 'recipients',
		label: 'Recipient List',
		dataType: 'multipleEmails',
		noValueError: 'You must provide recipients'
	}
];
