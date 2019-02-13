import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgxSelectModule } from '../lib/ngx-select-module';
@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, NgxSelectModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
