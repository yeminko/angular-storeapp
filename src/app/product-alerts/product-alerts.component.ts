import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import {AlertsServiceService} from '../../alerts-service.service';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
  standalone: false
})
export class ProductAlertsComponent implements OnInit {

  @Input() product;
  constructor(private alertService: AlertsServiceService) { }

  ngOnInit() {
  }

  onNotify2() {
    console.log('onNotify in product alert');
    this.alertService.onNotify();
  }

}

