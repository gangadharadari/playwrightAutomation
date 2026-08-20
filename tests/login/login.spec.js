import { test, expect } from '@playwright/test';

import logindata from "../../testdata/login.json"

test('Login with valid Credntials ', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill(process.env.APP_USERNAME);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.APP_PASSWORD);
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Dashboard' }).click();
  await expect(page.getByRole('link', { name: 'Dashboard' })).toBeVisible();
  await page.getByText('Time at WorkPunched').click();
  await page.close();
});

test('Login with Valid username and Invalid password', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Username' }).fill(logindata.username);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(logindata.wrongpassword);
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('Invalid credentials')).toBeVisible();
});

test('Login with invalid username and valid password', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill(logindata.wrongusername);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(logindata.password);
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('Invalid credentials')).toBeVisible();
  await page.close();
});

test('Login with invalid username and Invalid password', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill(logindata.wrongusername);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(logindata.wrongpassword);
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('Invalid credentials')).toBeVisible();
  await page.close();
});

test('try to login with blank spaces', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('Required').first()).toBeVisible();
  await page.getByText('Required').nth(1).click();
  await expect(page.getByText('Required').nth(1)).toBeVisible();
});

// test('Lanching page', async ({ page }) => {
//   await page.goto('/');
  
// });