class cart {
    items: Item[] = [];
    order: Order;
    id: string;

    constructor(
        id: string,
        order: Order,
        items:Item[] ) {
        this.id = id;
    }
}

class Item {}

class Order{}
