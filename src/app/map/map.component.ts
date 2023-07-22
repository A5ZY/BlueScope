import { Component, OnInit, Inject } from '@angular/core';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
declare var google: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  @ViewChild("mapRef") mapRef!: ElementRef;
  constructor( 
    private elementRef: ElementRef) {
  };

  ngAfterViewInit() {
    this.showMap();
  }
  ngOnInit() {
  }

  showMap() {
    
    console.log(this.mapRef.nativeElement);
    const location = { lat: 8.7412228, lng: 77.694626 };
    var options = {
      center: location,
      zoom: 10
    }

    const map = new google.maps.Map(this.mapRef.nativeElement, options);
  }
  

}
