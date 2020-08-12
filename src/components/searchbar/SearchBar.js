import React, { Component } from 'react';
import 'bulma/css/bulma.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
    };
  }

  handleChange(event) {
    let { name, value } = event.target;
    console.log(value);
    this.setState({ [name]: value });

    //On appele la fonction filteredFood depuis le padre App.js grâce à props définie l.57
    this.props.filteredFood(value);
  }

  render() {
    return (
      <div className="mb-2">
        <form>
          <label>What are you looking for:</label>
          <input
            className="mr-2 ml-2"
            type="text"
            name="name"
            placeholder="salad"
            value={this.state.name}
            onChange={(e) => this.handleChange(e)}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
