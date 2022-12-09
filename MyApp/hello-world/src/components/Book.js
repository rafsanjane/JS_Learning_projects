import React from "react";

const Book = props => {



    return (
        <div className="App">
            <h2>Book: {props.bookName}</h2>
            <h2>Author: {props.writer}</h2>



        </div>
    );
}


export default Book;