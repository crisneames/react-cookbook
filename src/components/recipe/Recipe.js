import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { Comments } from '../comments/Comments';
import { FaStar } from 'react-icons/fa';
import './Recipe.css';

export const Recipe = () => {
  const localUser = localStorage.getItem('capstone_user');
  const userObject = JSON.parse(localUser);

  const [ratings, setRatings] = useState(0);

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

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `http://localhost:8088/ratings?recipeId=${id}`
      );
      const ratingsArray = await response.json();
      let totalRatings = 0;
      ratingsArray.forEach((rating) => {
        totalRatings += rating.rating;
      });
      const avgRatings = totalRatings / ratingsArray.length;
      setRatings(avgRatings);
    };
    fetchData();
  }, []);

  return (
    <div className="recipe">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && (
        <>
          <h2 className="page-title">{data.title}</h2>
          {[...Array(5)].map((star, i) => {
            const ratingValue = i + 1;

            return (
              <label>
                <FaStar
                  className="star"
                  color={
                    ratingValue <= Math.round(ratings) ? '#ffc107' : '#e4e5e9'
                  }
                  size={25}
                />
              </label>
            );
          })}

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
          <Comments recipeId={id} />
        </>
      )}
    </div>
  );
};
