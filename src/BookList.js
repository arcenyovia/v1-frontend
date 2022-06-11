import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Book from './Book';

const BookList = () => {

	const [bookList, setBookList] = useState([]);

	useEffect(() => {
		const getBookLists = async () => {
			const book = await axios.get(
				'guestbook/list/'
			);
			setBookList(book.data);
		};
		getBookLists();
	}, []);
	return (
		<div>
			<h1>Guest Page</h1>
			<table className={"table"}>
				<thead>
				<tr>
					<th>#</th>
					<th>Id</th>
					<th>Title</th>
					<th>content</th>
					<th>Created date</th>
					<th>Updated date</th>
				</tr>
				</thead>
				{bookList.map((book) =>
					<Book key={book.id} value={book} />)}
			</table>
		</div>
	);

};

export default BookList;