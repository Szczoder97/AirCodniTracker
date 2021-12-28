import OptionList from "./OptionList";
//     //  </div>

//     // <div className="row">
//     //     <div id="map" style={{ height: "380px" }} onClick={f()}/>
//     //     <OptionList/>
//     // </div>
//   );
// };

import React, { Component } from "react";
import Leaflet from "leaflet";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

Leaflet.Icon.Default.imagePath = "../node_modules/leaflet";

delete Leaflet.Icon.Default.prototype._getIconUrl;

Leaflet.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

export default class Content extends Component {
  state = {
    lat: 54.43333,
    lng: 18.55,
    zoom: 10,
    option: "usepa-aqi",
  };

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <div>
        <MapContainer
          center={position}
          zoom={this.state.zoom}
          style={{ height: "400px" }}
          className="col-9"
        >
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <TileLayer
            attribution='Air Quality Tiles &copy; <a href="http://waqi.info">waqi.info</a>'
            url={`https://tiles.waqi.info/tiles/${this.state.option}/{z}/{x}/{y}.png?token=${process.env.REACT_APP_API_TOKEN}`}
          />
        </MapContainer>

        <OptionList />
      </div>
    );
  }
}
