import { Component, OnInit } from '@angular/core';

import { tileLayer, latLng, CRS, marker, FeatureGroup, featureGroup, DrawEvents, Transformation, Util } from 'leaflet';

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
    maxZoom: 2,
    center: latLng(-500, 500),
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
      polygon: { showArea: true, metric: false, feet: false },
      rectangle: false
    },
    edit: {
      featureGroup: this.drawnItems
    }
  };

  drawLocal: any = {
		draw: {
			toolbar: {
				buttons: {
					polygon: 'Draw an awesome polygon!'
				}
			}
		}
	};

  public onDrawCreated(e: any) {
    this.drawnItems.addLayer((e as DrawEvents.Created).layer);
  }
}
