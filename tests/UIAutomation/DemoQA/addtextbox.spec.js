import { test, expect } from '@playwright/test';

import textboxdata from "../../testdata/textbox.json"

import { faker } from '@faker-js/faker';
 

test('Fill textboxes with static values', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');
  await page.getByRole('textbox', { name: 'Full Name' }).fill('Playwright.auto');
  console.log('Playwright.auto');
  await page.getByRole('textbox', { name: 'name@example.com' }).fill('playwright.auto@gmail.com');
  console.log('playwright.auto@gmail.com');
  await page.getByRole('textbox', { name: 'Current Address' }).fill('bangaloree');
  console.log('bangaloree');
  await page.locator('#permanentAddress').fill('bangalore');
  console.log('bangalore');
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByText('Name:Playwright.autoEmail:playwright.auto@gmail.com')).toBeVisible();
});

test('Fill textboxes with JSON data', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');
  await page.getByRole('textbox', { name: 'Full Name' }).fill(textboxdata.Fullname);
  console.log(textboxdata.Fullname);
  await page.getByRole('textbox', { name: 'name@example.com' }).fill(textboxdata.Email);
  console.log(textboxdata.Email);
  await page.getByRole('textbox', { name: 'Current Address' }).fill(textboxdata.CurrentAddress);
  console.log(textboxdata.CurrentAddress);
  await page.locator('#permanentAddress').fill(textboxdata.PermanentAddress);
  console.log(textboxdata.PermanentAddress);
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByText(`Name:${textboxdata.Fullname}Email:${textboxdata.Email}`)).toBeVisible();
});

test('Fill textboxes with faker data', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');
  const fullName = faker.person.fullName();
  await page.getByRole('textbox', { name: 'Full Name' }).fill(fullName);
  console.log("Enter full name: " + fullName);
  const email = faker.internet.email();
  await page.getByRole('textbox', { name: 'name@example.com' }).fill(email);
  console.log("Enter email: " + email);
  const currentAddress = faker.location.streetAddress();
  await page.getByRole('textbox', { name: 'Current Address' }).fill(currentAddress);
  console.log("Enter current address: " + currentAddress);
  const permanentAddress = faker.location.streetAddress();
  await page.locator('#permanentAddress').fill(permanentAddress);
  console.log("Enter permanent address: " + permanentAddress);
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByText(`Name:${fullName}Email:${email}`)).toBeVisible();
});

test('Fill textboxes with JavaScript code', async ({ page }) => {
  const randomdata = (Math.random() + 1).toString(36).substring(7);
  const fullname = "User_" + randomdata;
  const email = "user_" + randomdata + "@example.com";
  const currentAddress = "Current address " + randomdata;
  const permanentAddress = "Permanent address " + randomdata;

  await page.goto('https://demoqa.com/text-box');
  await page.getByRole('textbox', { name: 'Full Name' }).fill(fullname);
  console.log("Enter full name: " + fullname);
  await page.getByRole('textbox', { name: 'name@example.com' }).fill(email);
  console.log("Enter email: " + email);
  await page.getByRole('textbox', { name: 'Current Address' }).fill(currentAddress);
  console.log("Enter current address: " + currentAddress);
  await page.locator('#permanentAddress').fill(permanentAddress);
  console.log("Enter permanent address: " + permanentAddress);
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByText(`Name:${fullname}Email:${email}`)).toBeVisible();
  
});

test('Fill textboxes with environment variables', async ({ page }) => {
      

  await page.goto('https://demoqa.com/text-box');
  await page.getByRole('textbox', { name: 'Full Name' }).fill(process.env.APP_FULLNAME);
  await page.getByRole('textbox', { name: 'name@example.com' }).fill(process.env.APP_EMAIL);
  await page.getByRole('textbox', { name: 'Current Address' }).fill(process.env.APP_CURRENT_ADDRESS);
  await page.locator('#permanentAddress').fill(process.env.APP_PERMANENT_ADDRESS);
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByText(`Name:${process.env.APP_FULLNAME}Email:${process.env.APP_EMAIL}`)).toBeVisible();
});

test('fill the form - CLI', async ({ page }) => {

  await page.goto('https://demoqa.com/text-box');

  await page.getByRole('textbox', { name: 'Full Name' }).fill(process.env.APP_FULLNAME);
  await page.getByRole('textbox', { name: 'name@example.com' }).fill(process.env.APP_EMAIL);
  await page.getByRole('textbox', { name: 'Current Address' }).fill(process.env.APP_CURRENT_ADDRESS);
  await page.locator('#permanentAddress').fill(process.env.APP_PERMANENT_ADDRESS);
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByText(`Name:${process.env.APP_FULLNAME}Email:${process.env.APP_EMAIL}`)).toBeVisible();
});

/*
CLI Command:
$env:APP_FULLNAME='Ravi Playwright tester'; $env:APP_EMAIL='ravitester1213@gmail.com'; $env:APP_CURRENT_ADDRESS='New Bangalore'; $env:APP_PERMANENT_ADDRESS='Old Bangalore';
npx playwright test tests/DemoQA/addtextbox.spec.js -g "fill the form - CLI" --project=chromium --headed
*/


