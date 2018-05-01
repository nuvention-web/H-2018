import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';


import { Item } from '../../models/item';
import { Items } from '../../providers/providers';


declare var google;


@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

  currentItems: any = [];
  markers: Item[];

  @ViewChild('mapContainer') mapContainer: ElementRef;
  map: any;
  infoWindows: any;

  constructor(private geolocation: Geolocation, public navCtrl: NavController, public navParams: NavParams, public items: Items)
   {   this.markers= this.items.query();
    this.infoWindows = [];
  }

  /**
   * Perform a service for the proper items.
   */
  getItems(ev) {
    let val = ev.target.value;
    if (!val || !val.trim()) {
      this.currentItems = [];
      return;
    }
    this.currentItems = this.items.query({
      name: val
    });
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: Item) {
      this.navCtrl.push('CardDetailPage', {
        item: item
      });
  }

  

  ngOnInit(){
    this.displayGoogleMap();

  }



  closeAllInfoWindows() {
    for(let window of this.infoWindows) {
      window.close();
    }
  }

  addInfoWindowToMarker(marker) {
    var infoWindowContent = '<div id="content" style="width:125px"><h1 id="firstHeading" class="firstHeading">' + marker.title  +'</h1>' + '<p>' + marker.about + '</p></div>';
    var infoWindow = new google.maps.InfoWindow({
      content: infoWindowContent
    });
 
    marker.addListener('click', () => {
      this.closeAllInfoWindows();
      infoWindow.open(this.map, marker);
    });

    this.infoWindows.push(infoWindow);
    console.log(marker);
    google.maps.event.addListenerOnce(infoWindow, 'domready', () => {
      document.getElementById('content').addEventListener('click', () => {
        this.openItem(marker.data);
      });
    });

  
  }
  

 

  

  displayGoogleMap() {

    let mapOptions = {
      disableDefaultUI: true,
      zoom: 15,
      myLocation: true,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      styles: [
        {
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#ebe3cd"
            }
          ]
        },
        {
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#523735"
            }
          ]
        },
        {
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#f5f1e6"
            }
          ]
        },
        {
          "featureType": "administrative",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#c9b2a6"
            }
          ]
        },
        {
          "featureType": "administrative.land_parcel",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#dcd2be"
            }
          ]
        },
        {
          "featureType": "administrative.land_parcel",
          "elementType": "labels",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "administrative.land_parcel",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#ae9e90"
            }
          ]
        },
        {
          "featureType": "landscape.natural",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#dfd2ae"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#dfd2ae"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#93817c"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#a5b076"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#447530"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#f5f1e6"
            }
          ]
        },
        {
          "featureType": "road.arterial",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#fdfcf8"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#f8c967"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#e9bc62"
            }
          ]
        },
        {
          "featureType": "road.highway.controlled_access",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#e98d58"
            }
          ]
        },
        {
          "featureType": "road.highway.controlled_access",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#db8555"
            }
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "labels",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#806b63"
            }
          ]
        },
        {
          "featureType": "transit.line",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#dfd2ae"
            }
          ]
        },
        {
          "featureType": "transit.line",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#8f7d77"
            }
          ]
        },
        {
          "featureType": "transit.line",
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#ebe3cd"
            }
          ]
        },
        {
          "featureType": "transit.station",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#dfd2ae"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#b9d3c2"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#92998d"
            }
          ]
        }
      ],
    }
    this.map = new google.maps.Map(this.mapContainer.nativeElement, mapOptions);
  

    for(let item of this.markers) {
      let position = new google.maps.LatLng(item.lat, item.lng);
      let marker = new google.maps.Marker({map: this.map, position: position, title: item.name, about: item.about, data: item});
      this.addInfoWindowToMarker(marker);
    }

  this.geolocation.watchPosition().subscribe((resp) => {
    let latLng = new google.maps.LatLng(resp.coords.latitude,
    resp.coords.longitude);
    this.map.setCenter(latLng);
    let marker = new google.maps.Marker({
      map: this.map,
      icon: {
        path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
              strokeColor : '#3333FF',
              strokeWeight : 5,
              scale: 3.5,
      },
      
        animation: google.maps.Animation.DROP,
      position: latLng
    });


  }, (err) => {
    console.log(err);
  });

}

}
