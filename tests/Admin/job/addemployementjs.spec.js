import { test, expect } from '@playwright/test';

import logindata from "../../../testdata/login.json"

// import { faker } from '@faker-js/faker';
const { faker } = require('@faker-js/faker');

test("Verify adding employment status", async ({page}) => {
    
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    //await page.getByRole('textbox', { name: 'Username' }).fill(Admin);
    await page.locator('input[name=\'username\']').fill("Admin");
    await page.locator('input[type=\'password\']').fill("admin123");
    await page.locator('button[type=\'submit\']').click();

    //assertions - expect to verify testcase expected output..

    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
    await expect(page.locator("//p[text()='Time at Work']")).toBeVisible();
    await page.locator("//span[text()='Admin']").click();
    await page.locator("//span[normalize-space(text())='Job']").click();
    await page.locator('xpath=(//ul[@class=\'oxd-dropdown-menu\']//li)[3]').click();
    await page.locator("//button[contains(.,'Add')]").click();
    let employmentstatus = faker.word.noun();
    await page.locator('xpath=(//input[@class=\'oxd-input oxd-input--active\'])[2]').fill(employmentstatus);
    console.log(employmentstatus);
    await page.locator("//button[@type='submit']").click();
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/admin/employmentStatus");
    await page.waitForTimeout(2000);
    await page.close();
}
)