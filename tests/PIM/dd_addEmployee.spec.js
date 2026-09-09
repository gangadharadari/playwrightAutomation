import { test, expect } from '@playwright/test';

//import logindata from "../../../Playwright_auto_js/testdata/login.json"
let username = "Admin";
let password = "admin123";
let URL = "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login";

import { faker } from '@faker-js/faker';

const employeeData = {

  emp1 : {
    firstName : faker.person.fullName(),
    middleName : faker.person.firstName(),
    lastName : faker.person.lastName(),
    employeeId : faker.string.numeric(6)    
  },
  emp2 : {
    firstName : faker.person.fullName(),
    middleName : faker.person.firstName(),
    lastName : faker.person.lastName(),
    employeeId : faker.string.numeric(6)    
  },
  emp3 : {
    firstName : faker.person.fullName(),
    middleName : faker.person.firstName(),  
    lastName : faker.person.lastName(),
    employeeId : faker.string.numeric(6)    
  },  
  emp4 : {
    firstName : faker.person.fullName(),
    middleName : faker.person.firstName(),
    lastName : faker.person.lastName(),
    employeeId : faker.string.numeric(6)
  },
  emp5 : {
    firstName : faker.person.fullName(),
    middleName : faker.person.firstName(),
    lastName : faker.person.lastName(),
    employeeId : faker.string.numeric(6)
  }

}

for (let emp in employeeData) {
test(`Verify Add Employee With Basic Details - ${emp}`, async ({ page }) => {
//test('Verify Add Employee With Basic Details - ' + emp, async ({ page }) => {
  await page.goto(URL);

  await page.getByRole('textbox', { name: 'Username' }).fill(username);
  await page.getByRole('textbox', { name: 'Password' }).fill(password);
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page.getByRole('link', { name: 'Dashboard' })).toBeVisible();
  await page.getByRole('link', { name: 'PIM' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Add Employee' }).click();

  await page.getByRole('textbox', { name: 'First Name' }).fill(employeeData[emp].firstName);
  console.log("First Name: " + employeeData[emp].firstName);

  await page.getByRole('textbox', { name: 'Middle Name' }).fill(employeeData[emp].middleName);
  console.log("Middle Name: " + employeeData[emp].middleName);

  await page.getByRole('textbox', { name: 'Last Name' }).fill(employeeData[emp].lastName);
  console.log("Last Name: " + employeeData[emp].lastName);

  await page.getByRole('textbox').nth(4).click();
  await page.getByRole('textbox').nth(4).fill(employeeData[emp].employeeId );
  console.log("Employee ID: " + employeeData[emp].employeeId);

  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page.getByRole('link', { name: 'Employee List' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Personal Details' })).toBeVisible();
  
}
)
}
