import React, {Component} from "react";
import MCard from "./MovieCard";

class MList extends Component {
    constructor (props) {
        super(props);
        this.state = {
            movieList: props.MovieList
        }
    }
    render(){
    const {movieList} = this.state; 
        return (
          <div>
              {movieList.map((movie) => <MCard filme = {movie}/>)}
          </div>
        );
    }
}

export default MList;
