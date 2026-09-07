import { test, expect } from '@playwright/test';

import { faker } from '@faker-js/faker';

test('Fill DemoQA text box with Faker data', async ({ page }) => {
  const testData = {
    fullName: faker.person.fullName(),
    email: faker.internet.email(),
    currentAddress: faker.location.streetAddress(),
    permanentAddress: faker.location.streetAddress(),
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