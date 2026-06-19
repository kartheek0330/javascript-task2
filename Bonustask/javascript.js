
// Variables
var passengerName = "Kartheek";
let age = 22;
const airline = "IndiGo";

// alert()
alert("Welcome to " + airline + " Flight Booking System");

// prompt()
let destination = prompt("Enter your destination:");
let ticketPrice = Number(prompt("Enter ticket price:"));

// confirm()
let confirmBooking = confirm("Do you want to book the ticket?");

// Array
let facilities = ["Food", "WiFi", "Window Seat"];

// Object
let passenger = {
    name: passengerName,
    age: age,
    destination: destination
};

// Arithmetic Operators
let gst = ticketPrice * 0.18;
let totalAmount = ticketPrice + gst;

// Assignment Operators
let discount = 0;
discount += 500;

let finalAmount = totalAmount - discount;

// Relational Operators
let isAdult = age >= 18;

// Logical Operators
let eligible = isAdult && confirmBooking;

// Ternary Operator
let status = eligible ? "Booking Confirmed" : "Booking Failed";

// Template Strings
console.log(`Passenger Name: ${passenger.name}`);
console.log(`Age: ${passenger.age}`);
console.log(`Airline: ${airline}`);
console.log(`Destination: ${passenger.destination}`);
console.log(`Facilities: ${facilities.join(", ")}`);
console.log(`Ticket Price: ₹${ticketPrice}`);
console.log(`GST (18%): ₹${gst}`);
console.log(`Discount: ₹${discount}`);
console.log(`Final Amount: ₹${finalAmount}`);
console.log(`Booking Status: ${status}`);

// Console Methods
console.log("Booking Details Displayed");
console.warn("Please arrive 2 hours before departure.");
console.error("Error message example.");
console.table(passenger);