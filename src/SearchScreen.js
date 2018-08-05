import React from 'react';
import * as BooksAPI from './BooksAPI';
import Book from './Book';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class SearchScreen extends React.Component {
    static propTypes = {
        onChangeShelf: PropTypes.func.isRequired,
        library: PropTypes.array.isRequired
    }

    state= {
        query: "",
        searchResults: []
    }

    updateQuery = (query)=> {
        this.setState({query}, ()=>{
            this.searchBooks(this.state.query);
        });
    }
    
    searchBooks = (q)=> {
        if (q) {
            BooksAPI.search(q).then((res)=>{
                res.error ? this.setState({searchResults:[]}) : this.setState({searchResults: res})
            })
        } else {
            this.setState({searchResults: []})
        } 
    }
    
    render() {
        let tempShelf;
        return (
            <div className="search-books">
              <div className="search-books-bar">
                <Link to="/" className="close-search"></Link>
                <div className="search-books-input-wrapper">
                  <input 
                  type="text"
                  placeholder="Search by title or author"
                  value={this.state.query}
                  onChange={(e)=>{this.updateQuery(e.target.value)}}/>
                </div>
              </div>
              <div className="search-books-results">
                <ol className="books-grid">
                    {this.state.query && this.state.searchResults.length === 0 && <li>bummer no results found...</li> }
                    {this.state.query && this.state.searchResults.length > 0 && (
                        this.state.searchResults.map((book)=> {
                            tempShelf = this.props.library.filter((b)=>{
                                return b.id === book.id
                            })
                            return (
                            <li key={book.id}>
                                <Book
                                book={book}
                                shelf={tempShelf.length > 0 ? tempShelf[0].shelf : 'none'}
                                onChangeShelf= {this.props.onChangeShelf}
                                author={book.authors}
                                title={book.title}
                                url={book.imageLinks}
                                />
                            </li>
                            )
                    }))}
                </ol>
              </div>
            </div>
        )
    }
}

export default SearchScreen