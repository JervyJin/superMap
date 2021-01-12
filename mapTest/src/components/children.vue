<template>
  <div>
    <div id="map"></div>
  </div>
</template>

<script>
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});
L.Marker.prototype.options.icon = DefaultIcon;

export default {
    data() {
        return {
            latlng : [
              { lat: 34.730936, lng: 113.645422 },
              { lat: 34.750936, lng: 113.645472 },
              { lat: 34.750933, lng: 113.643472 },
            ]
        }
    },
    methods: {
        addMap(){
            var m = L.map("map").setView([34.730936, 113.645422], 12);
            L.tileLayer(
              "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}",
              {
                maxZoom: 18,
                id: "mapbox.streets",
                accessToken:
                  "pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw",
                attribution:
                  'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
                  '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
                  'Imagery © <a href="http://mapbox.com">Mapbox</a>',
              }
            ).addTo(m);
      
            // 添加单个marker
            /* var marker = L.marker([34.730936, 113.645422])
              .addTo(m)
              .bindPopup("<b>中国</b><br>安徽黄山.") */
      
            // 添加多个marker
            // var latlng = [
            //   { lat: 34.730936, lng: 113.645422 },
            //   { lat: 34.750936, lng: 113.645472 },
            //   { lat: 34.750933, lng: 113.643472 },
            // ];
      
            var group = L.layerGroup().addTo(m);
        }
    },
    mounted() {
        this.addMap();
    },
}
</script>