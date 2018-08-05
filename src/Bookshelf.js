import React from 'react';
import Book from './Book';
import PropTypes from 'prop-types';

function Bookshelf(props) {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.shelfDisplayName}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                {props.books.filter((book)=>{
                    return book.shelf === props.shelf;
                }).map((book)=>{
                    return (
                        <li key={book.id}>
                            <Book 
                            book= {book}
                            shelf={book.shelf}
                            onChangeShelf= {props.onChangeShelf}
                            author= {book.authors}
                            title={book.title}
                            url={book.imageLinks}
                            />
                        </li>
                    )
                })}
                </ol>
            </div>
        </div>
    )
}

Bookshelf.propTypes = {
    books: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired,
    shelfDisplayName: PropTypes.string.isRequired,
    shelf: PropTypes.string.isRequired
}

export default Bookshelf