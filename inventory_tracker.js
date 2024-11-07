const inventorynventory = new Inventory():

// add items 

inventory.addItem('Apple', 10, 0.5);
inventory.addItem('Banana', 20, 0.25);
inventory.addItem('Orange', 5, 0.3);

// list items
console.log(inventory.ListItems()):
//get specific inventory

console.log(inventory.getItem('Apple'));
//remove item from inventory
inventory.removeItem('Banana');

//list updated inventory
console.log(inventory.ListItems()):
