import mapboxGl from 'mapbox-gl';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';

// <link href='https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css' rel='stylesheet' />

const addLinkTag = () => {
  let head = document.head;
  let link = document.createElement('link');

  link.type = 'text/css';
  link.rel = 'stylesheet';
  link.href = 'https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css';

  head.appendChild(link);
};

addLinkTag();

const el = document.createElement('div');
el.className = 'marker';

const img = document.createElement('img');
img.src = '/img/mapanchorblack3.svg';

mapboxgl.accessToken =
  'pk.eyJ1IjoiZHJhZ2FucG9kcmFzY2FuaW4iLCJhIjoiY2tmbGg4anhqMW9mYTJ5bnZ4d3lvdzg2aSJ9.Mh7vS_hefdznNEpk5ZEbXg';

let map = new mapboxGl.Map({
  container: 'map',
  style: 'mapbox://styles/draganpodrascanin/ckflhivv11hyq19ocldbwtk1l',
  center: [17.194, 44.784],
  zoom: 14.37,
  bearing: -14.4,
  pitch: 57.0,
});

map.scrollZoom.disable();

new mapboxGl.Marker({
  element: img,
  anchor: 'bottom',
  scale: 0.8,
})
  .setLngLat([17.194123, 44.785545])
  .addTo(map);

img.style.height = '50px';
img.style.width = '50px';
