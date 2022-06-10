import React from 'react';

const Book = props => {

    const {content, id, modDate, regDate, title, writer} = props.value;

    return (
        <div>
            <li>
                <ul>
                    {content}
                    <br/>
                    {id}
                    <br/>
                    {modDate}
                    <br/>
                    {regDate}
                    <br/>
                    {title}
                    <br/>
                    {writer}
                    <br/>

                </ul>
            </li>
        </div>
    );
};

export default Book;