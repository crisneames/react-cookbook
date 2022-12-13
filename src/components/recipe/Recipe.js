import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import './Recipe.css';

export const Recipe = () => {
  const localUser = localStorage.getItem('capstone_user');
  const userObject = JSON.parse(localUser);

  const { id } = useParams();

  const url = 'http://localhost:8088/recipes/' + id;
  const { error, isPending, data } = useFetch(url);

  // Delete Recipe
  const navigate = useNavigate();
  const handleDelete = () => {
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
          {userObject.id === data.userId ? (
            <button className="delete_btn" onClick={handleDelete}>
              Delete
            </button>
          ) : (
            <> </>
          )}

          {userObject.id === data.userId ? (
            <button
              className="edit_btn"
              onClick={() => navigate(`/edit/${data.id}`)}
            >
              Edit
            </button>
          ) : (
            <></>
          )}
        </>
      )}
    </div>
  );
};
