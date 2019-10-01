import { Component, OnInit } from '@angular/core';

@Component({
    selector:'app-customers',
    templateUrl: './customerscomponent.html'
})

export class CustomersComponent implements OnInit{
    title: string;
    people: any[];

    constructor(){

    }

    ngOnInit(){
        this.title='Customers';
        this.people= [
            {id:1 ,name:'john Doe'},
            {id:2 ,name:'Jack Doe'},
            {id:3 ,name:'Jonas Doe'},
            {id:4 ,name:'Julian Doe'}
        ]
    }
}