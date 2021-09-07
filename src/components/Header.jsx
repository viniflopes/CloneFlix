import React, {Component} from "react";
import NavBar from "./NavBar";
import Search from "./Search";

class Header extends Component {
    render(){
        return (
          <div>
            <header className="Cabecalho">
            <img
                width={35}
                src="https://cdn.icon-icons.com/icons2/2699/PNG/512/netflix_logo_icon_170919.png"
                alt="logo"
              />
              <NavBar />
              <Search />
            </header>
          </div>
        );
    }
}


export default Header