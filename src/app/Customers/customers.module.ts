import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {CustomersComponent} from './customerscomponent';

@NgModule({
    imports: [ CommonModule ],
    declarations: [ CustomersComponent ],
    exports: [ CustomersComponent    ]
})

export class CustomersModule { }