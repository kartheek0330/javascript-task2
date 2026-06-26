// ====================================
// Task 1: Employee Management System
// ====================================

let employees = [
    {
        name: "kartheek",
        id: 330,
        salary: 40000
    },
    {
        name: "prasad",
        id: 131,
        salary: 70000
    }
];

for (let emp of employees) {
    console.log("Employee Name:", emp.name);
    console.log("Employee ID:", emp.id);
    console.log("Salary:", emp.salary);

    if (emp.salary >= 50000) {
        console.log("Employee Eligible For Bonus");
    } else {
        console.log("Employee Not Eligible For Bonus");
    }

    console.log("----------------");
}

// ====================================
// Task 2: Student Result Portal
// ====================================

let mark1 = Number(prompt("Enter Mark 1:"));
let mark2 = Number(prompt("Enter Mark 2:"));
let mark3 = Number(prompt("Enter Mark 3:"));

let total = mark1 + mark2 + mark3;
let percentage = total / 3;

console.log("Total Marks:", total);
console.log("Percentage:", percentage);

if (percentage >= 90) {
    console.log("Grade: A+");
} else if (percentage >= 80) {
    console.log("Grade: A");
} else if (percentage >= 70) {
    console.log("Grade: B");
} else if (percentage >= 60) {
    console.log("Grade: C");
} else {
    console.log("Grade: Fail");
}

// ====================================
// Task 3: E-Commerce Cart
// ====================================

let products = [
    { name: "Laptop", price: 70000 },
    { name: "Mouse", price: 1000 },
    { name: "Keyboard", price: 2000 }
];

function calculateBill(items) {
    let totalBill = 0;

    for (let item of items) {
        totalBill += item.price;
    }

    if (totalBill > 5000) {
        let discount = totalBill * 0.10;
        totalBill -= discount;
        console.log("10% Discount Applied:", discount);
    }

    return totalBill;
}

console.log("Final Bill:", calculateBill(products));

// ====================================
// Task 4: Login Authentication
// ====================================

let username = "admin";
let password = "03301485";

let enteredUsername = prompt("Enter Username:");
let enteredPassword = prompt("Enter Password:");

let loginResult =
    (enteredUsername === username &&
        enteredPassword === password)
        ? "Login Success"
        : "Invalid Credentials";

console.log(loginResult);

// ====================================
// Task 5: Traffic Signal System
// ====================================

let signal = prompt("Enter Signal Color:");

switch (signal.toLowerCase()) {
    case "red":
        console.log("Stop");
        break;

    case "yellow":
        console.log("Ready");
        break;

    case "green":
        console.log("Go");
        break;

    default:
        console.log("Invalid Signal");
}

// ====================================
// Task 6: ATM Withdrawal System
// ====================================

let balance = Number(prompt("Enter Balance:"));
let withdrawal = Number(prompt("Enter Withdrawal Amount:"));

if (withdrawal > 0 && withdrawal <= balance) {
    balance -= withdrawal;

    console.log("Withdrawal Successful");
    console.log("Remaining Balance:", balance);
} else {
    console.log("Insufficient Balance");
}

// ====================================
// Task 7: Online Food Order
// ====================================

function placeOrder(callback) {
    console.log("Order Received");
    callback();
}

function prepareFood(callback) {
    console.log("Food Preparing");
    callback();
}

function deliverFood() {
    console.log("Food Delivered");
}

placeOrder(function () {
    prepareFood(deliverFood);
});

// ====================================
// Task 8: Cashback Generator
// ====================================

function* cashbackOffers() {
    yield "10% Cashback";
    yield "20% Cashback";
    yield "50% Cashback";
    yield "Better Luck Next Time";
}

let offer = cashbackOffers();

console.log(offer.next().value);
console.log(offer.next().value);
console.log(offer.next().value);
console.log(offer.next().value);

// ====================================
// Task 9: Hospital Patient Check
// ====================================

let age = Number(prompt("Enter Age:"));
let weight = Number(prompt("Enter Weight:"));

if (age > 18) {
    if (weight > 50) {
        console.log("Eligible For Treatment");
    } else {
        console.log("Not Eligible");
    }
} else {
    console.log("Not Eligible");
}

// ====================================
// Task 10: Mini Employee Portal
// ====================================

let employeeList = [
    { id: 101, name: "kartheek", salary: 40000 },
    { id: 102, name: "prasad", salary: 60000 }
];

// Add Employee
function addEmployee(id, name, salary) {
    employeeList.push({
        id: id,
        name: name,
        salary: salary
    });

    console.log("Employee Added");
}

// View Employees
function viewEmployees() {
    console.log("Employee List");

    employeeList.forEach(emp => {
        console.log(emp);
    });
}

// Calculate Bonus
function calculateBonus() {
    employeeList.forEach(emp => {
        if (emp.salary >= 50000) {
            console.log(emp.name + " Eligible For Bonus");
        } else {
            console.log(emp.name + " Not Eligible For Bonus");
        }
    });
}

// Search Employee By ID
function searchEmployee(id) {
    let emp = employeeList.find(emp => emp.id === id);

    if (emp) {
        console.log("Employee Found:", emp);
    } else {
        console.log("Employee Not Found");
    }
}

// Delete Employee
function deleteEmployee(id) {
    employeeList = employeeList.filter(emp => emp.id !== id);

    console.log("Employee Deleted");
}

// Total Employees Count
function totalEmployees() {
    console.log("Total Employees:", employeeList.length);
}

// Function Calls
addEmployee(103, "Kartheek", 55000);

viewEmployees();

calculateBonus();

searchEmployee(102);

deleteEmployee(101);

viewEmployees();

totalEmployees();