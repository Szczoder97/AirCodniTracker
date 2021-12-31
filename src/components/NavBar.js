import { Component } from "react";
import SearchBar from "./SearchBar";

class Navbar extends Component {
  handleSearchSubmit = (citySearch) => {
    this.props.handleSearchSubmit(citySearch);
  };

  render() {
    return (
      <div className="row">
        <SearchBar onSearchSubmit={this.handleSearchSubmit} />
      </div>
    );
  }
}

export default Navbar;
