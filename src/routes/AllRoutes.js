import { Routes, Route } from "react-router-dom";
import { MovieList, MovieDetail, Search, PagesNotFound } from "../pages";

//
function AllRoutes() {
  return (
    <div className="dark:bg-darkbg">
      <Routes>
        <Route
          path="/"
          element={<MovieList apiPath="movie/now_playing" title="Home" />}
        />
        <Route path="movie/:id" element={<MovieDetail />} />
        <Route
          path="movies/popular"
          element={<MovieList apiPath="movie/popular" title="Popular" />}
        />

        <Route
          path="search"
          element={<Search apiPath="search/movie" title="Search" />}
        />
        <Route path="*" element={<PagesNotFound />} />
      </Routes>
    </div>
  );
}

export default AllRoutes;
