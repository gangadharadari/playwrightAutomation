import { test } from '@playwright/test';

import { faker } from '@faker-js/faker';
import employeeData from '../../testdata/addemployee.json';
import loginData from '../../testdata/login.json';
import { OrangeHrmAddEmployeePage } from './pages/orangehrm-add-employee.page.js';

function createEmployeeId() {
  return faker.string.numeric({ length: 6 });
}

test('Add employee with POM, JSON, and Faker data', async ({ page }) => {
  const employee = {
    firstName: faker.person.firstName(),
    middleName: employeeData.middleName,
    lastName: employeeData.lastName,
    employeeId: createEmployeeId(),
    username: `user_${faker.string.alphanumeric(8).toLowerCase()}`,
    password: `Playwright@${faker.string.alphanumeric(8)}A1`,
    status: employeeData.status,
  };

  const addEmployeePage = new OrangeHrmAddEmployeePage(page);
  await addEmployeePage.open(loginData);
  await addEmployeePage.fillEmployee(employee);
  await addEmployeePage.save(employee, createEmployeeId);
  await addEmployeePage.verifyEmployee(employee);
});