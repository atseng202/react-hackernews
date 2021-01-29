import React from "react";

/** Story
 *
 * props: story, obj like:
 *    { title, url }
 *
 * state: none
 *
 * StoryList -> Story
 **/
class Story extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className="Story">
        <a href={this.props.story.url}>{this.props.story.title}</a>
      </li>
    );
  }
}

export default Story;
