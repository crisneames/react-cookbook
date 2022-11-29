import { useFetch } from '../../hooks/useFetch';
import { RecipeList } from '../recipeList/RecipeList';

import './Home.css';

export const Home = () => {
  const { data, error, isPending } = useFetch('http://localhost:8088/recipes');

  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
};
