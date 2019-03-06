import { Component, OnInit, Input, ElementRef, EventEmitter, Output } from '@angular/core';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { Item } from '../../models/item.model';
import { ItemSelectedEvent } from '../../models/item-selected-event.model';

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

    @Input()
    public items: Item[] = [];
    @Input()
    public defaultToggleButtonLabel = 'No Items Selected';
    @Input()
    public placeholder = 'Search Items';
    @Input()
    public toggleBtnClass = 'w-75';
    @Input()
    public toggleContentClass = 'w-100';
    public filter: any = { id: null, name: '', isSelected: false };
    @Input()
    public parentSelectable = false;
    @Output()
    public itemSelectedEvent: EventEmitter<ItemSelectedEvent> = new EventEmitter<
        ItemSelectedEvent
    >();

    public selected: Item;

    public state = 'closed';
    public toggleButtonLabel: string;

    constructor(private _eref: ElementRef) {}

    ngOnInit() {
        this.setLabel();
    }

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

    public setLabel(): void {
        if (this.selected) {
            this.toggleButtonLabel = this.selected.name;
        } else {
            this.toggleButtonLabel = this.defaultToggleButtonLabel;
        }
    }

    public reset(currentItems?: Item[]): void {
        if (!currentItems) {
            currentItems = this.items;
        }
        currentItems.forEach(item => {
            item.isSelected = false;
            if (item.children.length > 0) {
                this.reset(item.children);
            }
        });
        this.selected = null;
        this.setLabel();
        const event: ItemSelectedEvent = new ItemSelectedEvent();
        event.selectedItem = this.selected;
        this.itemSelectedEvent.emit(event);
    }

    public childClicked(eventItem: ItemSelectedEvent): void {
        this.selected = eventItem.selectedItem;
        //restore false value for not selected items
        this.items.forEach(item => {
            if (item !== this.selected) {
                item.isSelected = false;
            }
        });
        this.setLabel();
        this.itemSelectedEvent.emit(eventItem);
    }
}
