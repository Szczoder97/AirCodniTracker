import { Component } from "react";
import "../style/SearchBar.css";

class SearchBar extends Component {
  state = { city: "" };

  onInputChange = (event) => {
    this.setState({ city: event.target.value });
  };

  onFormSubmit = (event) => {
    console.log("wysylam");
    //event.preventDefault();
    //this.setState({ city: event.target.value })
    this.props.onSearchSubmit(this.state.city);
  };

  render() {
    return (
      <div className="form input-group my-5 col-sm-9 col-md-6 mx-auto">
        <input
          type="search"
          id="form1"
          className="form-control"
          placeholder="Enter the city name"
          onChange={this.onInputChange}
        />
        <button
          type="submit"
          className="btn btn-primary"
          onSubmit={this.onFormSubmit}
        >
          <i className="bi bi-search mr-2"></i>
          Search
        </button>
      </div>
    );
  }
}

export default SearchBar;
