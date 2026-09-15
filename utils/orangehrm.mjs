import { expect } from '@playwright/test';

export const ORANGEHRM_URLS = {
  login: '/web/index.php/auth/login',
  dashboard: /\/web\/index\.php\/dashboard\/index/,
  addEmployee: /\/web\/index\.php\/pim\/addEmployee/,
  personalDetails: /\/web\/index\.php\/pim\/viewPersonalDetails/,
};

export async function loginToOrangeHrm(page, credentials, { baseUrl } = {}) {
  await page.goto(`${baseUrl ?? 'https://opensource-demo.orangehrmlive.com'}${ORANGEHRM_URLS.login}`, {
    waitUntil: 'domcontentloaded',
    timeout: 60000,
  });
  await page.getByRole('textbox', { name: 'Username' }).fill(credentials.username);
  await page.getByRole('textbox', { name: 'Password' }).fill(credentials.password);
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page).toHaveURL(ORANGEHRM_URLS.dashboard);
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
}

export async function openPimAddEmployee(page) {
  await page.getByRole('link', { name: 'PIM' }).click();
  await page.getByRole('link', { name: 'Add Employee' }).click();
  await expect(page).toHaveURL(ORANGEHRM_URLS.addEmployee);
}

export async function openAdminPage(page, section, item) {
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByText(section, { exact: true }).click();
  await page.getByRole('menuitem', { name: item }).click();
}

export async function fillEmployeeForm(page, employee) {
  await page.getByRole('textbox', { name: 'First Name' }).fill(employee.firstName);
  await page.getByRole('textbox', { name: 'Middle Name' }).fill(employee.middleName);
  await page.getByRole('textbox', { name: 'Last Name' }).fill(employee.lastName);
  await page.getByRole('textbox').nth(4).fill(employee.employeeId);

  if (employee.username && employee.password) {
    await page.locator('.oxd-switch-input').click();
    await page.getByRole('textbox').nth(5).fill(employee.username);
    await page.getByRole('radio', { name: employee.status ?? 'Enabled' }).check();
    await page.getByRole('textbox').nth(6).fill(employee.password);
    await page.getByRole('textbox').nth(7).fill(employee.password);
  }
}

export async function saveEmployeeWithUniqueId(page, employee, createId, maxAttempts = 5) {
  const employeeIdField = page.getByRole('textbox').nth(4);
  const createEmployeeId = createId ?? (() => String(Date.now()).slice(-6));

  for (let attempt = 0; attempt < maxAttempts; attempt += 1) {
    await page.getByRole('button', { name: 'Save' }).click();
    const duplicateIdMessage = page.getByText('Employee Id already exists');

    if (!(await duplicateIdMessage.isVisible({ timeout: 3000 }).catch(() => false))) {
      return;
    }

    employee.employeeId = createEmployeeId();
    await employeeIdField.fill(employee.employeeId);
  }

  throw new Error(`Could not find a unique employee ID after ${maxAttempts} attempts`);
}

export async function expectEmployeeDetails(page, employee) {
  await expect(page).toHaveURL(ORANGEHRM_URLS.personalDetails);
  await expect(page.getByRole('heading', { name: 'Personal Details' })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'First Name' })).toHaveValue(employee.firstName);
  await expect(page.getByRole('textbox', { name: 'Last Name' })).toHaveValue(employee.lastName);
}