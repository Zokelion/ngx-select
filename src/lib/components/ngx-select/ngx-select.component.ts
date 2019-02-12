import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'ngx-select',
    templateUrl: './ngx-select.component.html',
    styleUrls: ['./ngx-select.component.scss'],
    // tslint:disable-next-line:use-host-property-decorator
    host: {
        '(document:click)': 'onClick($event)'
    }
})
export class NgxSelectComponent implements OnInit {
    // icon
    public faCaretRight = faCaretRight;
    // @Input()
    // public items: Item[] = [];
    @Input()
    public defaultToggleButtonLabel = 'No Items Selected';
    @Input()
    public placeholder = 'Search Items';
    @Input()
    public toggleBtnClass = 'w-75';
    @Input()
    public toggleContentClass = 'w-100';

    public state = 'closed';
    public toggleButtonLabel = 'default';

    constructor(private _eref: ElementRef) {}

    ngOnInit() {}

    animateToggle() {
        this.state = this.state === 'closed' ? 'open' : 'closed';
    }

    onClick(event) {
        if (!this._eref.nativeElement.contains(event.target)) {
            if (this.state === 'open') {
                this.animateToggle();
            }
        }
    }
}
