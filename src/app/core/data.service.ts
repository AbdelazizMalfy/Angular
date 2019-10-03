import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map , catchError } from 'rxjs/operators';

import { ICustomer } from '../shared/interfaces';


@Injectable()
export class DataService {
    baseUrl: string = 'assets'

    constructor(private http: HttpClient){}


    // THIS REQUEST GETS ALL CUSTOMERS
    getCustomers() : Observable<ICustomer[]> {
        return this.http.get<ICustomer[]>(this.baseUrl + '/customers.json')
            .pipe(
                catchError(this.handleError)
            )
    }

    // THIS REQUEST GETS ONLY ONE CUSTOMER
    getCustomer(id: number): Observable<ICustomer>  {
        return this.http.get<ICustomer[]>(this.baseUrl + '/orders.json')
            .pipe(
                map(customers => {
                    let customer = customers.filter((cust:ICustomer)=> cust.id === id)
                    return (customer && customer.length) ? customer[0] : null;
                }),
                catchError(this.handleError)
            )
    }

    private handleError(error: any) {
        console.error('server error:', error);
        if (error.error instanceof Error) {
            const errMessage = error.error.message;
            return Observable.throw(errMessage);
            // Use the following instead if using lite-server
            // return Observable.throw(err.text() || 'backend server error');
        }
        return Observable.throw(error || 'Node.js server error');
    }

}
