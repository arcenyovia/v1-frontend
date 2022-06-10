import React, {useEffect, useState} from 'react';
import axios from "axios";
import Book from "./Book";

const BookList = () => {

    const [bookList, setBookList] = useState([]);

    useEffect(() => {
        const getBookLists = async () => {
            const book = await axios.get(
                "guestbook/list/"
            );
            setBookList(book.data);
        };
        getBookLists();
    }, [])
    return (
        <div>
            {bookList.map((book) =>
            <Book key={book.id}
                value={book}/>
            )}
        </div>
    );

};

export default BookList;