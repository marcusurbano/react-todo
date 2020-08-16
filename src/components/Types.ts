export interface IListItemParam{
    Item: IListItem,
    OnSelectedItem: OnEventItem;
    OnRemoveItem: OnEventItem;
}

export interface IListItem{
    key?: string,
    text: string;
    complete: boolean
}

export interface IList{
    Items: Array<IListItem>;
    OnSelectedItem: OnEventItem;
    OnRemoveItem: OnEventItem;
}

export class ListItem implements IListItem{
    key?: any;
    text: string;
    complete: boolean;

    constructor(text: string, complete: boolean, key?: any) {
        this.key =key;
        this.text =text;
        this.complete = complete; 
    }
}

export interface IAddItem{
    onAddItem: OnAddItem;
}

export type OnAddItem =  (newItem: string) => void;
export type OnEventItem = (selectedItem: IListItem) => void;

