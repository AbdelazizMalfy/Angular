import { Component , OnInit } from '@angular/core';

@Component({
    selector: 'app-customers-list',
    templateUrl: './customers-listcomponent.html',
    styleUrls: ['./customers-listcomponent.css']
})

export class CustomersListComponent implements OnInit {

    filteredCustomer: any[] = [];
    customersOrderTotal : number;
    currencyCode: string = 'USD'

    constructor(){}

    ngOnInit() {

    }
}