import React, { Component } from 'react';
import foods from './foods.json';
import './App.css';
import FoodBox from './components/foodbox/FoodBox';
import 'bulma/css/bulma.css';

class App extends Component {
  state = {
    foods: foods,
  };

  render() {
    return (
      <div className="pt-2 pl-2">
        {this.state.foods.map((food, index) => {
          return <FoodBox food={food} />;
        })}
      </div>
    );
  }
}

export default App;
