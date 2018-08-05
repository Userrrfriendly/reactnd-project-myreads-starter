import React from 'react'
import { Link, Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Bookshelf from './Bookshelf'
import SearchScreen from './SearchScreen'

class BooksApp extends React.Component {
  state = {
    allBooks: [],
  }
  componentDidMount() {
    BooksAPI.getAll().then((res)=> {
      this.setState({allBooks: res})
    })
  }
  
  ChangeBookShelf = (book, shelf, target)=> {
    // console.log(book, shelf);

    BooksAPI.update(book,shelf).then(()=>{
      BooksAPI.getAll().then((res)=> {
        this.setState(
          {allBooks: res}
        )
      })
    })
  }
  
  render() {
    return (
      <div className="app">
        <Route exact path="/" render={()=> 
          (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <Bookshelf onChangeShelf = {this.ChangeBookShelf} shelfDisplayName='Currently Reading' shelf='currentlyReading' books={this.state.allBooks}/>
                <Bookshelf onChangeShelf = {this.ChangeBookShelf} shelfDisplayName='Want to Read' shelf='wantToRead' books={this.state.allBooks}/>
                <Bookshelf onChangeShelf = {this.ChangeBookShelf} shelfDisplayName='Read' shelf='read' books={this.state.allBooks}/>
              </div>
            </div>
            <div className="open-search">
            <Link to="/search">
            Add a book
            </Link>
            </div>
          </div>
        )
        }/>
        <Route path="/search" render={()=>
          (
            <SearchScreen onChangeShelf = {this.ChangeBookShelf} library={this.state.allBooks}/>
          )
        }/>
      </div>
    )
  }
}

export default BooksApp
