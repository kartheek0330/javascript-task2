        // ==========================
        // Task 1: Employee Registration
        // ==========================

        const employeeName = "kartheek";
        const employeeId = "EMP0330";
        const department = "Development";
        let salary = 50000;
        const isPermanent = true;

        console.log("Employee Details");
        console.log("----------------");
        console.log(`Name       : ${employeeName}`);
        console.log(`ID         : ${employeeId}`);
        console.log(`Department : ${department}`);
        console.log(`Salary     : ${salary}`);
        console.log(`Permanent  : ${isPermanent}`);

        // ==========================
        // Task 2: Employee Skills
        // ==========================

        const skills = [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Git",
            "Node.js"
        ];

        console.log("\nEmployee Skills");
        console.log(`First Skill : ${skills[0]}`);
        console.log(`Third Skill : ${skills[2]}`);
        console.log(`Last Skill  : ${skills[skills.length - 1]}`);
        console.log(`Total Skills: ${skills.length}`);

        // ==========================
        // Task 3: Company Object
        // ==========================

        const company = {
            companyName: "Stackly IT",
            location: "Hyderabad",
            employees: 150,
            technologies: [
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "Node.js"
            ]
        };

        console.log("\nCompany Details");
        console.log(`Company Name      : ${company.companyName}`);
        console.log(`Location          : ${company.location}`);
        console.log(`Second Technology : ${company.technologies[1]}`);
        console.log(`Total Technologies: ${company.technologies.length}`);

        // ==========================
        // Task 4: Salary Calculator
        // ==========================

        let basicSalary = 30000;
        let bonus = 5000;

        let totalSalary = basicSalary + bonus;
        let tax = totalSalary * 0.10;
        let finalSalary = totalSalary - tax;

        console.log("\nSalary Calculator");
        console.log(`Basic Salary : ₹${basicSalary}`);
        console.log(`Bonus        : ₹${bonus}`);
        console.log(`Total Salary : ₹${totalSalary}`);
        console.log(`Tax (10%)    : ₹${tax}`);
        console.log(`Final Salary : ₹${finalSalary}`);

        // ==========================
        // Task 5: Attendance Checker
        // ==========================

        let attendance = 92;

        let examStatus =
            attendance >= 75
                ? "Eligible for Exam"
                : "Not Eligible";

        console.log("\nAttendance Checker");
        console.log(`Attendance : ${attendance}%`);
        console.log(`Status     : ${examStatus}`);

        // ==========================
        // Task 6: Login Verification
        // ==========================

        let username = "admin";
        let password = "12345";

        if (username === "admin" && password === "12345") {
            console.log("\nLogin Successful");
        } else {
            console.log("\nInvalid Credentials");
        }

        // ==========================
        // Task 7: Product Billing
        // ==========================

        const productName = "Laptop";
        const productPrice = 45000;
        const quantity = 2;

        const totalBill = productPrice * quantity;

        console.log("\nProduct Billing");
        console.log(`Product  : ${productName}`);
        console.log(`Price    : ₹${productPrice}`);
        console.log(`Quantity : ${quantity}`);
        console.log(`Total    : ₹${totalBill}`);

        // ==========================
        // Task 8: Increment & Decrement
        // ==========================

        let visitors = 80;

        console.log("\nIncrement & Decrement");

        console.log(++visitors); // 81
        console.log(visitors++); // 81
        console.log(visitors);   // 82

        console.log(--visitors); // 81
        console.log(visitors--); // 81
        console.log(visitors);   // 80

        // ==========================
        // Task 9: Comparison Checker
        // ==========================

        console.log("\nComparison Checker");

        console.log(10 == "10");    // true
        console.log(10 === "10");   // false
        console.log(20 != "20");    // false
        console.log(20 !== "20");   // true
        console.log(8< 10);        // true
        console.log(15 >= 20);      // false
        console.log(100 <= 100);    // true

        // ==========================
        // Task 10: User Interaction
        // ==========================

        let empName = prompt("Enter Employee Name:");
        let empAge = prompt("Enter Employee Age:");

        let joinCompany = confirm(
            "Do you want to join our company?"
        );

        if (joinCompany) {
            alert(`Welcome ${empName}`);
        } else {
            alert("Thank You");
        }

        // ==========================
        // Final Challenge
        // ==========================

        const employee = {
            name: "kartheek",
            id: "EMP0330",
            department: "Development",
            experience: 0,
            salary: 50000
        };

        const employeeBonus = 8000;
        const finalEmpSalary =
            employee.salary + employeeBonus;

        const loginStatus =
            (username === "admin" &&
                password === "12345")
                ? "Success"
                : "Failed";

        const attendanceStatus =
            attendance >= 75
                ? "Eligible"
                : "Not Eligible";

        console.log("\n==============================");
        console.log("      EMPLOYEE PORTAL");
        console.log("==============================");

        console.log(`Employee Name : ${employee.name}`);
        console.log(`Employee ID   : ${employee.id}`);
        console.log(`Department    : ${employee.department}`);
        console.log(`Experience    : ${employee.experience} Years`);
        console.log(`Salary        : ₹${employee.salary}`);
        console.log(`Bonus         : ₹${employeeBonus}`);
        console.log(`Final Salary  : ₹${finalEmpSalary}`);
        console.log(`Skills        : ${skills.join(", ")}`);
        console.log(`Attendance    : ${attendance}%`);
        console.log(`Exam Status   : ${attendanceStatus}`);
        console.log(`Login Status  : ${loginStatus}`);
        console.log(`Company       : ${company.companyName}`);
        console.log(`Location      : ${company.location}`);
    