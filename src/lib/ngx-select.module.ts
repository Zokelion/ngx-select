import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSelectComponent } from './components/ngx-select/ngx-select.component';
import { NgxSelectChildrenComponent } from './components/ngx-select-children/ngx-select-children.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
@NgModule({
    declarations: [NgxSelectComponent, NgxSelectChildrenComponent],
    imports: [CommonModule, FontAwesomeModule, FormsModule],
    exports: [NgxSelectComponent]
})
export class NgxSelectModule {}
