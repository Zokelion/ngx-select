# NgxSelect

Angular recursive select tree

-   [What is It ?](#what-is-it-?)
-   [Installation](#installation)
-   [Usage](#usage)
-   [Basic](#basic)
-   [Configuration](#configuration)

## What is it ?

NgxSelect is a recursive select tree for Angular 2+.
You can use the research field for find any item in the list.
NgxSelect can be configured for changing button's label and css classes.

## Installation

```shell
npm install @zokelion/ngx-select --save

```

## Usage

### Basic

NgxSelect generate a tree based on an list of items.
the component should be declared in your html code like this :

```html
<ngx-select
    [items]="items"
    (itemSelectedEvent)="itemSelected($event)"
    [defaultToggleButtonLabel]="'No Items Selected'"
    [placeholder]="'Search Items'"
    [toggleBtnClass]="'w-75'"
    [toggleContentClass]="'w-100'"
    [parentSelectable]="false"
></ngx-select>
```

This is a simple interface that describes any parameters for a select component.

| Name                     | Type              | required | Description                                                                                                                              | Default             |
| ------------------------ | ----------------- | :------: | ---------------------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| (itemSelectedEvent)      | ItemSelectedEvent |    ✔️    | function who was called by the event for getting the list of selected items, in the example below the function was called itemSelected() | NO                  |
| items                    | item[]            |    ❌    | parameter item list                                                                                                                      | []                  |
| defaultToggleButtonLabel | string            |    ❌    | label of toggle button in case of none items are selected                                                                                | 'No Items Selected' |
| placeholder              | string            |    ❌    | placeholder of research input                                                                                                            | 'Search Items'      |
| toggleBtnClass           | string            |    ❌    | input for your custom css classes on the toggle button                                                                                   | 'w-75'              |
| toggleContentClass       | string            |    ❌    | input for your custom css classes on the content of the toggle                                                                           | 'w-100'             |
| parentSelectable         | boolean           |    ❌    | parameter who define if parent item are selectable                                                                                       | false               |

In order to use the event class import it in your component and declare a new function in your component like this :

```typescript
    // import to be able to use the event
    import { ItemSelectedEvent } from '@zokelion/ngx-select/models/item-selected-event.model';
    // import this model for the type of your list
    import { Item } from '@zokelion/ngx-select/models/item.model';

    // function for getting and using the list
    public itemSelected(eventItem: ItemSelectedEvent): void {
        this.selectedItems = eventItem.selectedItems;
    }
```

For the generation of the tree the list must be composed of items based on this model :

```typescript
export class Item {
    id?: number;
    name: string;
    isSelected: boolean;
    children: Item[];
}
```

Detail of Item property :

| Name       | Type              | required | Description                                                 |
| ---------- | ----------------- | :------: | ----------------------------------------------------------- |
| id         | ItemSelectedEvent |    ❌    | item.id is optionnal but it is usefull when you use an api. |
| name       | string            |    ✔️    | name of item                                                |
| isSelected | boolean           |    ✔️    | indicates weither or not this item is ticked.               |
| children   | item[]            |    ✔️    | childrens of the item                                       |

Example of items list:

```typescript
// this list is an example
items: Item[] = [{
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
                            isSelected: false,
                            children: []
                        },
                        {
                            id: 8,
                            name: 'Deutschland',
                            isSelected: false,
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
                            isSelected: false,
                            children: []
                        },
                        {
                            id: 11,
                            name: 'Japan',
                            isSelected: false,
                            children: []
                        }
                    ]
                },
                {
                    id: 12,
                    name: 'Oceania',
                    isSelected: false,
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
        }];
```

### Configuration

Labels can be customized depending on your language. We're using English by default.
You can use your custom css classes on this component, by default we used the bootstrap's classes 'w-75' on the toggle button and 'w-100' on the toggled content.
The params have default value but the following params can be customized :

```html
<ngx-select
    [defaultToggleButtonLabel]="'No Items Selected'"
    [placeholder]="'Search Items'"
    [toggleBtnClass]="'w-75'"
    [toggleContentClass]="'w-100'"
    [parentSelectable]="false"
></ngx-select>
```
