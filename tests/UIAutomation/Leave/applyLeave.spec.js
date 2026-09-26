import { test, expect } from '@playwright/test';

const moment = require('moment');

const currentDate = moment().format('YYYY-MM-DD')
const date = moment().add(3, 'days').format('YYYY-MM-DD')

test('Login with valid Credntials ', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill(process.env.APP_USERNAME);
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.APP_PASSWORD);
  await page.getByRole('button', { name: 'Login' }).click();
  await page.locator(`//div[@id='app']/div[1]/div[1]/aside[1]/nav[1]/div[2]/ul[1]/li[3]/a[1]`).click()
  await page.locator(`(//li[@class='oxd-topbar-body-nav-tab']//a)[1]`).click()
  await page.locator(`//div[@class="oxd-select-text-input"]`).click()
  await page.locator(`//div[@class="oxd-select-text-input"][text()='CAN - Vacation']`).click()
  await page.locator(`(//div[@class='oxd-date-input']//input)[1]`).fill(currentDate)
  await page.locator(`//label[normalize-space(text())='To Date']/following::input`).fill(date)
  await page.locator(`//label[normalize-space(text())='Comments']/following::textarea`).fill("I am going to goa")
  await page.locator(`//button[@type="submit"]`).click()
  await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/leave/viewLeaveList')
  
});
