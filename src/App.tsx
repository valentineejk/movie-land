import { useEffect, useState } from "react";
import "./App.css";
import MovieCard from "./MovieCard";
import searchIcon from "./search.svg";

const App = () => {
  //4e49d2e1

  const [movies, setMovies] = useState([]);
  const [searchTab, setSearchTab] = useState("");

  //get movies
  const searchMovies = async (title: String) => {
    //fetchapi
    const response = await fetch(`${Api_Call} &s=${title}`);

    //await
    const data = await response.json();

    //log search
    setMovies(data.Search);
  };

  const Api_Call = "http://www.omdbapi.com/?apikey=4e49d2e1";

  useEffect(() => {
    searchMovies("");
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Search For Movies"
          value={searchTab}
          onChange={(e) => setSearchTab(e.target.value)}
        />
        <img
          src={searchIcon}
          alt="search"
          onClick={() => {
            searchMovies(searchTab);
          }}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie: any) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No Movies Found!</h2>
        </div>
      )}
    </div>
  );
};

export default App;
