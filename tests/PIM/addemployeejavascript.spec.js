import { test, expect } from '@playwright/test';

import logindata from "../../testdata/login.json"

const { faker } = require('@faker-js/faker');
// import { faker } from '@faker-js/faker';

test('Verify Add Employee With Basic Details', async ({ page }) => {

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  await page.getByRole('textbox', { name: 'Username' }).click();
  console.log("Enter username");

  await page.getByRole('textbox', { name: 'Username' }).fill(logindata.username);

  await page.getByRole('textbox', { name: 'Password' }).click();
  console.log("Enter password");

  await page.getByRole('textbox', { name: 'Password' }).fill(logindata.password);

  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('link', { name: 'Dashboard' })).toBeVisible();

  await page.waitForTimeout(6000);/*It means Waiting time for test case 6 sec => 1sec = 1000*/

  await page.getByRole('link', { name: 'PIM' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Add Employee' }).click();

  await page.getByRole('textbox', { name: 'First Name' }).click();

  console.log("Enter First Name");
  let firstname = faker.person.firstName();
  await page.getByRole('textbox', { name: 'First Name' }).fill(firstname);
  console.log("Enter First Name: " + firstname);

  await page.getByRole('textbox', { name: 'Middle Name' }).click();
  console.log("Enter Middle Name");
  let middlename = faker.person.firstName();
  await page.getByRole('textbox', { name: 'Middle Name' }).fill(middlename);
  console.log("Enter Middle Name: " + middlename);

  await page.getByRole('textbox', { name: 'Last Name' }).click();
  console.log("Enter Last Name");
  let lastname = faker.person.lastName();
  await page.getByRole('textbox', { name: 'Last Name' }).fill(lastname);
  console.log("Enter Last Name: " + lastname);

  await page.getByRole('textbox').nth(4).click();
  console.log("Enter Employee ID");
  let empid = faker.string.alphanumeric(6);
  await page.getByRole('textbox').nth(4).fill(empid);
  console.log("Enter Employee ID: " + empid);

  await page.getByRole('button', { name: 'Save' }).click();

  await expect(page.getByRole('link', { name: 'Employee List' })).toBeVisible();

  await expect(page.getByRole('link', { name: 'Personal Details' })).toBeVisible();
  
  await page.close();

});