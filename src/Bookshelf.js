import React from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

/* Bookshelf props:
    -displayName
    -books
    -onChangeShelf
        -author(s)
        -title
        -thumbnail url
*/
//{/* <Bookshelf shelfDisplayName='Currently Reading' shelf='currentlyReading' books={this.state.allBooks}/> */}
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
                        author= {book.authors ? book.authors[0]: "no author"}
                        title={book.title}
                        url={book.imageLinks ? book.imageLinks.smallThumbnail: './no-preview128px.png'}
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
    books: PropTypes.array.isRequired
}
export default Bookshelf