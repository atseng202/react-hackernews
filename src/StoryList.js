import React from "react";
import Story from './Story';
import SearchForm from "./SearchForm";


/** StoryList contains form for searching and list of Stories
 * 
 * props: none
 * 
 * state: 
 * - stories, array of story objects like,
 *    
 *
 * App -> StoryList -> Story
 *                  -> SearchForm
 **/
class StoryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stories: []
    };
  }

  /** On mount, fetch the list of stories from API */  
  async componentDidMount() {
    // TODO: HN API request

  }


  render() {
    return (
      <div className="StoryList">
        <SearchForm />
        {this.state.stories.map((story) => 
          <Story 
            key={story.id} 
            story={story}
           />)} 
      </div>
    );
  }
}

export default StoryList;
