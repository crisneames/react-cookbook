import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './SearchBar.css';

export const SearchBar = () => {
  const [keyword, setKeyword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    //navigate('/search');
    navigate(`/search?q=${keyword}`);
    //console.log(keyword);
  };
  return (
    <div className="searchbar">
      <form onSubmit={handleSubmit}></form>
      <label>Search:</label>
      <input
        type="text"
        id="search"
        onChange={(e) => setKeyword(e.target.value)}
        required
      />
    </div>
  );
};
export default SearchBar;
