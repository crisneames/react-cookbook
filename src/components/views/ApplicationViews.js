import { Outlet, Route, Routes } from 'react-router-dom';
import { Recipes } from '../recipes/Recipes';

export const ApplicationViews = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <h1>Honey Rae Repair Shop</h1>
            <div>Your one-stop-shop to get all your electronics fixed</div>

            <Outlet />
          </>
        }
      >
        <Route path="recipes" element={<Recipes />} />
      </Route>
    </Routes>
  );
};
