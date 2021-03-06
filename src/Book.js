import React from "react";
import PropTypes from 'prop-types';

function Book(props) {
    return (
        <div className="book">
            <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${props.url ? props.url.smallThumbnail : "./no-preview128px.png"})` }}></div>
            <div className="book-shelf-changer">
                <select value={props.shelf}
                onChange = {(event)=>props.onChangeShelf(props.book, event.target.value)}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
            </div>
            <div className="book-title">{props.title}</div>
            <div className="book-authors">{props.author ? props.author.toString() : "no author"}</div>
        </div>
        )
}

Book.propTypes = {
    book: PropTypes.object.isRequired,
    author: PropTypes.array,
    title: PropTypes.string.isRequired,
    url: PropTypes.object,
    onChangeShelf: PropTypes.func.isRequired,
    shelf: PropTypes.string.isRequired
}

export default Book