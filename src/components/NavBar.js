import { Component } from "react";
import SearchBar from "./SearchBar";

class Navbar extends Component {
  onSearchSubmit = (citySearch) => {
    this.props.onSearchSubmit(citySearch);
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
