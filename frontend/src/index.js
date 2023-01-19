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
import DiabetisDiet from './pages/diabetes-diet/diabetis-diet';
import WeightLossRecipe from './pages/weight-loss-recipe/weight-loss-recipe';
import MusclesBuildingRecipe from './pages/muscles-building-recipe/muscles-building-recipe';
import DiabetisRecipe from './pages/diabetes-recipe/diabetis-recipe';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />}>
                <Route path='/home' element={<Home />} />
                <Route path='/weight-loss-diet' element={<WeightLossDiet />} />
                <Route path='/muscles-building-diet' element={<MusclesBuildingDiet />} />
                <Route path='/diabetis-diet' element={<DiabetisDiet />} />
                <Route path='/weight-loss-recipe' element={<WeightLossRecipe />} />
                <Route path='/muscles-building-recipe' element={<MusclesBuildingRecipe />} />
                <Route path='/diabetis-recipe' element={<DiabetisRecipe />} />
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
                <Route path='/blog' element={<Blog />} />
                <Route path='/recipes' element={<Recipes />} />
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