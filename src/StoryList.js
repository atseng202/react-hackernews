import React from "react";
import Story from './Story';
import SearchForm from "./SearchForm";
import axios from "axios";

const API_BASE_URL = "https://hn.algolia.com/api/v1";

/** StoryList contains form for searching and list of Stories
 * 
 * props: none
 * 
 * state: 
 * - stories, array of story objects like, 
 *                                    {id, title, url}
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
    this.search = this.search.bind(this);
  }

  /** On mount, fetch the list of stories from API */
  async componentDidMount() {
    await this.search("react");
  }

  /* Search function makes API request and returns array of stories  */
  async search(term) {
    const result = await axios.get(`${API_BASE_URL}/search?query=${term}`);
    const stories = result.data.hits.map(h => ({ "title" : h.title, "url": h.url, "id": h.objectId }));
    this.setState({ stories });
  }

  render() {
    return (
      <div className="StoryList">
        <SearchForm search={this.search} />
        <div className="StoryList-stories">
          <ul>
            {this.state.stories.map((story) =>
              <Story
                key={story.id}
                story={story}
              />)}
          </ul>
        </div>
      </div>
    );
  }
}

export default StoryList;
