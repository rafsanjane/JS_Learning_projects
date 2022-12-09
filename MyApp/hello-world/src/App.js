
import React, { Component } from 'react';
import './App.css';
import Book from './components/Book';

// function App() {
//   return (
//     <div className='container'>
//       <h1 className='App'> Book List</h1>
//       <Book bookName='Srikanto' writer='Shorot' />
//       <Book bookName='Abhiram' writer='Saytajit Ray' />
//     </div>

//   );
// }

class App extends Component {
  state = {
    Books: [
      { bookName: "Srikanto", writer: "Shorot" },
      { bookName: "Abhiram", writer: "Saytajit Ray" },
      { bookName: "Bounty", writer: "Saytajit" }
    ]
  }
  chnageBookState = (newBookName) => {
    this.setState({
      Books: [
        { bookName: newBookName, writer: "Shorot" },
        { bookName: "Abhiram", writer: "Saytajit Ray" },
        { bookName: newBookName, writer: "Saytajit Ray" }
      ]
    });
  }

  chnageByInput = event => {
    this.setState({
      Books: [
        { bookName: event.target.value, writer: "Shorot" },
        { bookName: "Abhiram", writer: "Saytajit Ray" },
        { bookName: "Hello", writer: "Saytajit Ray" }
      ]
    });
  }

  render() {
    console.log(this.state)
    return (
      <div className='App'>
        <h1 > Book List</h1>
        <button onClick={this.chnageBookState.bind(this, "Orokkhonia")}>Change State</button>
        <input type='text' onChange={this.chnageByInput} />
        <Book bookName={this.state.Books[0].bookName} writer={this.state.Books[0].writer}
          inputName={this.chnageByInput}
        />
        <Book bookName={this.state.Books[1].bookName} writer={this.state.Books[1].writer} />
        <Book bookName={this.state.Books[2].bookName} writer={this.state.Books[2].writer} change={this.chnageBookState.bind(this, "Hello")} />
      </div>
    )
  }
}

export default App;

