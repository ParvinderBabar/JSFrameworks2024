import { useState, ChangeEvent } from "react";
import axios from "axios";
import Home from "../Home/Home"; // Make sure to import the Home component
import { FormEvent } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [token, setToken] = useState<string | null>(null);

  const logout = () => {
    setToken("");
  };
  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setIsLoading(true);
    setErrorMessage("");// make it clear

    axios
      .post("http://localhost:3000/api/login",
        {
          username: username,
          password: password
        })
      .then((response) => {
        setToken(response.data.token);
        setIsLoading(false);
        console.log(response.data.token);
      })
      .catch(() => {
        setErrorMessage("Invalid username or password");
        setIsLoading(false);
      });
  }

  if (token) {
    return <Home token={token} logout={logout} />;
  }

  return (
    <div className="container mt-2 mb-5">
      <h1>Login</h1>
      <form
        className="row row-cols-lg-auto g-3 align-items-center"
        method="POST"
        onSubmit={handleSubmit}
      >
        <div className="col">
          <label htmlFor="username" className="visually-hidden">
            Username
          </label>
          <input
            type="text"
            id="username"
            placeholder="Username"
            className="form-control mr-3"
            required={true}
            value={username}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setUsername(e.target.value)
            }
          />
        </div>
        <div className="col">
          <label htmlFor="password" className="visually-hidden">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="form-control mr-3"
            required={true}
            value={password}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
          />
        </div>
        <div className="col">
          <button type="submit" className="btn btn-primary" disabled={isLoading}>
            Login
          </button>
        </div>
      </form>
      <p className="form-text">
        <small>
          The username is <em>username</em> and the password is <em>password</em>
        </small>
      </p>
      {isLoading && <p>Loading ...</p>}
      {errorMessage && (
        <div className="alert alert-danger" role="alert">
          {errorMessage}
        </div>
      )}
    </div>
  );
}

export default App;
