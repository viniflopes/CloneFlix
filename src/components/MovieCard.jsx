import React, {Component} from "react";

class MCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
        title: props.filme.title,
        imagePath: props.filme.imagePath,
        }
    }
    render(){
        const {title, imagePath} = this.state
        return (
          <div>
              <h1>{title}</h1>
              <img src={imagePath} alt="Filmes" />
          </div>
        );
    }
}

export default MCard;
