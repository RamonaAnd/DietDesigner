import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/app/app';
import Blog from './pages/blog/blog';
import Calories from './pages/calories/calories';
import Forum from './pages/forum/forum';
import Home from './pages/home/home';
import Login from './pages/login/login';
import Recipes from './pages/recipes/recipes';
import Register from './pages/register/register';
import WeightLossDiet from './pages/weight-loss-diet/weight-loss-diet';
import MusclesBuildingDiet from './pages/muscles-building-diet/muscles-building-diet';
import DiabetesDiet from './pages/diabetes-diet/diabetes-diet';
import WeightLossRecipes from './pages/weight-loss-recipes/weight-loss-recipes';
import MusclesBuildingRecipes from './pages/muscles-building-recipes/muscles-building-recipes';
import DiabetesRecipes from './pages/diabetes-recipes/diabetes-recipes';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import RecipePage from './pages/recipe-page/recipe-page';
import Logout from './pages/logout/logout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />}>
                <Route path='/' element={<Home />} />
                <Route path='/weight-loss-diet' element={<WeightLossDiet />} />
                <Route path='/muscles-building-diet' element={<MusclesBuildingDiet />} />
                <Route path='/diabetes-diet' element={<DiabetesDiet />} />
                <Route path='/weight-loss-recipes' element={<WeightLossRecipes />} />
                <Route path='/muscles-building-recipes' element={<MusclesBuildingRecipes />} />
                <Route path='/diabetes-recipes' element={<DiabetesRecipes />} />
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
                <Route path='/logout' element={<Logout />} />
                <Route path='/blog' element={<Blog />} />
                <Route path='/recipes' element={<Recipes />} />
                <Route path='/recipes/:id' element={<RecipePage />} />
                <Route path='/calories' element={<Calories />} />
                <Route path='/forum' element={<Forum />} />
            </Route>
        </Routes>
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
        />
        <ToastContainer />
    </BrowserRouter>
);