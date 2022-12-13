import { Route, Routes } from 'react-router-dom';

import { Home } from '../home/Home';
import { Create } from '../create/Create';
import { Search } from '../search/Search';
import { Recipe } from '../recipe/Recipe';
import { RecipeEdit } from '../recipe/RecipeEdit';

export const ApplicationViews = () => {
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <>
            <Home />
          </>
        }
      ></Route>

      <Route path="/create" element={<Create />} />
      <Route path="/search/:searchWord" element={<Search />} />
      <Route path="/edit/:id" element={<RecipeEdit />} />
      <Route path="/recipes/:id" element={<Recipe />} />
    </Routes>
  );
};
