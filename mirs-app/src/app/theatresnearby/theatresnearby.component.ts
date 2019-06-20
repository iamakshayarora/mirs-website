import { Component, OnInit, ViewChild } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

import {
    debounceTime, distinctUntilChanged, switchMap, timeout
} from 'rxjs/operators';

declare var require: any;
const GoogleMapsLoader = require('google-maps');
declare var google: any;

@Component({
  selector: 'app-theatresnearby',
  templateUrl: './theatresnearby.component.html',
  styleUrls: ['./theatresnearby.component.css']
})
export class TheatresnearbyComponent implements OnInit {

  flag = 0;
  flag2 = 0;
  boxLng2: any;
  boxLat2: any;
  showDescritionUI: boolean;
  boxdesc: any;
  boxname: any;
  boxid: any;
  boxLng: any;
  boxLat: any;
  map: any;
  @ViewChild('GoogleMap') GoogleMap;

  private searchTerms = new Subject<string>();
    boxLat3: any;
    boxLng3: any;

  constructor(
    private route: ActivatedRoute,
    private httpService: HttpClient) { }

    search(term: string): void {
      this.searchTerms.next(term);
  }
  arrBirds: string [];
   ngOnInit(): void {

    this.showmylocation();

}
getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.showPosition.bind(this));
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

showPosition(position) {
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
    this.boxLat = lat;
    this.boxLng = lng;
    if(this.flag2==0)
    {
        this.flag2=1;
        this.setMap();
    
    }
    else{
        var mylat = this.map.getCenter().lat();
        if (mylat != this.boxLat) {
            var center = new google.maps.LatLng(this.boxLat, this.boxLng);
            this.map.panTo(center);
            this.map.setZoom(13);
        }
    }
}

