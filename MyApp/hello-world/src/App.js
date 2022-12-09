
import React from 'react';
import './App.css';
import Book from './components/Book';

function App() {
  return (
    <div className='container'>
      <h1 className='App'> Book List</h1>
      <Book bookName='Srikanto' writer='Shorot' />
      <Book bookName='Abhiram' writer='Saytajit Ray' />
    </div>

  );
}

export default App;

