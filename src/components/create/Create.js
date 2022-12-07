import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Create.css';

export const Create = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [cookingTime, setCookingTime] = useState('');
  const [userRecipeType, setUserRecipeType] = useState('');

  const navigate = useNavigate();

  const [recipeType, setRecipeType] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:8088/recipeType`);
      const recipeTypeArray = await response.json();
      setRecipeType(recipeTypeArray);
    };
    fetchData();
  }, []);

  // const options = [
  //   { value: '', text: '--Choose an option--' },
  //   { value: 'beef', text: 'Beef' },
  //   { value: 'chicken', text: 'Chicken' },
  //   { value: 'pork', text: 'Pork' },
  //   { value: 'seafood', text: 'Seafood' },
  //   { value: 'vegetarian', text: 'Vegetarian' },
  // ];

  // const [foodType, setFoodType] = useState(options[0].value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const recipe = {
      title,
      ingredients,
      instructions,
      cookingTime,
      userRecipeType,
    };

    fetch('http://localhost:8088/recipes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(recipe),
    }).then(() => {
      navigate('/');
    });
  };

  const handleChange = (event) => {
    setUserRecipeType(parseInt(event.target.value));
  };

  return (
    <>
      {/* {recipeType.length > 0 ? ( */}
      <div className="create">
        <h2 className="page-title">Add a New Recipe</h2>

        <form onSubmit={handleSubmit}>
          <label>
            <span>Recipe Title: </span>
            <input
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              defaultValue={title}
              required
            />
          </label>

          <label>
            <span>Recipe Ingredients: </span>
            <textarea
              onChange={(e) => setIngredients(e.target.value)}
              defaultValue={ingredients}
              required
            />
          </label>

          <label>
            <span>Recipe Instructions: </span>
            <textarea
              onChange={(e) => setInstructions(e.target.value)}
              defaultValue={instructions}
              required
            />
          </label>

          <label>
            <span>Cooking Time: </span>
            <input
              type="text"
              onChange={(e) => setCookingTime(e.target.value)}
              defaultValue={cookingTime}
              required
            />
          </label>
          <label>
            <span>Food Type:</span>
          </label>
          <select
            defaultValue={recipeType[0]}
            onChange={(e) => {
              handleChange(e);
            }}
          >
            <option value="">-- Choose --</option>
            {recipeType.map((type) => {
              return (
                <option key={type.id} value={type.id}>
                  {type.name}
                </option>
              );
            })}
          </select>

          <button className="btn">Submit New Recipe</button>
        </form>
      </div>
      )
    </>
  );
};
