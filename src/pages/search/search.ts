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
  myMarker: any;

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
              "elementType": "geometry.stroke",
              "stylers": [
                {
                  "weight": 1
                }
              ]
            },
            {
              "elementType": "labels.icon",
              "stylers": [
                {
                  "weight": 0.5
                }
              ]
            },
            {
              "elementType": "labels.text.fill",
              "stylers": [{
                  "color": "#029735"
                }
              ]
            },
            {
              "elementType": "labels.text.stroke",
              "stylers": [
                {
                  "color": "#fffff3"
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
              "featureType": "poi.business",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "labels.text",
              "stylers": [
                {
                  "visibility": "off"
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
            }
          ],
    }
    this.map = new google.maps.Map(this.mapContainer.nativeElement, mapOptions);
  

    for(let item of this.markers) {
      let position = new google.maps.LatLng(item.lat, item.lng);
      let marker = new google.maps.Marker({map: this.map, position: position, title: item.name, about: item.about, data: item});
      this.addInfoWindowToMarker(marker);
    }

    this.geolocation.getCurrentPosition().then((position) => {
 
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      this.map.setCenter(latLng);
      let myMarker = new google.maps.Marker({
        map: this.map,
        icon: {
          path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
                strokeColor : '#ff9007',
                strokeWeight : 5,
                scale: 3.5,
        },
        
          animation: google.maps.Animation.DROP,
        position: latLng
      });
      
 
      this.geolocation.watchPosition().subscribe((resp) => {
        let latLng = new google.maps.LatLng(resp.coords.latitude,
        resp.coords.longitude);
        myMarker.setPosition(latLng);
 
    }, (err) => {
      console.log(err);
    });
 

  
   
    


  }, (err) => {
    console.log(err);
  });

}

}
