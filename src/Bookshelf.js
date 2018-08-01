import React from 'react'
import Book from './Book'

// class Bookshelf extends React.Component {
//     render () {
//         return (
//             <div>
//                 <h1>I am a bookshelf</h1>
//             </div>
//         )
//     }
// }
/* Bookshelf props:
    -author(s)
    -url
    -title
*/
function Bookshelf(props) {
    return (
        <div className="bookshelf">
                  <h2 className="bookshelf-title">{props.shelfName}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      <li>
                          <Book />
                      </li>
                    </ol>
                  </div>
                </div>
    )
}

export default Bookshelf