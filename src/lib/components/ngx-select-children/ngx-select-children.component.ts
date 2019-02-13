import {
    Component,
    OnInit,
    Input,
    Output,
    EventEmitter,
    ViewChildren,
    QueryList,
    OnChanges
} from '@angular/core';
import { Item } from '../../models/item.model';
import { ItemSelectedEvent } from '../../models/item-selected-event-model';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'ngx-select-children',
    templateUrl: './ngx-select-children.component.html',
    styleUrls: ['./ngx-select-children.component.scss']
})
export class NgxSelectChildrenComponent implements OnInit, OnChanges {
    // icon
    public faCheck = faCheck;
    @Input()
    filter: string;
    @Input()
    isFirstLevel: boolean;
    @Input()
    includeContainer: boolean;
    @Input()
    item: Item;
    @Output()
    itemSelected: EventEmitter<ItemSelectedEvent> = new EventEmitter<ItemSelectedEvent>();
    @ViewChildren(NgxSelectChildrenComponent) children: QueryList<NgxSelectChildrenComponent>;

    isVisible = true;
    selected: Item;

    matchesFilter: boolean;
    constructor() {}

    ngOnInit() {
        this.unSelectAllChildren();
    }

    ngOnChanges() {
        this.updateFilter();
    }

    public unSelectAllChildren(items?: Item[]): void {
        // on the first load we unselect all items
        if (!items) {
            items = this.item.children;
        }
        items.forEach(item => {
            item.isSelected = false;
            if (item.children.length > 0) {
                this.unSelectAllChildren(item.children);
            }
        });
    }

    public itemClicked(item: Item): void {
        this.selected = item;
        // if item is already selected we unselected it
        if (this.selected.isSelected) {
            this.selected.isSelected = false;
            this.itemSelected.emit({ selectedItem: null });
        } else {
            item.isSelected = true;
            this.itemSelected.emit({ selectedItem: item });
        }
    }

    public keep(keeped: Item): void {
        // on click on item we keep this selected and unselected all of the others
        if (this.item.name !== keeped.name) {
            this.item.isSelected = false;
        }
        this.children.forEach(child => {
            child.keep(keeped);
        });
    }

    public selectedItem(eventItem: ItemSelectedEvent): void {
        if (eventItem.selectedItem && eventItem.selectedItem.isSelected) {
            this.keep(eventItem.selectedItem);
        }
        this.itemSelected.emit({ selectedItem: eventItem.selectedItem });
    }

    public matchFilter(item: Item): boolean {
        let result = false;
        item.children.forEach(child => {
            if (this.matchFilter(child)) {
                result = true;
            }
        });
        const regex = new RegExp('.*' + this.filter + '.*', 'gi');
        return regex.test(item.name) || result;
    }

    public updateFilter(): void {
        this.isVisible = this.matchFilter(this.item);
    }
}
