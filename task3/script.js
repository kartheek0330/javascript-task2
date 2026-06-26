//task1//
let staffMember = prompt("Enter Employee Name:");
let workerAge = Number(prompt("Enter Employee Age:"));
let divisionName = prompt("Enter Employee Department:");
let monthlyPay = Number(prompt("Enter Employee Salary:"));

let employeeDetails = {
    name: staffMember,
    age: workerAge,
    department: divisionName,
    salary: monthlyPay
};

console.log("Employee Details");
console.log(employeeDetails);

if (monthlyPay > 30000) {
    console.log("Eligible for Bonus");
} else {
    console.log("Not Eligible");
}

//task2//
let itemLabel = prompt("Enter Product Name:");
let unitCost = Number(prompt("Enter Product Price:"));
let itemCount = Number(prompt("Enter Quantity:"));

let totalAmount = unitCost * itemCount;
let finalBill;

if (totalAmount > 5000) {
    let discountValue = totalAmount * 0.10;
    finalBill = totalAmount - discountValue;

    console.log("Product Name: " + itemLabel);
    console.log("Total Bill: " + totalAmount);
    console.log("Discount: " + discountValue);
    console.log("Final Amount: " + finalBill);
} else {
    finalBill = totalAmount;

    console.log("Product Name: " + itemLabel);
    console.log("Total Bill: " + totalAmount);
    console.log("Final Amount: " + finalBill);
}

//task3//
let learnerName = prompt("Enter Student Name:");
let examScore = Number(prompt("Enter Marks:"));

console.log("Student Name: " + learnerName);
console.log("Marks: " + examScore);

if (examScore >= 90) {
    console.log("Grade A");
} else if (examScore >= 75) {
    console.log("Grade B");
} else if (examScore >= 50) {
    console.log("Grade C");
} else {
    console.log("Fail");
}

//task4//
let accountOwner = prompt("Enter User Name:");
let availableFunds = Number(prompt("Enter Account Balance:"));
let cashRequest = Number(prompt("Enter Withdrawal Amount:"));

console.log("User Name: " + accountOwner);

if (cashRequest <= availableFunds) {
    console.log("Transaction Successful");
} else {
    console.log("Insufficient Balance");
}

//task5//
let savedUser = "kartheek123";
let savedPass = "031021";

let enteredUser = prompt("Enter Username:");
let enteredPass = prompt("Enter Password:");

if (enteredUser === savedUser && enteredPass === savedPass) {
    console.log("Login Successful");
} else {
    console.log("Invalid Username or Password");
}

//task6//
let menuItems = [
    "Soups",
    "Biryani",
    "Burger",
    "French frice",
    "Noodles",
    "Dosa",
    "Pizza",
    "Ice Cream"
];

console.log("First Item: " + menuItems[0]);
console.log("Last Item: " + menuItems[menuItems.length - 1]);
console.log("Total Number of Items: " + menuItems.length);

for (let foodName of menuItems) {
    console.log(foodName);
}

//task7//
let staffProfile = {
    fullName: "kartheek",
    currentAge: 24,
    workUnit: "Developer",
    annualPackage: 55000,
    yearsWorked: 1
};

for (let detailKey in staffProfile) {
    console.log(detailKey + " : " + staffProfile[detailKey]);
}

//task8//
let signalShade = prompt("Enter Signal Color:");

switch (signalShade) {
    case "Red":
        console.log("Stop");
        break;

    case "Yellow":
        console.log("Ready");
        break;

    case "Green":
        console.log("Go");
        break;

    default:
        console.log("Invalid Signal");
}

//task9//
let visitorAge = Number(prompt("Enter Age:"));

if (visitorAge >= 0 && visitorAge <= 12) {
    console.log("Child");
} else if (visitorAge >= 13 && visitorAge <= 19) {
    console.log("Teenager");
} else if (visitorAge >= 20 && visitorAge <= 59) {
    console.log("Adult");
} else {
    console.log("Senior Citizen");
}

//task10//
let teamMember = prompt("Enter Employee Name:");
let attendanceStatus = prompt("Enter Attendance (Present/Absent):");

let resultMessage =
    attendanceStatus === "Present"
        ? "Attendance: Present"
        : "Attendance: Absent";

console.log("Welcome " + teamMember);
console.log(resultMessage);
