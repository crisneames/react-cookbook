import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { RecipeList } from '../recipeList/RecipeList';
import './Search.css';

export const Search = () => {
  //gets value of search query
  // const queryString = useLocation();
  // const queryParams = new URLSearchParams(queryString);
  // const query = queryParams.get('q');

  const { searchWord } = useParams();

  //used send request to look up query for search
  const url = 'http://localhost:8088/recipes?q=' + searchWord;

  const { error, isPending, data } = useFetch(url);

  return (
    <div>
      <h2 className="page-title">Recipes including {searchWord}</h2>
      {error && <p className="error"> {error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
};
