// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.goto('https://demoqa.com');
//   await expect(page.locator('xpath=(//div[@id=\'root\']//img)[1]')).toBeVisible();
//   await page.locator('xpath=(//div[contains(@class,\'avatar mx-auto\')])[6]').click();
// //   await expect(page).toHaveURL("https://demoqa.com/elements");
//   await page.locator("//span[normalize-space(text())='Web Tables']").click();
//   await expect(page.locator("https://demoqa.com/webtables")).toBeVisible();
//   await page.locator("//button[normalize-space(text())='Add']").click();
//   await expect(page.locator("//div[normalize-space(text())='Registration Form']")).toBeVisible();
//   await page.locator('//input[@placeholder=\'First Name\']').fill(abc);
//   await page.locator('//input[@placeholder=\'Last Name\']').fill("xyz");
//   await page.locator('//input[@placeholder=\'name@example.com\']').fill("xyz@abc.com");
//   await page.locator('//input[@placeholder=\'Age\']').fill(25);
//   await page.locator("locator('//input[@placeholder=\'Salary\']')").fill(45000); 
//   await page.locator('//input[@placeholder=\'Department\']').fill(IT);
//   await page.locator('//button[@type=\'submit\']').click();
//   await expect(page).toHaveURL("https://demoqa.com/webtables");
//   await page.waitForTimeout(2000)
//   await page.close();

// }
// )

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoqa.com/');
 
  await page.getByRole('link', { name: 'Elements' }).click();
  await expect(page.getByText('Elements')).toBeVisible();
  await page.getByRole('link', { name: 'Web Tables' }).click();
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('abc');
  await page.getByRole('textbox', { name: 'Last Name' }).fill('xyz');
  await page.getByRole('textbox', { name: 'name@example.com' }).fill('abc@xyz.com');
  await page.getByRole('textbox', { name: 'Age' }).fill('21');
  await page.getByRole('textbox', { name: 'Salary' }).fill('532442');
  await page.getByRole('textbox', { name: 'Department' }).fill('GN');
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByRole('heading', { name: 'Web Tables' })).toBeVisible();
});

