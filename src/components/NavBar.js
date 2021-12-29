import { Component } from "react";
import SearchBar from "./SearchBar";

class Navbar extends Component {
  onSearchSubmit = city => {
    console.log(city);
  };

  render() {
    return (
      <div className="row">
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default Navbar;
