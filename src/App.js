import './App.css';
import Header from "./components/Header";
import movies from "./data/movieData";
import MovieDetails from "./components/MovieDetails";
import MList from './components/MovieList';

function App() {
  return (
    <div className="App">
     <Header />
     <MovieDetails Movie = { movies } />
     <MList MovieList = { movies } />
    </div>
  );
}

export default App;
