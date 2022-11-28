import { useFetch } from '../../hooks/useFetch';
import { RecipeList } from '../recipeList/RecipeList';

import './Home.css';

export const Home = () => {
  const { data, isPending, error } = useFetch('http://localhost:8080/recipes');

  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
};
