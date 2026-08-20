import { test, expect } from '@playwright/test';

test('Verify Add Employee With Basic Details', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  console.log("Enter username");
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('link', { name: 'Dashboard' })).toBeVisible();
  await page.waitForTimeout(6000);/*It means Waiting time for test case 6 sec => 1sec = 1000*/
  await page.getByRole('link', { name: 'PIM' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Add Employee' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('Ramarao ');
  await page.getByRole('textbox', { name: 'Middle Name' }).click();
  await page.getByRole('textbox', { name: 'Middle Name' }).fill('akp');
  await page.getByRole('textbox', { name: 'Last Name' }).click();
  await page.getByRole('textbox', { name: 'Last Name' }).fill('mpk');
  await page.getByRole('textbox').nth(4).click();
  await page.getByRole('textbox').nth(4).fill('030303');
  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page.getByRole('link', { name: 'Employee List' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Personal Details' })).toBeVisible();
  await page.close();
});
