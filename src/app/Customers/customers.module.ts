import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module'

import {CustomersComponent} from './customerscomponent';
import { CustomersListComponent } from './customers-list/customers-listcomponent';
import { FilterTextboxComponent } from './customers-list/filter-textboxcomponent';
import { CustomerRoutingModule } from './customer-routing.module'

@NgModule({
    imports: [ CommonModule, SharedModule, FormsModule , CustomerRoutingModule ],
    declarations: [ CustomersComponent , CustomersListComponent , FilterTextboxComponent],
    exports: [ CustomersComponent    ]
})

export class CustomersModule { }