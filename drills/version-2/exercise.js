function getItemById(items, id){
    return items.filter(item => item.id == id)[0];
}

function buildTransactions(sales, items){
    return sales.map(sale => {
        return Object.assign(sale, getItemById(items, sale.itemId));
    }).map(sale => {
        delete sale.id;
        return sale;
    });
}

function getTransactionsByItemDescription(transactions, description){
    return transactions.filter(transaction => transaction.description === description);
}

module.exports = {
    // Uncomment these as you write them
    getItemById,
    buildTransactions,
    getTransactionsByItemDescription
}
