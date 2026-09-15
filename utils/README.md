# Automation utilities

These helpers are ESM modules, so import them with the `.mjs` extension from Playwright tests.

## Fixture data

```js
import { loadJson, mergeData } from '../../utils/data.mjs';

const login = loadJson('testdata/login.json');
const employee = mergeData(loadJson('testdata/addemployee.json'), { firstName: 'Test' });
```

Use `allowEmpty: true` for optional or empty fixtures such as `checkbox.json`.

## Generated data

```js
import { createEmployeeData, createJobTitleData } from '../../utils/random.mjs';

const employee = createEmployeeData();
const jobTitle = createJobTitleData();
```

## DemoQA

```js
import {
  expectTextBoxOutput,
  fillTextBox,
  submitTextBox,
} from '../../utils/demoqa.mjs';

await page.goto('https://demoqa.com/text-box');
await fillTextBox(page, data);
await submitTextBox(page);
await expectTextBoxOutput(page, expect, data);
```

## OrangeHRM

```js
import {
  expectEmployeeDetails,
  fillEmployeeForm,
  loginToOrangeHrm,
  openPimAddEmployee,
  saveEmployeeWithUniqueId,
} from '../../utils/orangehrm.mjs';

await loginToOrangeHrm(page, credentials);
await openPimAddEmployee(page);
await fillEmployeeForm(page, employee);
await saveEmployeeWithUniqueId(page, employee, randomEmployeeId);
await expectEmployeeDetails(page, employee);
```