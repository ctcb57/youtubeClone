import React from 'react';
import SearchBar from './components/search-bar/search-bar.component';
import './App.css';

class App extends React.Component {

  render(){
    return (
      <div className="ui container">
        <div>
          <h1 className="pageTitle">VideoHub</h1>
        </div>
        <div>
          <SearchBar />
        </div>
      </div>
    );
  }
}


export default App;
