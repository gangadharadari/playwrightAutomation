import { test, expect } from '@playwright/test';

const loginUrl = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';
const dashboardUrl = 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index';

function randomToken() {
  return `${Date.now()}${Math.random().toString(36).slice(2, 7)}`;
}

function randomEmployeeId() {
  return String(Math.floor(100000 + Math.random() * 900000));
}

async function saveEmployeeWithUniqueId(page, employee) {
  const employeeIdField = page.getByRole('textbox').nth(4);

  for (let attempt = 0; attempt < 5; attempt += 1) {
    await page.getByRole('button', { name: 'Save' }).click();

    const duplicateIdMessage = page.getByText('Employee Id already exists');
    if (!(await duplicateIdMessage.isVisible({ timeout: 3000 }).catch(() => false))) {
      return;
    }

    employee.employeeId = randomEmployeeId();
    await employeeIdField.fill(employee.employeeId);
  }

  throw new Error('Could not find a unique employee ID after five attempts');
}

test('Add an employee with random details and login credentials', async ({ page }) => {
  const token = randomToken();
  const employee = {
    firstName: `Auto${token.slice(-5)}`,
    middleName: 'Test',
    lastName: 'Employee',
    employeeId: randomEmployeeId(),
    username: `user${token.slice(-8)}`,
    password: `Playwright@${token.slice(-6)}A1`,
  };

  await page.goto(loginUrl, { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page).toHaveURL(dashboardUrl);
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();

  await page.getByRole('link', { name: 'PIM' }).click();
  await page.getByRole('link', { name: 'Add Employee' }).click();
  await expect(page).toHaveURL(/\/web\/index\.php\/pim\/addEmployee/);

  await page.getByRole('textbox', { name: 'First Name' }).fill(employee.firstName);
  await page.getByRole('textbox', { name: 'Middle Name' }).fill(employee.middleName);
  await page.getByRole('textbox', { name: 'Last Name' }).fill(employee.lastName);
  await page.getByRole('textbox').nth(4).fill(employee.employeeId);

  await page.locator('.oxd-switch-input').click();
  await page.getByRole('textbox').nth(5).fill(employee.username);
  await page.getByRole('radio', { name: 'Enabled' }).check();
  await page.getByRole('textbox').nth(6).fill(employee.password);
  await page.getByRole('textbox').nth(7).fill(employee.password);

  await saveEmployeeWithUniqueId(page, employee);
  await expect(page).toHaveURL(/\/web\/index\.php\/pim\/viewPersonalDetails/);
  await expect(page.getByRole('heading', { name: 'Personal Details' })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'First Name' })).toHaveValue(employee.firstName);
  await expect(page.getByRole('textbox', { name: 'Last Name' })).toHaveValue(employee.lastName);
});