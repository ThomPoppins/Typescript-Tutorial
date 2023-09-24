// TODO: Intro to generics tutorial #18

import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";
import { ListTemplate } from "./classes/ListTemplate.js";

const form = document.querySelector(".new-item-form") as HTMLFormElement;

// inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

// List template instance
const ul = document.querySelector("ul")!;
const list = new ListTemplate(ul);

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  // Using tuple to define the type of values
  let values: [string, string, number];
  values = [tofrom.value, details.value, amount.valueAsNumber];

  // doc has to be of class that implements the HasFormatter interface
  let doc: HasFormatter;

  if (type.value === "invoice") {
    doc = new Invoice(...values);
  } else {
    doc = new Payment(...values);
  }

  list.render(doc, type.value, "end");
});

// Tuples

let arr = ["ryu", 25, true];
arr[0] = false;
arr[1] = "yoshi";
arr = [30, false, "yoshi"];

let tuple: [string, number, boolean] = ["ryu", 25, true];
tuple[0] = "ken";
tuple[1] = 30;
// tuple[0] = 30; // error
// tuple[1] = "ken"; // error

let student: [string, number];

student = ["chun-li", 223423];
// student = [223423, "chun-li"]; // error
