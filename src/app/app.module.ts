import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxSelectComponent } from '../lib/components/ngx-select/ngx-select.component';
import { NgxSelectChildrenComponent } from '../lib/components/ngx-select-children/ngx-select-children.component';

@NgModule({
    declarations: [AppComponent, NgxSelectComponent, NgxSelectChildrenComponent],
    imports: [BrowserModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
