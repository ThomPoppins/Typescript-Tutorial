// TODO: Intro to generics tutorial #18
import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { ListTemplate } from "./classes/ListTemplate.js";
const form = document.querySelector(".new-item-form");
// inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
// List template instance
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    // Using tuple to define the type of values
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    // doc has to be of class that implements the HasFormatter interface
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, "end");
});
// Tuples
let arr = ["ryu", 25, true];
arr[0] = false;
arr[1] = "yoshi";
arr = [30, false, "yoshi"];
let tuple = ["ryu", 25, true];
tuple[0] = "ken";
tuple[1] = 30;
// tuple[0] = 30; // error
// tuple[1] = "ken"; // error
let student;
student = ["chun-li", 223423];
// student = [223423, "chun-li"]; // error
