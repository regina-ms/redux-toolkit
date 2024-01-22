import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
  } from "react-router-dom";
import Layout from "../components/Layout";
import Searching from "../pages/Searching";
import Favorites from "../pages/Favorites";
import FilmCard from "../pages/FilmCard";
import NotFound from "../pages/NotFount";

  export const router = createBrowserRouter (
    createRoutesFromElements(
        <Route path='/' element={<Layout />}>
            <Route index element={<Searching />} />
            <Route path='favorites' element={<Favorites />} />
            <Route path='/:id' element ={<FilmCard />} />
            <Route path='*' element={<NotFound />} />
        </Route>
    )
  )