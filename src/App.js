import { MoviesGrid } from "./components/MoviesGrid";

import styles from "./App.module.css"

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { MovieDetails } from "./pages/MovieDetails";

export function App() {
    return <Router>
        <header>
            <Link to ='/'><h1 className = {styles.title}>Movies</h1> </Link>
        </header>
    <div>
      <Switch>
        <Route path="/movies/:movieId">
          <MovieDetails />
        </Route>
        <Route exact path="/users">
          Usersss
        </Route>
        <Route exact path="/">
          <LandingPage />
        </Route>
      </Switch>
    </div>
  </Router>
}