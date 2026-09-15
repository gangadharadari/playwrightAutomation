import { faker } from '@faker-js/faker';

export function randomToken(length = 8) {
  return faker.string.alphanumeric(length).toLowerCase();
}

export function randomEmployeeId() {
  return faker.string.numeric({ length: 6 });
}

export function randomEmail(prefix = 'user') {
  return `${prefix}.${randomToken(8)}@example.com`;
}

export function randomPhoneNumber() {
  return faker.string.numeric({ length: 10, exclude: ['0', '1'] });
}

export function createEmployeeData(overrides = {}) {
  const token = randomToken(8);

  return {
    firstName: faker.person.firstName(),
    middleName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    employeeId: randomEmployeeId(),
    username: `user_${token}`,
    password: `Playwright@${token}A1`,
    status: 'Enabled',
    ...overrides,
  };
}

export function createJobTitleData(overrides = {}) {
  return {
    name: faker.person.jobTitle(),
    description: faker.lorem.paragraph(),
    notes: faker.lorem.sentence(),
    ...overrides,
  };
}

export function createDemoQaTextBoxData(overrides = {}) {
  return {
    fullName: faker.person.fullName(),
    email: randomEmail('demoqa'),
    currentAddress: faker.location.streetAddress(),
    permanentAddress: faker.location.streetAddress(),
    ...overrides,
  };
}