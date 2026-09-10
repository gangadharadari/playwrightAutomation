import { expect } from '@playwright/test';

export class OrangeHrmAddEmployeePage {
  constructor(page) {
    this.page = page;
    this.firstNameInput = page.getByRole('textbox', { name: 'First Name' });
    this.middleNameInput = page.getByRole('textbox', { name: 'Middle Name' });
    this.lastNameInput = page.getByRole('textbox', { name: 'Last Name' });
    this.employeeIdInput = page.getByRole('textbox').nth(4);
    this.createLoginDetailsToggle = page.locator('.oxd-switch-input');
    this.usernameInput = page.getByRole('textbox').nth(5);
    this.passwordInput = page.getByRole('textbox').nth(6);
    this.confirmPasswordInput = page.getByRole('textbox').nth(7);
    this.saveButton = page.getByRole('button', { name: 'Save' });
  }

  async open(loginData) {
    await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', {
      waitUntil: 'domcontentloaded',
      timeout: 60000,
    });
    await this.page.getByRole('textbox', { name: 'Username' }).fill(loginData.username);
    await this.page.getByRole('textbox', { name: 'Password' }).fill(loginData.password);
    await this.page.getByRole('button', { name: 'Login' }).click();
    await expect(this.page).toHaveURL(/\/web\/index\.php\/dashboard\/index/);
    await expect(this.page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
    await this.page.getByRole('link', { name: 'PIM' }).click();
    await this.page.getByRole('link', { name: 'Add Employee' }).click();
    await expect(this.page).toHaveURL(/\/web\/index\.php\/pim\/addEmployee/);
  }

  async fillEmployee(employee) {
    await this.firstNameInput.fill(employee.firstName);
    await this.middleNameInput.fill(employee.middleName);
    await this.lastNameInput.fill(employee.lastName);
    await this.employeeIdInput.fill(employee.employeeId);
    await this.createLoginDetailsToggle.click();
    await this.usernameInput.fill(employee.username);
    await this.page.getByRole('radio', { name: employee.status }).check();
    await this.passwordInput.fill(employee.password);
    await this.confirmPasswordInput.fill(employee.password);
  }

  async save(employee, createEmployeeId) {
    for (let attempt = 0; attempt < 5; attempt += 1) {
      await this.saveButton.click();
      const duplicateIdMessage = this.page.getByText('Employee Id already exists');
      if (!(await duplicateIdMessage.isVisible({ timeout: 3000 }).catch(() => false))) {
        return;
      }

      employee.employeeId = createEmployeeId();
      await this.employeeIdInput.fill(employee.employeeId);
    }

    throw new Error('Could not find a unique employee ID after five attempts');
  }

  async verifyEmployee(employee) {
    await expect(this.page).toHaveURL(/\/web\/index\.php\/pim\/viewPersonalDetails/);
    await expect(this.page.getByRole('heading', { name: 'Personal Details' })).toBeVisible();
    await expect(this.page.getByRole('textbox', { name: 'First Name' })).toHaveValue(employee.firstName);
    await expect(this.page.getByRole('textbox', { name: 'Last Name' })).toHaveValue(employee.lastName);
  }
}