import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavBar } from './components/nav/NavBar';

import { Home } from './components/home/Home';
import { Create } from './components/create/Create';
import { Search } from './components/search/Search';
import { Recipe } from './components/recipe/Recipe';
import { RecipeEdit } from './components/recipe/RecipeEdit';

function App() {
  // return <div className="App">cookbook</div>;

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/search/:searchWord" element={<Search />} />
        <Route path="/edit/:id" element={<RecipeEdit />} />
        <Route path="/recipes/:id" element={<Recipe />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
