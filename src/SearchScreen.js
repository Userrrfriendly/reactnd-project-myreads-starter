import React from 'react'
import * as BooksAPI from './BooksAPI'
import Bookshelf from './Bookshelf';
import Book from './Book';
import { Link } from 'react-router-dom'
// import BooksApp from './App';

class SearchScreen extends React.Component {
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
                console.log(res)
                res.error ? this.setState({searchResults:[]}) : this.setState({searchResults: res})
            })
        } else {
            this.setState({searchResults: []})
        } 
    }
    
    render() {
        let tempShelf;
        let results;
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

                    {/* {(()=>{
                            if (this.state.query !== '' && this.state.searchResults.length > 0) {
                                this.state.searchResults.map((book)=> { 
                                    console.log('smth s going some')
                                    return (
                                    <li key={book.id}>
                                        <Book book={book}
                                        onChangeShelf= {this.props.onChangeShelf}
                                        author={book.authors ? book.authors[0] : 'No author'}
                                        title={book.title}
                                        url={book.imageLinks ? book.imageLinks.smallThumbnail: './no-preview128px.png'}
                                        />
                                    </li>
                                    )
                                })
                            } else if (this.state.query !== '' && this.state.searchResults.length === 0){
                                <li>Bummer no results found...</li>
                            } else {
                                <li></li>
                            }
                        })()
                    } */}
                    {this.state.query && this.state.searchResults.length === 0 && <li>Bummer no results found...</li> }
                    {this.state.query && this.state.searchResults.length > 0 && (
                        this.state.searchResults.map((book)=> {
                            tempShelf = this.props.library.filter((b)=>{
                                return b.id === book.id
                            })
                            // {tempShelf.length > 0 ? console.log(tempShelf[0].shelf) : console.log('none')}
                            return (
                            <li key={book.id}>
                                <Book book={book}
                                shelf={tempShelf.length > 0 ? tempShelf[0].shelf : 'none'}
                                onChangeShelf= {this.props.onChangeShelf}
                                author={book.authors ? book.authors[0] : 'No author'}
                                title={book.title}
                                url={book.imageLinks ? book.imageLinks.smallThumbnail: './no-preview128px.png'}
                                />
                            </li>
                            )
                    }))  }
{/* <li>Bummer no results found...</li> */}
                    {/* {this.state.searchResults.length > 0 && this.state.searchResults !== undefined  ?
                        this.state.searchResults.map((book)=> { 
                           return (
                           <li key={book.id}>
                               <Book book={book}
                               onChangeShelf= {this.props.onChangeShelf}
                               author={book.authors ? book.authors[0] : 'No author'}
                               title={book.title}
                               url={book.imageLinks ? book.imageLinks.smallThumbnail: './no-preview128px.png'}
                               />
                           </li>
                           )
                       }) : <li>No Results</li>} */}
                    
                </ol>
              </div>
            {/* <Bookshelf onChangeShelf = {this.props.ChangeBookShelf} shelfDisplayName='Search Results:' shelf={undefined} books={this.state.searchResults}/>               */}
            </div>
        )
    }
}

export default SearchScreen

// {this.state.searchResults.length > 0 && this.state.searchResults !== undefined  ?
//     this.state.searchResults.map((book)=> { 
//        return (
//        <li key={book.id}>
//            <Book book={book}
//            onChangeShelf= {this.props.onChangeShelf}
//            author={book.authors ? book.authors[0] : 'No author'}
//            title={book.title}
//            url={book.imageLinks ? book.imageLinks.smallThumbnail: './no-preview128px.png'}
//            />
//        </li>
//        )
//    }) : <li>No Results</li>}
        /*
        *SearchScreen component must recieve a ChangeBookshelf func as props?
            -if query/if searchResults.lenght !== 0 render the bookshelf
            -probably you will have to catch the error "empty query" to display something like no results sorry fuck off
        *Bookshelf must be modified so that shelf is no longer required into smth like if shelf => map else render all
        */