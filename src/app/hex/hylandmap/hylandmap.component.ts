import { Component, OnInit } from '@angular/core';

import { tileLayer, latLng, CRS, marker, FeatureGroup, featureGroup, DrawEvents, LatLngBounds, Transformation, FitBoundsOptions, Util, Polyline, LatLng } from 'leaflet';

@Component({
  selector: 'app-hylandmap',
  templateUrl: './hylandmap.component.html',
  styleUrls: ['./hylandmap.component.css']
})
export class HylandmapComponent implements OnInit {
  drawnItems: FeatureGroup = featureGroup();

  constructor() { }

  leafoptions = {
    layers: [
      tileLayer('/assets/leaflets/hexmaps/1_hyland/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...', tileSize: 1024 })
    ],
    crs:  Util.extend({}, CRS.Simple, {
      transformation: new Transformation(0.000585, 0.000585, 0.000585, 0.000585)
    }),
    zoom: 0,
    minZoom: 0,
    maxZoom: 1,
    center: latLng(961677, 1029196),
    noWrap: true,
    attributionControl: false
  };

  ngOnInit(): void {
  }

  onClick(mouseEvent: L.LeafletMouseEvent) {
		console.log(mouseEvent.latlng);
	}

  drawOptions = {
    position: 'bottomleft',
    draw: {
      polyline: { showLength: true, metric: false, feet: false },
      rectangle: false
    },
    edit: {
      featureGroup: this.drawnItems
    }
  };

  public onDrawCreated(e: any) {
    var layer = (e as DrawEvents.Created).layer;
    if (layer instanceof Polyline) {
      var distance = 0;
      var points = layer.getLatLngs();
      for (var i = 0; i < points.length-1; i++) {
        distance += this.distanceTo(points[i]["lat"], points[i]["lng"], points[i+1]["lat"], points[i+1]["lng"]);
      }
      layer.bindPopup("Distance: " + this.roundToMiles(distance / 1609.386) + " miles");
    }
    
    this.drawnItems.addLayer(layer);
  }

  distanceTo(x1, y1, x2, y2)  {
    return Math.sqrt( Math.pow((x2-x1), 2) + Math.pow((y2-y1), 2) );
  }

  roundToMiles(dots)  {
    return Math.round(dots * 100) / 100;
  }
}
