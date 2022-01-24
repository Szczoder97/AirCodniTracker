
# Air Quality Map

Authors: Paweł Szczodrowski, Marcin Wiśniewski

## What is it used for?
The app shows a map with Real-time Air Quality Index (AQI) readings around the world.
![main view](/readme/1.PNG)

Click on the `Key` button to get the drop-down legend.
![key](/readme/2.PNG)
  

## How does it work?
The website uses Bootstrap which makes it responsive. It fetches coordinates of the searched city to get map tiles from Open Street Map and World Air Quality Index.

## Used tools
App uses:
 - [React.js](https://reactjs.org/),
 - [Bootstrap](https://getbootstrap.com/),
 - Mapbox [Geocoding API](https://docs.mapbox.com/api/search/geocoding/),
 - [React Leaflet](https://react-leaflet.js.org/)  - mapping library
- World Air Quality Index project [API](https://aqicn.org/faq/2015-09-18/map-web-service-real-time-air-quality-tile-api/).
