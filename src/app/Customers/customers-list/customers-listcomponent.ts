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


    filter(data:string){
        if(data){
            this.filteredCustomers = this.people.filter((cust: ICustomer) => {
                return cust.name.toLocaleLowerCase().indexOf(data.toLocaleLowerCase()) > -1 ||
                cust.city.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
                cust.orderTotal.toString().indexOf(data) > -1;
            })
        }else {
            this.filteredCustomers = this.people;
        }
        this.calculateOrders();
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