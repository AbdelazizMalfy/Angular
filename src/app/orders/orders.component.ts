import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute , Params } from '@angular/router';

import { DataService } from '../core/data.service';
import { IOrder, ICustomer } from '../shared/interfaces';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders: IOrder[] = [];
  customer: ICustomer;


  constructor(private dataService: DataService ,
              private route: ActivatedRoute) { }

  ngOnInit() {



    this.dataService.getCustomer(id)
      .subscribe((customer:ICustomer) => this.customer = customer)
  }

}
