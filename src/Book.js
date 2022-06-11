import React from 'react';

const Book = props => {

	const { content, id, modDate, regDate, title, writer } = props.value;

	return (
		<tr>
			<th>{id}</th>
			<td>{title}</td>
			<td>{content}</td>
			<td>{writer}</td>
			<td>{regDate}</td>
			<td>{modDate}</td>
		</tr>
	);
};

export default Book;