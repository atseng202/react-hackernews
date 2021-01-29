import './App.css';
import React from 'react';
import StoryList from './StoryList';

/** App for HN storys 
 * state: none
 * props: none
 *  
 * App -> StoryList
 **/  
class App extends React.Component {

  render() {
    return (
      <div className="App">
        <StoryList />
      </div>
    );
  }
}

export default App;
