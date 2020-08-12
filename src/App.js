import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import './App.css';
import FoodBox from './components/foodbox/FoodBox';
import AddNewFood from './components/addnewfood/AddNewFood';
import SearchBar from './components/searchbar/SearchBar';

class App extends Component {
  state = {
    foods: foods,
    formIsSeen: false,
    filteredFood: foods,
  };

  //Quand on appele la fonction toggleFood, l'état formIsSeen change à true.
  //Étant donné que l.34 on fait un boolean avec formIsSeen, le formulaire devient visible au clic grâce à cette fonction
  toggleFood = () => {
    this.setState({ formIsSeen: !this.state.formIsSeen });
  };

  //theFood = this.state qui provient du handleSubmit de AddNewFood.js
  addNewFoodHandler = (theFood) => {
    //On fait un copie du state définie plus haut
    const foodCopy = [...this.state.foods];
    //On push dans cette copie le nouveau food
    foodCopy.push(theFood);
    //Puis on change le state par le nouveau tableau
    this.setState({
      foods: foodCopy,
    });
  };

  //theFood = toutes les values qui proviennent de filteredFood
  filteredFood = (theFood) => {
    //On filtre toutes les values pour voir si la valeur qu'on rentre dans l'input sont inclues dans chaque valeur de l'array
    const newFilteredFood = [...this.state.foods].filter((food) =>
      food.name.toLowerCase().includes(theFood.toLowerCase())
    );

    this.setState({
      filteredFood: newFilteredFood,
    });
  };

  render() {
    return (
      <div className="pt-2 pl-2">
        <button className="mb-2" onClick={this.toggleFood}>
          Add New Food
        </button>

        {/* Si formIsSeen = true, le formulaire se montre */}
        {this.state.formIsSeen ? (
          //clickToAdd est la "key" qui fait appel à une fonction addNewFoodHandler définie plus haut
          <AddNewFood clickToAdd={this.addNewFoodHandler} />
        ) : null}

        {/* Création d'une props qu'on appele dans SearchBar.js l.19 et qu'on définie l.34 */}
        <SearchBar filteredFood={this.filteredFood} />

        {this.state.filteredFood.map((food, index) => {
          //Lorsqu’on renderise avec .map() React a besoin qu’on lui assigne un key pour savoir si on souhaite modifier ou supprimer un élément
          return <FoodBox food={food} key={index} />;
        })}
      </div>
    );
  }
}

export default App;
