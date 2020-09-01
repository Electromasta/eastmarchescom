import { Component, OnInit } from '@angular/core';

import { tileLayer, latLng, CRS, marker, FeatureGroup, featureGroup, DrawEvents, LatLngBounds, Transformation, FitBoundsOptions, Util, Polyline, LatLng } from 'leaflet';

@Component({
  selector: 'app-atlas',
  templateUrl: './atlas.component.html',
  styleUrls: ['./atlas.component.css']
})
export class AtlasComponent implements OnInit {
  drawnItems: FeatureGroup = featureGroup();

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
    marker([ 5050268, 4656404 ]).bindPopup("<b>Akros</b><br><p>The seat of power of an empire, where contracts and loyalty are enforced with geas magic. Noble houses play games of power using the merchants, peasants and their chosen champions.</p>"),  //Akros
    marker([ 5418220, 3919205 ]).bindPopup("<b>Twin Cities</b><br><p>The Twin Cities, Uru-Bhast and Uru-Nekhan, rebuilt by Gadea the Great in honor the sons of the diety Muru.</p>"),  //Twin Cities
    marker([ 4735436, 5015287 ]).bindPopup("<b>Ravenwatch</b><br><p>Ravenwatch is a town in the empire surrounded by forests on all sides. The monks of the abbey preach nonviolent passivism.</p>"),  //Ravenwatch
    marker([ 4613649, 4367484 ]).bindPopup("<b>Phandalin</b><br><p>A Mining Town, whos resources are under strict control of the Empire, and is a well known tourist trap.</p>"),  //Phandalin
    marker([ 5247200, 5448019 ]).bindPopup("<b>Saltmarsh</b><br><p>Saltmarsh is a fishing town. Whether or not the town is a part of the empire depends on who you ask, and is a very controversial subject.</p>"),  //Saltmarsh
    marker([ 5166872, 7428999 ]).bindPopup("<b>Joanapur</b><br><p>A city on a chain of islands, where laws are more of suggestions, gangs and pirates roam unchecked, and the majority of people live in slums.</p>"),   //Joanapur

    marker([ 4234037, 4366188 ]).bindPopup("<a href='farnorth'><b>High North</b></a>"),   //High North
    marker([ 4918116, 4436151 ]).bindPopup("<a href='hyland'><b>Hyland</b></a>"),   //Hyland
    marker([ 5887229, 5083954 ]).bindPopup("<a href='hool'><b>Hool Swamp</b></a>"),   //Hool Swamp
    marker([ 6187809, 7708850 ]).bindPopup("<a href='shackles'><b>Shackles</b></a>"),   //Shackles
    marker([ 6053066, 3573278 ]).bindPopup("<a href='mulan'><b>Mulan</b></a>"),   //Mulan
    marker([ 4995853, 2948796 ]).bindPopup("<a href='stolen'><b>Stolen Lands</b></a>"),   //Stolen Lands
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
