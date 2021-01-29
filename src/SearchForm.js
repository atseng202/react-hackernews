import React from "react";

/** SearchForm displays form that adds to list of stories
 *
 * props: search, fn to call from parent
 *
 * state:
 * - searchTerm: String
 *
 * Story -> SearchForm
 **/
class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /** Event handler to update searchTerm on input change, */
  handleChange(evt) {
    const { value } = evt.target;
    this.setState({
      searchTerm: value,
    });
  }

  /** Event handler to submit form */
  handleSubmit(evt) {
    evt.preventDefault();

    this.props.search(this.state.searchTerm);

    this.setState({
      searchTerm: ""
    })
  }

  render() {
    return (
      <form className="SearchForm" onSubmit={this.handleSubmit}>
        <input
          type="text"
          id="search"
          name="search"
          value={this.state.searchTerm}
          onChange={this.handleChange}
          placeholder="Search for story here!"
        />
        <button>Submit</button>
      </form>
    );
  }
}

export default SearchForm;
