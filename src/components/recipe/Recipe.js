import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import './Recipe.css';

export const Recipe = () => {
  const { id } = useParams();
  //const url = 'http://localhost:8088/recipes/:id';
  const url = 'http://localhost:8088/recipes/' + id;
  const { error, isPending, data } = useFetch(url);

  const navigate = useNavigate();
  const handleClick = () => {
    fetch(url, {
      method: 'DELETE',
    }).then(() => {
      navigate('/');
    });
  };

  return (
    <div className="recipe">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && (
        <>
          <h2 className="page-title">{data.title}</h2>
          <p>
            <b>Cooking Time: </b>
            {data.cookingTime}
          </p>
          <p>
            <b>Ingredients:</b> {data.ingredients}
          </p>
          <p className="instructions">
            <b>Instructions:</b> {data.instructions}
          </p>
          <button className="delete_btn" onClick={handleClick}>
            Delete
          </button>
          <button className="edit_btn">Edit</button>
        </>
      )}
    </div>
  );
};
