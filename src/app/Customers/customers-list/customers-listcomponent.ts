import { Component , OnInit, Input } from '@angular/core';

import { ICustomer } from '../../shared/interfaces';

@Component({
    selector: 'app-customers-list',
    templateUrl: './customers-listcomponent.html',
    styleUrls: ['./customers-listcomponent.css']
})

export class CustomersListComponent implements OnInit {
    private _customers: ICustomer[] = [];
    @Input() get people(): ICustomer[] {
        return this._customers
    } 

    set people(value: ICustomer[]){
        this.filteredCustomers = this._customers = value;
        this.calculateOrders();
    }

    filteredCustomers: ICustomer[] = [];
    customersOrderTotal : number;
    currencyCode: string = 'USD'

    constructor(){}

    ngOnInit() {

    }

    calculateOrders(){
        this.customersOrderTotal = 0 
        this.filteredCustomers.forEach((cust:ICustomer)=>{
            this.customersOrderTotal += cust.orderTotal;
        })
    }

    sort(sortBy: string){
        //A sorter service will handle the sorting
    }
}