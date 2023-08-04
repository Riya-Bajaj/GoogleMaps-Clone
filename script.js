// import 'https://api.mapbox.com/mapbox.js/v3.3.1/mapbox.js'

mapboxgl.accessToken =
  "pk.eyJ1Ijoicml5YWJhamFqIiwiYSI6ImNreTF6am53MzBnbTAycm1rdTNlZmdjZGgifQ.5xRFuHNqkfO0L240TEor3A"

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true
})

function successLocation(position) {
  setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
  setupMap([-2.24, 53.48])
}

function setupMap(center) {
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: center,
    zoom: 10
  })

  const nav = new mapboxgl.NavigationControl()
  map.addControl(nav)

  var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken
  })

  map.addControl(directions, "top-left")
}