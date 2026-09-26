import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');
  await page.getByRole('link', { name: 'Check Box' }).click();
  await page.getByRole('checkbox', { name: 'Select Home' }).click();
  await expect(page.getByRole('heading', { name: 'Check Box' })).toBeVisible();
});