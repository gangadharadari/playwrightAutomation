import { test, expect } from '@playwright/test';

import logindata from "../../../testdata/login.json"

// import jobdata from "../../../testdata/addjobtitle.json"
import { faker } from '@faker-js/faker';

const jobtitles = {

    title1 : { name: faker.company.name(),
               description : faker.lorem.paragraph(),
               notes : faker.lorem.paragraph()
             },
    title2 : { name: faker.company.name(),
               description : faker.lorem.paragraph(),
               notes : faker.lorem.paragraph()
             },
    title3 : { name: faker.company.name(),
               description : faker.lorem.paragraph(),
               notes : faker.lorem.paragraph()
             },
    title4 : { name: faker.company.name(),
               description : faker.lorem.paragraph(),
               notes : faker.lorem.paragraph()
             },
    title5 : { name: faker.company.name(),
               description : faker.lorem.paragraph(),
               notes : faker.lorem.paragraph()
             }

}

for (let title in jobtitles) {

test(`Verify Job Title - ${title}`, async ({page}) => {
    
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    //await page.getByRole('textbox', { name: 'Username' }).fill(Admin);
    await page.locator('input[name=\'username\']').fill(logindata.username);
    await page.locator('input[type=\'password\']').fill(logindata.password);
    await page.locator('button[type=\'submit\']').click();

    //assertions - expect to verify testcase 
    // ref: https://playwright.dev/docs/test-assertions

    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
    await expect(page.locator("//p[text()='Time at Work']")).toBeVisible();
    await page.locator("//span[text()='Admin']").click();
    await page.locator("//span[normalize-space(text())='Job']").click();
    await page.getByRole('menuitem', { name: 'Job Titles' }).click();
    await page.getByRole('button', { name: 'Add' }).click();
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveJobTitle");

    await page.locator('xpath=(//input[@class=\'oxd-input oxd-input--active\'])[2]').fill(jobtitles[title].name);
    console.log("JOB TITLE:", jobtitles[title].name);

    await page.locator('xpath=(//textarea[contains(@class,\'oxd-textarea oxd-textarea--active\')])[1]').fill(jobtitles[title].description);
    console.log("DESCRIPTION:", jobtitles[title].description);

    await page.locator('textarea[placeholder=\'Add note\']').fill(jobtitles[title].notes);
    console.log("NOTES:", jobtitles[title].notes);

    await page.locator('//button[@type=\'submit\']').click();
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewJobTitleList");
    await page.close();

}
)
}
