
<template>
  <div>
    <div id="map"></div>
  </div>
</template>

<script>
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

import "leaflet-canvas-marker";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});
L.Marker.prototype.options.icon = DefaultIcon;

export default {
  name: "mLeaflet",

  data() {
    return {
     
    };
  },
  methods: {
   
    
  

    addMap() {
      var m = L.map("map").setView([34.730936, 113.645422], 12);
      // 添加底图
      L.tileLayer(
        "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}",
        {
          maxZoom: 18,
          preferCanvas: true,
          id: "mapbox.streets",
          accessToken:
            "pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw",
          attribution:
            'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
            '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
            'Imagery © <a href="http://mapbox.com">Mapbox</a>',
        }
      ).addTo(m);

      //使用canvas模式渲染marker
      var ciLayer = L.canvasIconLayer({}).addTo(m);
      var icon = L.icon({
            iconUrl: icon,
            iconSize: [20, 18],
            iconAnchor: [10, 9]
        });
      
      for (var i = 0; i < 10000; i++) {
            var lat = 34.730936 + (Math.random() - Math.random()) * 3;
            var lng = 113.645422 + (Math.random() - Math.random()) * 3;
            var marker = L.marker([lat, lng], {
                    icon: icon
                })
                .bindPopup("I Am " + i); //绑定气泡窗口
            ciLayer.addLayer(marker);
        }

      

      
    },
  },
  mounted() {
    this.addMap();
  },
};
</script>
<style  scoped>
#map {
  width: 1567px;
  height: 750px;
}
.title {
  background-color: #1a73e8;
  font-size: 16px;
  text-align: center;
}
</style>