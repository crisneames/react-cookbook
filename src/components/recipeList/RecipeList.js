import { Link } from 'react-router-dom';
import './RecipeList.css';

export const RecipeList = ({ recipes }) => {
  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div key={recipe.id} className="card">
          <h3>{recipe.title}</h3>
          <p>{recipe.cookingTime} to make.</p>
          <div>{recipe.instructions.substring(0, 100)}...</div>
          <Link to={`/recipes/${recipe.id}`}>Full Recipe</Link>
        </div>
      ))}
    </div>
  );
};
