import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavBar } from './components/nav/NavBar';
import { Home } from './components/home/Home';
import { Create } from './components/create/Create';
import { Search } from './components/search/Search';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/search" element={<Search />} />
        {/* <Route path="/recipes/:id" element={<Recipe />} />  */}
      </Routes>
    </BrowserRouter>
  );
};
export default App;
