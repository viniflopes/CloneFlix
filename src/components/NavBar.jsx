import React, {Component} from "react";

class NavBar extends Component {
    render(){
        return (
          <div>
              <ul>
                <li>
                  <a href="#">Series</a>
                </li>
                <li>
                  <a href="#">Filmes</a>
                </li>
                <li>
                  <a href="#">Em alta</a>
                </li>
              </ul>
          </div>
        );
    }
}


export default NavBar