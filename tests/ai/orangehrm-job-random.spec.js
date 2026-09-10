import { test, expect } from '@playwright/test';

const loginUrl = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';
const dashboardUrl = 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index';

function randomToken() {
  return `${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
}

async function loginAndOpenJobMenu(page) {
  await page.goto(loginUrl, { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page).toHaveURL(dashboardUrl);
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByText('Job', { exact: true }).click();
}

async function submitAndVerify(page, expectedUrl) {
  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page).toHaveURL(expectedUrl);
}

test('Add a random OrangeHRM job title', async ({ page }) => {
  const token = randomToken();
  const jobTitle = `Automation Job ${token}`;

  await loginAndOpenJobMenu(page);
  await page.getByRole('menuitem', { name: 'Job Titles' }).click();
  await page.getByRole('button', { name: 'Add' }).click();
  await page.locator('input').nth(1).fill(jobTitle);
  await page.locator('textarea').nth(0).fill(`Job description ${token}`);
  await page.locator('textarea[placeholder="Add note"]').fill(`Notes ${token}`);
  await submitAndVerify(page, /\/web\/index\.php\/admin\/viewJobTitleList/);
  await expect(page.getByText(jobTitle)).toBeVisible();
});

test('Add a random OrangeHRM pay grade', async ({ page }) => {
  const gradeName = `Grade ${randomToken()}`;

  await loginAndOpenJobMenu(page);
  await page.getByRole('menuitem', { name: 'Pay Grades' }).click();
  await page.getByRole('button', { name: 'Add' }).click();
  await page.locator('input').nth(1).fill(gradeName);
  await submitAndVerify(page, /\/web\/index\.php\/admin\/payGrade/);

});

test('Add a random OrangeHRM employment status', async ({ page }) => {
  const statusName = `Status ${randomToken()}`;

  await loginAndOpenJobMenu(page);
  await page.getByRole('menuitem', { name: 'Employment Status' }).click();
  await page.getByRole('button', { name: 'Add' }).click();
  await page.locator('input').nth(1).fill(statusName);
  await submitAndVerify(page, /\/web\/index\.php\/admin\/employmentStatus/);
  await expect(page.getByText(statusName)).toBeVisible();
});

test('Add a random OrangeHRM job category', async ({ page }) => {
  const categoryName = `Category ${randomToken()}`;

  await loginAndOpenJobMenu(page);
  await page.getByRole('menuitem', { name: 'Job Categories' }).click();
  await page.getByRole('button', { name: 'Add' }).click();
  await page.locator('input').nth(1).fill(categoryName);
  await submitAndVerify(page, /\/web\/index\.php\/admin\/jobCategory/);
  await expect(page.getByText(categoryName)).toBeVisible();
});