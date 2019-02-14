import { Component, OnInit } from '@angular/core';
import { Item } from 'src/lib/models/item.model';
import { ItemSelectedEvent } from 'src/lib/models/item-selected-event.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'ngx-select';

    items: Item[] = [];
    selectedItem: Item;

    ngOnInit() {
        this.items.push({
            id: 1,
            name: 'World',
            isSelected: false,
            children: [
                {
                    id: 2,
                    name: 'America',
                    isSelected: false,
                    children: [
                        {
                            id: 3,
                            name: 'Canada',
                            isSelected: false,
                            children: []
                        },
                        {
                            id: 4,
                            name: 'United-States',
                            isSelected: false,
                            children: [
                                {
                                    id: 14,
                                    name: 'Arizona',
                                    isSelected: false,
                                    children: []
                                },
                                {
                                    id: 15,
                                    name: 'Washington',
                                    isSelected: false,
                                    children: []
                                }
                            ]
                        },
                        {
                            id: 5,
                            name: 'Mexico',
                            isSelected: false,
                            children: []
                        }
                    ]
                },
                {
                    id: 6,
                    name: 'Europe',
                    isSelected: false,
                    children: [
                        {
                            id: 7,
                            name: 'France',
                            isSelected: true,
                            children: []
                        },
                        {
                            id: 8,
                            name: 'Deutschland',
                            isSelected: true,
                            children: []
                        }
                    ]
                },
                {
                    id: 9,
                    name: 'Asia',
                    isSelected: false,
                    children: [
                        {
                            id: 10,
                            name: 'China',
                            isSelected: true,
                            children: []
                        },
                        {
                            id: 11,
                            name: 'Japan',
                            isSelected: true,
                            children: []
                        }
                    ]
                },
                {
                    id: 12,
                    name: 'Oceania',
                    isSelected: true,
                    children: [
                        {
                            id: 13,
                            name: 'Australia',
                            isSelected: false,
                            children: []
                        }
                    ]
                }
            ]
        });
    }
    public itemSelected(eventItem: ItemSelectedEvent): void {
        this.selectedItem = eventItem.selectedItem;
    }
}
