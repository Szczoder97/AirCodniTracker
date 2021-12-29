import React from "react";
import Leaflet from "leaflet";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";


const Map = ({lat, lng, zoom, option})=> {
   
    // state = {
    //     lat: 54.43333,
    //     lng: 18.55,
    //     zoom: 10,
    //     option: "usepa-aqi",
    //   };
    
Leaflet.Icon.Default.imagePath = "../node_modules/leaflet";

delete Leaflet.Icon.Default.prototype._getIconUrl;

Leaflet.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});
    const position = [lat, lng];
    
    return(
        <div className="col-md-9">
        <MapContainer
          center={position}
          zoom={zoom}
          style={{ height: "400px" }}
        >
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <TileLayer
            attribution='Air Quality Tiles &copy; <a href="http://waqi.info">waqi.info</a>'
            url={`https://tiles.waqi.info/tiles/${option}/{z}/{x}/{y}.png?token=${process.env.REACT_APP_API_TOKEN}`}
          />
        </MapContainer>
      </div>
    );

}

export default Map;