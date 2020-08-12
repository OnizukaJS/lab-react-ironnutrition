import React, { useState } from 'react';
import foods from '../../foods.json';
import './FoodBox.css';
import 'bulma/css/bulma.css';

const Foodbox = (props) => {
  const { name, calories, image } = props.food;
  //Ceci est un hook
  const [quantityValue, setQuantityValue] = useState(0);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setQuantityValue(value);
    console.log(quantityValue);
  };

  const handleFoodToList = () => {
    const { food, handleFoodToList } = props;
    food.quantity = parseInt(quantityValue);
    handleFoodToList(food);
    setQuantityValue(0);
  };

  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={image} alt={name} />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{name}</strong> <br />
              <small>{calories} cal</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">
            <div className="control">
              <input
                className="input"
                type="number"
                value={quantityValue}
                onChange={handleInputChange}
              />
            </div>
            <div className="control">
              <button onClick={handleFoodToList} className="button is-info">
                +
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Foodbox;
