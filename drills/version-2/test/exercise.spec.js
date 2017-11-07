var assert = require("assert")
var exercise = require("../exercise")

describe("Version-2 Exercises", ()=>{
    describe("#getItemById", ()=>{
        const items = [{
            id: 1,
            description: "Dark Chocolate Crunchies",
            price: 4.29
        },{
            id: 2,
            description: "Mint Wafers",
            price: 1.09
        }];
        it("returns an item based on ID", ()=>{
            assert.deepEqual(exercise.getItemById(items, 1), items[0]);
            assert.deepEqual(exercise.getItemById(items, 2), items[1]);
        });
    });

    describe("#buildTransactions", ()=>{
        const items = [{
            id: 1,
            description: "Dark Chocolate Crunchies",
            price: 4.29
        },{
            id: 2,
            description: "Mint Wafers",
            price: 1.09
        }];
        const sales = [{
            itemId: 1,
            quantity: 2
        },{
            itemId: 2,
            quantity: 2
        }];
        it("builds transactions", ()=>{
            assert.deepEqual(exercise.buildTransactions(sales, items), [{
                itemId: 1,
                description: "Dark Chocolate Crunchies",
                price: 4.29,
                quantity: 2,
            },{
                itemId: 2,
                description: "Mint Wafers",
                price: 1.09,
                quantity: 2,
            }]);
        });
    });
    describe("#getTransactionsByItemDescription", ()=>{
        const transactions = [{
            description: "Dark Chocolate Crunchies"
        },{
            description: "Mint Wafers"
        },{
            description: "Mint Wafers"
        }];
        it("builds transactions", ()=>{
            assert.deepEqual(exercise.getTransactionsByItemDescription(transactions, "Mint Wafers"), [{
                description: "Mint Wafers",
            },{
                description: "Mint Wafers"
            }]);
        });
    });
})
