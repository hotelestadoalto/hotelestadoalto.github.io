let map;

function initMap() {
  const myLatLng = { lat: 6.2042464, lng: -75.5710347};
  map = new google.maps.Map(document.getElementById("map"), {
    center: myLatLng,
    zoom: 10,
  });
  new google.maps.Marker({
    position: myLatLng,
    map,
    title: "Hello World!",
  });
}

window.initMap = initMap;