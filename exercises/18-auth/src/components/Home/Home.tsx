import { useState, useEffect } from "react";
import axios from "axios";
import { IMovie } from "../../types/movies";

type HomeProps = {
  token: string;
  logout: ()=>void;
 
 
};



function Home({ token,logout }: HomeProps) {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [errorMessage, setErrorMessage] = useState("");

  
  useEffect(() => {
    // Fetch movies when the component mounts
    axios
      .get("http://localhost:3000/api/movies", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setMovies(response.data);
      })
      .catch((error) => {
        setErrorMessage("Failed to load movies");
        console.error(error);
      });
  }, [token]);
  //  const logout = () => {
  //   setToken("");
  // };

  return (
    <div className="container mt-2 mb-5">
      <div className="d-flex justify-content-between">
        <h1 className="h2">You are logged in!</h1>
        <button className="btn btn-primary" onClick={logout} >
          Logout
        </button>
      </div>
      {movies.map((movie, idx) => (
        <div className="media mb-3" key={`movie-${idx}`}>
          <img
            src={movie.poster}
            alt={movie.title}
            width="150"
            height="220.875"
            className="mr-3"
          />
          <div className="media-body">
            <h2 className="h3">{movie.title}</h2>
            <p>{movie.synopsis}</p>
          </div>
        </div>
      ))}
      {errorMessage && (
        <div className="alert alert-danger" role="alert">
          {errorMessage}
        </div>
      )}
    </div>
  );
}

export default Home;
