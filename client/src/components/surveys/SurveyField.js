import React from 'react';
import formatEmails from '../../utils/formatEmails';

export default ({
	input,
	label,
	dataType,
	inputValue,
	meta: { touched, error }
}) => {
	const formatValue = e => {
		if (dataType === 'multipleEmails') {
			return formatEmails(input.value);
		}
		return inputValue;
	};
	return (
		<div>
			<input
				{...input}
				onBlur={value => input.onBlur(formatValue())}
				className="validate"
			/>
			<label htmlFor={input.name} className="active">
				{label}
			</label>
			{touched &&
				error && (
					<div className="red-text" style={{ margin: '-15px 0 15px 0' }}>
						<span style={{ fontSize: '12px' }}>{error}</span>
					</div>
				)}
		</div>
	);
};
