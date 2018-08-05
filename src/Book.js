// import React from 'react'
import React, { Component } from "react";
// class Book extends React.Component {
//     render() {
//         return (
//         <div className="book">
//             <div className="book-top">
//             <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api")' }}></div>
//             <div className="book-shelf-changer">
//                 <select>
//                 <option value="move" disabled>Move to...</option>
//                 <option value="currentlyReading">Currently Reading</option>
//                 <option value="wantToRead">Want to Read</option>
//                 <option value="read">Read</option>
//                 <option value="none">None</option>
//                 </select>
//             </div>
//             </div>
//             <div className="book-title">1776</div>
//             <div className="book-authors">David McCullough</div>
//         </div>
//         )
//     }
// }

/* Book props:
    -author(s)
    -url
    -title
    ----SHELF
*/
function Book(props) {
    return (
        <div className="book">
            <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${props.url})` }}></div>
            <div className="book-shelf-changer">
                <select value={props.shelf} onChange = {(event)=>props.onChangeShelf(props.book, event.target.value, event.target)}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
            </div>
            <div className="book-title">{props.title}</div>
            <div className="book-authors">{props.author}</div>
        </div>
        )
}

// class Book extends Component {
//     render () {
//         // const book = this.props.book;
//         // console.log(book);
//             return (
//         <div className="book">
//             <div className="book-top">
//             <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.url})` }}></div>
//             <div className="book-shelf-changer">
//                 <select value={this.props.book.shelf ? this.props.book.shelf : `none`} onChange = {(event)=>this.props.onChangeShelf(this.props.book, event.target.value, event.target)}>
//                     <option value="move" disabled>Move to...</option>
//                     <option value="currentlyReading">Currently Reading</option>
//                     <option value="wantToRead">Want to Read</option>
//                     <option value="read">Read</option>
//                     <option value="none">None</option>
//                 </select>
//             </div>
//             </div>
//             <div className="book-title">{this.props.title}</div>
//             <div className="book-authors">{this.props.author}</div>
//         </div>
//         )
//     }
// }

export default Book

// function Book(props) {
//     return (
//         <div className="book">
//             <div className="book-top">
//             <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${props.url})` }}></div>
//             <div className="book-shelf-changer">
//                 <select value={props.book.shelf ? props.book.shelf : `none`} onChange = {(event)=>props.onChangeShelf(props.book, event.target.value, event.target)}>
//                     <option value="move" disabled>Move to...</option>
//                     <option value="currentlyReading">Currently Reading</option>
//                     <option value="wantToRead">Want to Read</option>
//                     <option value="read">Read</option>
//                     <option value="none">None</option>
//                 </select>
//             </div>
//             </div>
//             <div className="book-title">{props.title}</div>
//             <div className="book-authors">{props.author}</div>
//         </div>
//         )
// }