setMap() {
    var myLatLng = { lat: this.boxLat2 || this.boxLat, lng: this.boxLng2 || this.boxLng };
    var mapProp = {
        zoomControl: true,
        mapTypeControl: true,
        center: myLatLng,
        zoom: 12,
        // mapTypeId: 'roadmap',
        disableDefaultUI: true,
        gestureHandling: "cooperative",
        mapTypeControlOptions: {
            mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
                'styled_map'],

        }
    };
    var service;
    

    setTimeout(() => {
        GoogleMapsLoader.KEY = "AIzaSyBvLZB6qx5YKdubsxM0Nt7Eaxqxnfxmd_w";
        GoogleMapsLoader.LIBRARIES = ['geometry', 'places'];
        GoogleMapsLoader.VERSION = "3.14";
        GoogleMapsLoader.LANGUAGE = 'en';

        GoogleMapsLoader.load(google => {
            this.map = new google.maps.Map(this.GoogleMap.nativeElement, mapProp);
            var styledMapType = new google.maps.StyledMapType(
                [
                    {
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#1d2c4d"
                            }
                        ]
                    },
                    {
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#8ec3b9"
                            }
                        ]
                    },
                    {
                        "elementType": "labels.text.stroke",
                        "stylers": [
                            {
                                "color": "#1a3646"
                            }
                        ]
                    },
                    {
                        "featureType": "administrative.country",
                        "elementType": "geometry.stroke",
                        "stylers": [
                            {
                                "color": "#4b6878"
                            }
                        ]
                    },
                    {
                        "featureType": "administrative.land_parcel",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#64779e"
                            }
                        ]
                    },
                    {
                        "featureType": "administrative.province",
                        "elementType": "geometry.stroke",
                        "stylers": [
                            {
                                "color": "#4b6878"
                            }
                        ]
                    },
                    {
                        "featureType": "landscape.man_made",
                        "elementType": "geometry.stroke",
                        "stylers": [
                            {
                                "color": "#334e87"
                            }
                        ]
                    },
                    {
                        "featureType": "landscape.natural",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#023e58"
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#283d6a"
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "labels.text",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#6f9ba5"
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "labels.text.stroke",
                        "stylers": [
                            {
                                "color": "#1d2c4d"
                            }
                        ]
                    },
                    {
                        "featureType": "poi.business",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "poi.park",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#023e58"
                            }
                        ]
                    },
                    {
                        "featureType": "poi.park",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#3C7680"
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#304a7d"
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "labels.icon",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#98a5be"
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "labels.text.stroke",
                        "stylers": [
                            {
                                "color": "#1d2c4d"
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#2c6675"
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "geometry.stroke",
                        "stylers": [
                            {
                                "color": "#255763"
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#b0d5ce"
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "labels.text.stroke",
                        "stylers": [
                            {
                                "color": "#023e58"
                            }
                        ]
                    },
                    {
                        "featureType": "transit",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "transit",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#98a5be"
                            }
                        ]
                    },
                    {
                        "featureType": "transit",
                        "elementType": "labels.text.stroke",
                        "stylers": [
                            {
                                "color": "#1d2c4d"
                            }
                        ]
                    },
                    {
                        "featureType": "transit.line",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#283d6a"
                            }
                        ]
                    },
                    {
                        "featureType": "transit.station",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#3a4762"
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#0e1626"
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#4e6d70"
                            }
                        ]
                    }
                ],
                { name: 'Styled' });

            this.map.mapTypes.set('styled_map', styledMapType);
            this.map.setMapTypeId('roadmap');
            //var pyrmont = new google.maps.LatLng(12.971054,79.163593);
            
            var request = {
                location: myLatLng,
                radius: '10000',
                type: ['movie_theater']
              };
                service = new google.maps.places.PlacesService(this.map);
                service.nearbySearch(request, (results,status)=>{
                    
                    if (status == google.maps.places.PlacesServiceStatus.OK) {
                              for (var i = 0; i < results.length; i++) {
                                var place = results[i];
                                this.createMarker(results[i]);

                                // var placeLoc = place.geometry.location;
                                // console.log(placeLoc.lat());
                                // console.log(placeLoc.lng());
                                // var newlat=placeLoc.lat();
                                // var newlng=placeLoc.lng();
                                // this.boxLat3=newlat;
                                // this.boxLng3=newlng;

                                // var marker = new google.maps.Marker({
                                //     position: { lat: this.boxLat3 , lng: this.boxLng3 },
                                //     map: this.map,
                                //     icon: 'assets/images/m1.png'
                                // });
                                // console.log(place.name);
                                // google.maps.event.addListener(marker, 'click', function() {
                                //     infowindow.setContent(place.name);
                                //     infowindow.open(this.map, this);
                                //   });
                              }
                             }

                }   
                    
                    );
            
            var marker = new google.maps.Marker({
                position: { lat: this.boxLat2 || this.boxLat, lng: this.boxLng2 || this.boxLng },
                map: this.map,
                icon: 'assets/images/m3.png'
            });
            

            // var marker = new google.maps.Marker({
            //     position: { lat: this.boxLat, lng: this.boxLng },
            //     map: this.map,
            //     icon: image2
            // });
            // marker.setMap(this.map);
            /*var circle = new google.maps.Circle({
                map: this.map,
                center: { lat:28.4594965, lng: 77.0266383 },
                radius: 200,
                strokeColor: "#daf3fa",
                strokeOpacity: 0.8,
                strokeWeight: 1.5,
                fillColor: '#daf3fa'
            });*/
            /*var marker2 = new google.maps.Marker({
                position: { lat: 28.4594965, lng: 77.04 },
                map: this.map,
                icon: 'assets/m1.png'
            });*/
            /*var circle2 = new google.maps.Circle({
                map: this.map,
                center: { lat: 28.4594965, lng: 77.04 },
                radius: 200,
                strokeColor: "#daf3fa",
                strokeOpacity: 0.8,
                strokeWeight: 1.5,
                fillColor: '#daf3fa'
            });*/

        });
    }),1000;

}
createMarker(place){
    if(place.icon=="https://maps.gstatic.com/mapfiles/place_api/icons/movies-71.png"){
    var placeLoc = place.geometry.location;
    console.log(placeLoc.lat());
    console.log(placeLoc.lng());
    var newlat=placeLoc.lat();
    var newlng=placeLoc.lng();
    var infowindow= new google.maps.InfoWindow();
    this.boxLat3=newlat;
    this.boxLng3=newlng;

    var marker = new google.maps.Marker({
        position: { lat: this.boxLat3 , lng: this.boxLng3 },
        map: this.map,
        icon: 'assets/images/m1.png'
    });
    console.log(place.name);
    var TheatreContent='<div id="content">'+
    '<h5 id="firstHeading" class="firstHeading">'+place.name+'</h5>'+
    '<div id="bodyContent">'+
    '<p>' +place.vicinity+
    '</p>'+
    '</div>'+
    '</div>';
    google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent(TheatreContent);
        infowindow.open(this.map, this);
        });
}}
showmylocation() {
    this.boxLat2 = null;
    this.boxLng2 = null;
    this.getLocation();
}

}
