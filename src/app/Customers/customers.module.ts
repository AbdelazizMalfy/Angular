import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {CustomersComponent} from './customerscomponent';
import { CustomersListComponent } from './customers-list/customers-listcomponent';
import { FilterTextboxComponent } from './customers-list/filter-textboxcomponent';

@NgModule({
    imports: [ CommonModule ],
    declarations: [ CustomersComponent , CustomersListComponent , FilterTextboxComponent],
    exports: [ CustomersComponent    ]
})

export class CustomersModule { }