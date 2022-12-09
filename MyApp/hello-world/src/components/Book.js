import React from "react";
import '../stylesheets/Book.css'

const Book = props => {

    return (
        <div className="book">
            <h2 onClick={props.change}>Book: {props.bookName}</h2>
            <h2>Author: {props.writer}</h2>
            <input type='text' onChange={props.inputName} value={props.bookName} />
        </div>
    );
}


export default Book;