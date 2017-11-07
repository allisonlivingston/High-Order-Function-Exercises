function getTotalItemSales(sales, id){
    return sales.filter(sale => sale.itemId == id).reduce((totalSales, sale) => {
        return totalSales += sale.quantity;
    }, 0);
}

function addTotalSalesToItems(sales, items){
    return items.map(item => {
        item.quantity = getTotalItemSales(sales, item.id);
        return item;
    });
}

function addTotalValueToItems(sales, items){
    return addTotalSalesToItems(sales, items).map(item => {
        item.totalValue = (item.quantity * 10 * item.price * 10) / 100;
        return item;
    });
}

module.exports = {
    // Uncomment these functions as you write them
    getTotalItemSales,
    addTotalSalesToItems,
    addTotalValueToItems
}
