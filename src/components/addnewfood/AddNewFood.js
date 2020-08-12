import React, { Component } from 'react';
import 'bulma/css/bulma.css';

class AddNewFood extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      calories: '',
      image: '',
    };
  }

  handleChange(event) {
    let { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    //Toutes les infos du formulaire sont gardés et on peut les "envoyer" grâce au this.state. On appele la fonction "padre" de App.js l.35 grace à props.
    this.props.clickToAdd(this.state);

    this.setState({
      title: '',
      calories: '',
      image: '',
    });
  };

  render() {
    return (
      <div className="mb-2">
        <form onSubmit={this.handleFormSubmit}>
          <label>Name:</label>
          <input
            className="mr-2 ml-2"
            type="text"
            name="name"
            placeholder="tomate"
            value={this.state.title}
            onChange={(e) => this.handleChange(e)}
          />

          <label>Number of Calories:</label>
          <input
            className="mr-2 ml-2"
            type="text"
            name="calories"
            placeholder="50"
            value={this.state.calories}
            onChange={(e) => this.handleChange(e)}
          />

          <label>image:</label>
          <input
            className="mr-2 ml-2"
            type="text"
            name="image"
            placeholder="http://www.linkoftheimage.com"
            value={this.state.image}
            onChange={(e) => this.handleChange(e)}
          />

          <input className="mr-2 ml-2" type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

export default AddNewFood;
