"use strict";
// Classes
var Invoice = /** @class */ (function () {
    function Invoice(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    Invoice.prototype.format = function () {
        return "".concat(this.client, " owes $").concat(this.amount, " for ").concat(this.details);
    };
    return Invoice;
}());
var invOne = new Invoice("mario", "work on the mario website", 250);
var invTwo = new Invoice("luigi", "work on the luigi website", 300);
var invoices = [];
// invoices.push("hello"); // Error
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices);
invOne.client = "yoshi";
// invTwo.amount = "hello"; // Error
invTwo.amount = 400;
console.log(invOne, invTwo);
var form = document.querySelector(".new-item-form");
// inputs
var type = document.querySelector("#type");
var tofrom = document.querySelector("#tofrom");
var details = document.querySelector("#details");
var amount = document.querySelector("#amount");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
