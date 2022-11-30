import { useState } from 'react';
import './Create.css';

export const Create = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [cookingTime, setCookingTime] = useState('');

  const options = [
    { value: '', text: '--Choose an option--' },
    { value: 'beef', text: 'Beef' },
    { value: 'chicken', text: 'Chicken' },
    { value: 'pork', text: 'Pork' },
    { value: 'seafood', text: 'Seafood' },
    { value: 'vegetarian', text: 'Vegetarian' },
  ];

  const [foodType, setFoodType] = useState(options[0].value);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, ingredients, instructions, cookingTime, foodType);
  };

  const handleChange = (event) => {
    console.log(event.target.value);
    setFoodType(event.target.value);
  };

  return (
    <div className="create">
      <h2 className="page-title">Add a New Recipe</h2>

      <form onSubmit={handleSubmit}>
        <label>
          <span>Recipe Title: </span>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        </label>

        <label>
          <span>Recipe Ingredients: </span>
          <textarea
            onChange={(e) => setIngredients(e.target.value)}
            value={ingredients}
            required
          />
        </label>

        <label>
          <span>Recipe Instructions: </span>
          <textarea
            onChange={(e) => setInstructions(e.target.value)}
            value={instructions}
            required
          />
        </label>

        <label>
          <span>Cooking Time: </span>
          <input
            type="text"
            onChange={(e) => setCookingTime(e.target.value)}
            value={cookingTime}
            required
          />
        </label>
        <label>
          <span>Food Type:</span>
        </label>
        <select value={foodType} onChange={handleChange}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.text}
            </option>
          ))}
        </select>

        <button className="btn">Submit New Recipe</button>
      </form>
    </div>
  );
};
