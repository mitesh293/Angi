import { Vehicle } from '../model/Vehicle';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent implements OnInit {
  @Input()
  vehicle: Vehicle;
  constructor() { }

  ngOnInit() {
  }

}
