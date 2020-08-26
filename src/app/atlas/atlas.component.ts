import { Component, OnInit } from '@angular/core';

import { tileLayer, latLng, CRS, marker, FeatureGroup, featureGroup, DrawEvents, LatLngBounds, Transformation, FitBoundsOptions, Util } from 'leaflet';

@Component({
  selector: 'app-atlas',
  templateUrl: './atlas.component.html',
  styleUrls: ['./atlas.component.css']
})
export class AtlasComponent implements OnInit {
  map: L.Map;
  drawnItems: FeatureGroup = featureGroup();
  test: CRS;

  constructor() {}

  leafoptions = {
    layers: [
      tileLayer('/assets/leaflets/atlas/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...', tileSize: 1024 })
    ],
    crs: Util.extend({}, CRS.Simple, {
      transformation: new Transformation(0.00009648, 0.00009648, 0.00009648, 0.00009648)
    }),
    zoom: 2,
    minZoom: 0,
    maxZoom: 4,
    center: latLng(5058000, 4861000),
    noWrap: true,
    attributionControl: false
  };

  layers = [  //y, x
    marker([ 5050268, 4656404 ]).bindTooltip("<b>Akros</b><br><p>The seat of power of an empire, where contracts and loyalty are enforced with geas magic. Noble houses play games of power using the merchants, peasants and their chosen champions.</p>", {permanent: false, opacity: 1, direction: 'top'}),  //Akros
    marker([ 5418220, 3919205 ]).bindTooltip("<b>Twin Cities</b><br><p>The Twin Cities, Uru-Bhast and Uru-Nekhan, rebuilt by Gadea the Great in honor the sons of the diety Muru.</p>", {permanent: false, opacity: 1, direction: 'top'}),  //Twin Cities
    marker([ 4735436, 5015287 ]).bindTooltip("<b>Ravenwatch</b><br><p>Ravenwatch is a town in the empire surrounded by forests on all sides. The monks of the abbey preach nonviolent passivism.</p>", {permanent: false, opacity: 1, direction: 'top'}),  //Ravenwatch
    marker([ 4613649, 4367484 ]).bindTooltip("<b>Phandalin</b><br><p>A Mining Town, whos resources are under strict control of the Empire, and is a well known tourist trap.</p>", {permanent: false, opacity: 1, direction: 'top'}),  //Phandalin
    marker([ 5247200, 5448019 ]).bindTooltip("<b>Saltmarsh</b><br><p>Saltmarsh is a fishing town. Whether or not the town is a part of the empire depends on who you ask, and is a very controversial subject.</p>", {permanent: false, opacity: 1, direction: 'top'}),  //Saltmarsh
    marker([ 5166872, 7428999 ]).bindTooltip("<b>Joanapur</b><br><p>A city on a chain of islands, where laws are more of suggestions, gangs and pirates roam unchecked, and the majority of people live in slums.</p>", {permanent: false, opacity: 1, direction: 'top'})   //Joanapur
  ];


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
