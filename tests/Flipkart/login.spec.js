import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.flipkart.com/');
  await expect(page.getByText('LoginGet access to your')).toBeVisible();
  await page.locator('form').filter({ hasText: 'Enter Email/Mobile numberBy' }).getByRole('textbox').click();
  await page.locator('form').filter({ hasText: 'Enter Email/Mobile numberBy' }).getByRole('textbox').fill('9966958085');
  await page.getByRole('button', { name: 'Request OTP' }).click();
  await page.getByRole('textbox').nth(1).fill('6');
  await page.getByRole('textbox').nth(2).fill('2');
  await page.getByRole('textbox').nth(3).fill('7');
  await page.getByRole('textbox').nth(4).fill('8');
  await page.getByRole('textbox').nth(5).fill('1');
  await page.locator('div:nth-child(6) > .xkp9Hl').fill('4');
  await expect(page.getByRole('img', { name: 'Image' }).nth(1)).toBeVisible();
  await expect(page.getByRole('link', { name: 'For You' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Account' })).toBeVisible();
  await page.getByRole('link', { name: 'Mobiles', exact: true }).click();
  await page.getByRole('link', { name: 'iPhone' }).click();
  await page.getByRole('link', { name: 'Image' }).first().click();
  await expect(page.locator('div').filter({ hasText: /^Key Highlights$/ }).nth(3)).toBeVisible();
  await expect(page.getByText('iPhone 17 Pro (Cosmic Orange, 512 GB)', { exact: true })).toBeVisible();
});