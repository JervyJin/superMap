<template>
    <div>
        <div id="map" style="margin:0 auto;width: width: 1567px;height: 750px;"></div>
    </div>
</template>

<script>
import L from "leaflet";
import HeatmapOverlay from 'heatmap.js/plugins/leaflet-heatmap'

export default {
    data () {
      return {
        heatmapLayer: null,
        map: null
      }
    },
    methods: {
      initmap: function () {
        // this.map = L.map('map', {
        //   center: [39.9788, 116.30226],
        //   zoom: 14
        // })
        //
        // L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        //   attribution: 'Haut-Gis-Org © OpenStreetMap'
        // }).addTo(this.map)

        // 数据
        var testData = {
          max: 8,
          data: [{ lat: 34.790176, lng: 113.545422, count: 3 },
            { lat: 34.730936, lng: 113.645422, count: 1 },
            { lat: 34.740936, lng: 113.615422, count: 9 },
            { lat: 34.750136, lng: 113.615412, count: 8 },
            { lat: 34.710136, lng: 113.635422, count: 7 },
            { lat: 34.750176, lng: 113.638422, count: 6 },
            { lat: 34.753116, lng: 113.615462, count: 5 }
          ]
        }
        // 配置
        var cfg = {
          'radius': 0.01,
          'maxOpacity': 0.8,
          'scaleRadius': true,
          'useLocalExtrema': true,
          latField: 'lat',
          lngField: 'lng',
          valueField: 'count'
        }
        this.heatmapLayer = new HeatmapOverlay(cfg)

        // 图层
        let baseLayer = L.tileLayer(
          'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: 'Haut-Gis-Org © OpenStreetMap'
          }
        )
        this.map = L.map('map', {
          center: [34.730936, 113.645422],
          zoom: 12
        })
        baseLayer.addTo(this.map)
        this.heatmapLayer.addTo(this.map)
        this.heatmapLayer.setData(testData)

        // L.control.scale({ maxWidth: 200, metric: true, imperial: false }).addTo(this.map)

        // let baseLayers = {
        //   'heatmapLayer': this.heatmapLayer,
        //   'OpenStreetMap': baseLayer
        // }
        // L.control.layers(baseLayers).addTo(this.map)
      }
    },
    mounted() {
        this.initmap()
    },
}
</script>

<style scoped>
  @import "https://unpkg.com/leaflet@1.0.3/dist/leaflet.css";
</style>