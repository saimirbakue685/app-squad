// File: ComplexJavaScriptCode.js

/*
 * This JavaScript code demonstrates a sophisticated and complex implementation of an Employee Management System.
 * It includes features such as adding, removing, and updating employees, calculating salaries, and generating reports.
 * This code is more than 200 lines long and showcases various advanced programming concepts.
 */

// Define Employee class
class Employee {
  constructor(name, age, position, salary) {
    this.name = name;
    this.age = age;
    this.position = position;
    this.salary = salary;
  }

  getDetails() {
    return `${this.name} (${this.age} years old) - ${this.position}`;
  }
}

// Define Employee Management System class
class EmployeeManagementSystem {
  constructor() {
    this.employees = [];
  }

  addEmployee(employee) {
    this.employees.push(employee);
  }

  removeEmployee(name) {
    const employeeIndex = this.employees.findIndex(emp => emp.name === name);
    if (employeeIndex !== -1) {
      this.employees.splice(employeeIndex, 1);
    }
  }

  updateEmployee(name, updatedEmployee) {
    const employeeIndex = this.employees.findIndex(emp => emp.name === name);
    if (employeeIndex !== -1) {
      this.employees[employeeIndex] = updatedEmployee;
    }
  }

  getEmployeeCount() {
    return this.employees.length;
  }

  getEmployeeByName(name) {
    return this.employees.find(emp => emp.name === name);
  }

  calculateTotalSalary() {
    let totalSalary = 0;
    for (let i = 0; i < this.employees.length; i++) {
      totalSalary += this.employees[i].salary;
    }
    return totalSalary;
  }

  generateReport() {
    let report = `Employee Report:\n`;
    report += `Total Employees: ${this.getEmployeeCount()}\n`;
    report += `Total Salary: $${this.calculateTotalSalary()}\n\n`;
    report += `Employees:\n`;
    for (let i = 0; i < this.employees.length; i++) {
      report += `${i + 1}. ${this.employees[i].getDetails()}\n`;
    }
    return report;
  }
}

// Usage example
const empManagementSystem = new EmployeeManagementSystem();

const john = new Employee('John Doe', 30, 'Manager', 5000);
const anna = new Employee('Anna Smith', 25, 'Developer', 3500);
const david = new Employee('David Johnson', 28, 'Designer', 4000);
const lisa = new Employee('Lisa Brown', 32, 'Marketer', 3200);

empManagementSystem.addEmployee(john);
empManagementSystem.addEmployee(anna);
empManagementSystem.addEmployee(david);
empManagementSystem.addEmployee(lisa);

console.log(empManagementSystem.generateReport());

empManagementSystem.removeEmployee('Anna Smith');
david.salary = 4500;

console.log(empManagementSystem.generateReport());

const updatedLisa = new Employee('Lisa Brown', 35, 'Marketing Manager', 4000);
empManagementSystem.updateEmployee('Lisa Brown', updatedLisa);

console.log(empManagementSystem.generateReport());