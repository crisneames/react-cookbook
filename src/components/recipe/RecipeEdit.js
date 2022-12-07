import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './Recipe.css';

export const RecipeEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [recipeType, setRecipeType] = useState([]);

  const [recipe, updateRecipe] = useState({
    title: '',
    ingredients: '',
    instructions: '',
    cookingTime: '',
    recipeType: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:8088/recipes?id=${id}`);
      const recipeArray = await response.json();
      updateRecipe(recipeArray[0]);
    };
    fetchData();
  }, [id]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:8088/recipeType`);
      const recipeTypeArray = await response.json();
      setRecipeType(recipeTypeArray);
    };
    fetchData();
  }, []);

  const handleEditRecipe = (e) => {
    e.preventDefault();

    const saveRecipe = async () => {
      const options = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(recipe),
      };
      const resp = await fetch(`http://localhost:8088/recipes/${id}`, options);

      await resp.json();
      navigate('/');
    };
    saveRecipe();
  };
  return (
    <div className="create">
      <h2 className="page-title">Update Recipe</h2>

      <form>
        <label>
          <span>Recipe Title: </span>
          <input
            type="text"
            required
            value={recipe.title}
            onChange={(e) => {
              const copy = { ...recipe };
              copy.title = e.target.value;
              updateRecipe(copy);
            }}
          />
        </label>

        <label>
          <span>Recipe Ingredients: </span>
          <textarea
            required
            value={recipe.ingredients}
            onChange={(e) => {
              const copy = { ...recipe };
              copy.ingredients = e.target.value;
              updateRecipe(copy);
            }}
          />
        </label>

        <label>
          <span>Recipe Instructions: </span>
          <textarea
            required
            value={recipe.instructions}
            onChange={(e) => {
              const copy = { ...recipe };
              copy.instructions = e.target.value;
              updateRecipe(copy);
            }}
          />
        </label>

        <label>
          <span>Cooking Time: </span>
          <input
            type="text"
            required
            value={recipe.cookingTime}
            onChange={(e) => {
              const copy = { ...recipe };
              copy.cookingTime = e.target.value;
              updateRecipe(copy);
            }}
          />
        </label>
        <label>
          <span>Food Type:</span>
        </label>
        <select
          value={recipe.recipeType}
          required
          onChange={(e) => {
            const copy = { ...recipe };
            copy.recipeType = e.target.value;
            updateRecipe(copy);
          }}
        >
          {recipeType.map((type) => {
            return (
              <option key={type.value} value={type.value}>
                {type.name}
              </option>
            );
          })}
        </select>

        <button onClick={(clickEvent) => handleEditRecipe(clickEvent)}>
          Update Recipe
        </button>
      </form>
    </div>
  );
};
