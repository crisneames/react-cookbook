import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import './Comments.css';

export const Comments = ({ recipeId }) => {
  const localUser = localStorage.getItem('capstone_user');
  const userObject = JSON.parse(localUser);
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [comments, setComments] = useState([]);

  const [comment, setComment] = useState([]);
  const [newComment, setNewComment] = useState({
    comment: '',
    recipeId: recipeId,
    userId: userObject.id,
  });

  const { id } = useParams();

  //const navigate = useNavigate();

  const fetchComments = async () => {
    const response = await fetch(
      `http://localhost:8088/comments?recipeId=${recipeId}&_expand=user`
    );
    const commentsArray = await response.json();
    setComments(commentsArray);
  };

  useEffect(() => {
    fetchComments();
  }, [recipeId]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const comments = {
      comment: newComment.comment,
      recipeId: newComment.recipeId,
      userId: newComment.userId,
    };

    fetch('http://localhost:8088/comments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(comments),
    }).then(() => {
      //navigate('/');
      fetchComments();
      setNewComment({
        comment: '',
        recipeId: recipeId,
        userId: userObject.id,
      });
    });
  };

  console.log(id);

  return (
    <>
      <div>
        {[...Array(5)].map((star, i) => {
          const ratingValue = i + 1;

          return (
            <label>
              <input
                type="radio"
                name="rating"
                value={ratingValue}
                onClick={() => setRating(ratingValue)}
              />
              <FaStar
                className="star"
                color={ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
                size={25}
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(null)}
              />
            </label>
          );
        })}
        <form onSubmit={handleSubmit}>
          <textarea
            placeholder="leave comment"
            onChange={(e) => {
              const copy = { ...newComment };
              copy.comment = e.target.value;
              setNewComment(copy);
            }}
            value={newComment.comment}
          ></textarea>
          <button className="comment_btn">Submit</button>
        </form>

        <article className="comments">
          {comments.map((comment) => {
            return (
              <section className="comment" key={`comment--${comment.id}`}>
                <section className="userComment">{comment.comment}</section>
                <section className="userName">
                  --{comment.user.fullName}--
                </section>
              </section>
            );
          })}
        </article>
      </div>
    </>
  );
};
