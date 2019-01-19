class ShoppingCart {
    constructor(name) {
        this.array = []
        
    }

    getItems() { 
        return this.array
    }

    addItem(itemName, quantity, price) {
        this.getItems().push({'name': itemName, 'pricePerUnit': price, 'quantity': quantity});
    }

    clear() {
        this.array = []
    }

    total() {
        return this.array
            .map(total => total.quantity * total.pricePerUnit)
            .reduce((accumulator, currentValue) => accumulator  + currentValue, 0)
    }
}

module.exports = ShoppingCart 
