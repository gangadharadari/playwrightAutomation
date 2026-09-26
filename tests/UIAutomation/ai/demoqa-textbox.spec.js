import { test, expect } from '@playwright/test';

test('Fill the DemoQA text box and verify submitted data', async ({ page }) => {
  const testData = {
    fullName: 'Test User',
    email: 'test.user@example.com',
    currentAddress: '123 Main Street',
    permanentAddress: '456 Test Avenue',
  };

  await page.goto('https://demoqa.com/text-box');
  await page.getByRole('textbox', { name: 'Full Name' }).fill(testData.fullName);
  await page.getByRole('textbox', { name: 'name@example.com' }).fill(testData.email);
  await page.getByRole('textbox', { name: 'Current Address' }).fill(testData.currentAddress);
  await page.locator('#permanentAddress').fill(testData.permanentAddress);

  const submitButton = page.getByRole('button', { name: 'Submit' });
  await submitButton.focus();
  await submitButton.press('Enter');

  await expect(page.locator('#output')).toContainText(`Name:${testData.fullName}`);
  await expect(page.locator('#output')).toContainText(`Email:${testData.email}`);
  await expect(page.locator('#output')).toContainText(`Current Address :${testData.currentAddress}`);
  await expect(page.locator('#output')).toContainText(`Permananet Address :${testData.permanentAddress}`);
});