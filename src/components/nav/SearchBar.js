import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './SearchBar.css';

export const SearchBar = () => {
  const [keyword, setKeyword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setKeyword(e.target.value);

    //navigate('/search');
    if (e.key === 'Enter') {
      navigate(`search/${keyword}`);
    }
    //console.log(keyword);
  };
  return (
    <div className="searchbar">
      <form onSubmit={handleSubmit}></form>
      <label>Search:</label>
      <input
        type="text"
        id="search"
        onKeyUp={(e) => handleSubmit(e)}
        required
      />
    </div>
  );
};
export default SearchBar;
