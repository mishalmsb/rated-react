export default [
	{
		name: 'title',
		label: 'Title',
		dataType: 'string',
		noValueError: 'You must provide a title'
	},
	{
		name: 'subject',
		label: 'Notes',
		dataType: 'string',
		noValueError: 'You must add a note'
	},
	{
		name: 'body',
		label: 'Description diplayed in the email',
		dataType: 'string',
		noValueError: 'You must provide a description'
	},
	{
		name: 'recipients',
		label: 'Recipient List',
		dataType: 'multipleEmails',
		noValueError: 'You must provide recipients'
	}
];
