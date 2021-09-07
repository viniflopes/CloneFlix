import React, {Component} from "react";

class MovieDetails extends Component {
    constructor (props) {
        super(props);
        this.state = {
            movies: props.Movie,
            title:"",
            subtitle:"",
            storyline:"",
            imagePath:"",
        }
        this.SelecMovie = this.SelecMovie.bind(this)
    }
    componentDidMount(){
        this.SelecMovie()
    }

    SelecMovie() {
    const RandomNumber = Math.floor(Math.random() * 5)
    const {movies} = this.state;
    const selectedMovie = movies[RandomNumber];

    this.setState ({
        title: selectedMovie.title,
        storyline: selectedMovie.storyline,
        imagePath: selectedMovie.imagePath,
        subtitle: selectedMovie.subtitle,
    }) 

    }

    render(){
        const {
            title,
            storyline,
            imagePath,
        } = this.state;
        return (
          <div>
            <img src={imagePath} alt={title} />
            <h1>{title}</h1>
            <p>{storyline}</p>
          </div>
        );
    }
}


export default MovieDetails