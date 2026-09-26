import { test, expect } from '@playwright/test';

import textboxdata from '../../testdata/textbox.json';

test('Fill DemoQA text box with JSON data', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');
  await page.getByRole('textbox', { name: 'Full Name' }).fill(textboxdata.Fullname);
  await page.getByRole('textbox', { name: 'name@example.com' }).fill(textboxdata.Email);
  await page.getByRole('textbox', { name: 'Current Address' }).fill(textboxdata.CurrentAddress);
  await page.locator('#permanentAddress').fill(textboxdata.PermanentAddress);

  const submitButton = page.getByRole('button', { name: 'Submit' });
  await submitButton.focus();
  await submitButton.press('Enter');

  await expect(page.locator('#output')).toContainText(`Name:${textboxdata.Fullname}`);
  await expect(page.locator('#output')).toContainText(`Email:${textboxdata.Email}`);
  await expect(page.locator('#output')).toContainText(`Current Address :${textboxdata.CurrentAddress}`);
  await expect(page.locator('#output')).toContainText(`Permananet Address :${textboxdata.PermanentAddress}`);
});