import Content from "./Content";
import Navbar from "./NavBar";
import Footer from "./Footer";
import { Component } from "react";

class Page extends Component {
  constructor(props) {
    super(props)
    //this.handleOptionChange = this.handleOptionChange.bind(this)
    this.state = { city: "Sopot", position: [54.441554, 18.560035], option: "usepa-pm25" }
  }

  handleOptionChange = (option) => {
    this.setState({ option: option })
  };

  handleSearchSubmit = (citySearch) => {
    this.setState({ city: citySearch })
  }

  getPosition(citySearch){
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${citySearch}.json?types=place&limit=1&access_token=${process.env.REACT_APP_MAPBOX_API_TOKEN}`
    )
      .then((response) => response.json())
      .then((data) => {
        const lat = data.features[0].center[1]
        const lng = data.features[0].center[0]
        this.setState({ position: [lat, lng] })
      })
      .catch(() => {console.log("no city")})
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.state.city !== prevState.city)
      this.getPosition(this.state.city)
  }

  render() {
    return (
      <div className="container-fluid">
        <Navbar handleSearchSubmit={this.handleSearchSubmit} />
        <Content
          position={this.state.position}
          option={this.state.option}
          handleOptionChange={this.handleOptionChange}
        />

        <Footer />
      </div>
    );
  }
}

export default Page;
