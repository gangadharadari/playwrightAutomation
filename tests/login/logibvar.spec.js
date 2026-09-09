import { test, expect } from '@playwright/test';

import logindata from "../../testdata/login.json"

// test('Login with valid Credntials ', async ({ page }) => {
// let username = "Admin"
// let password = "admin123"
//   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
//   await page.getByRole('textbox', { name: 'Username' }).fill(username);
//   await page.getByRole('textbox', { name: 'Password' }).fill(password);
//   await page.getByRole('button', { name: 'Login' }).click();
//   await page.getByRole('link', { name: 'Dashboard' }).click();
//   await expect(page.getByRole('link', { name: 'Dashboard' })).toBeVisible();
//   await page.getByText('Time at WorkPunched').click();
//   await page.close();
// });

test('Login with valid Credntials ', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

     let usernametext = await page.locator("//p[text()='Username : Admin']").textContent(); 
     console.log("Username text content:", usernametext);
     let user = usernametext.split(':')[1].trim();
     console.log("Extracted username:", user);
     let passwordtext = await page.locator("//p[text()='Password : admin123']").textContent();
     console.log("Password text content:", passwordtext);  
     let pass = passwordtext.split(':')[1].trim();
     console.log("Extracted password:", pass); 

  await page.getByRole('textbox', { name: 'Username' }).fill(user);
  await page.getByRole('textbox', { name: 'Password' }).fill(pass);
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Dashboard' }).click();
  await expect(page.getByRole('link', { name: 'Dashboard' })).toBeVisible();
  await page.getByText('Time at WorkPunched').click();
  await page.close();
});