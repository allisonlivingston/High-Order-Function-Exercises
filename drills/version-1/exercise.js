function candySalesToObject(candySalesArray){
    return candySalesArray.reduce((object, item, index)=>{
        switch(index){
            case 0:
                object.item = item;
                break;
            case 1:
                object.price = item;
                break;
            case 2:
                object.quantity = item;
                break;
        }
        return object;
    }, {});
}

function salesDayToObject(date, allSales){
    return allSales[date].reduce((object, day)=>{
        object.date = date;
        object.sales.push(candySalesToObject(day));
        return object;
    }, {sales: []});
}

function allSalesToArray(allSales){
    return Object.keys(allSales).map(date => salesDayToObject(date, allSales));
}

module.exports = {
    candySalesToObject,
    salesDayToObject,
    allSalesToArray
};
