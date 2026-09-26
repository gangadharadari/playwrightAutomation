import { test, expect } from '@playwright/test';

test("To Verify Skill Added Or Not", async ({page}) => {
    
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    //await page.getByRole('textbox', { name: 'Username' }).fill(Admin);
    await page.locator('input[name=\'username\']').fill("Admin");
    await page.locator('input[type=\'password\']').fill("admin123");
    await page.locator('button[type=\'submit\']').click();

    //assertions - expect to verify testcase 

    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
    await expect(page.locator("//p[text()='Time at Work']")).toBeVisible();
    await page.locator("//span[text()='Admin']").click();
    await page.locator("//span[normalize-space(text())='Qualifications']").click();
    await page.locator('//ul[@class=\'oxd-dropdown-menu\']//li[1]').click();
    await page.locator("//button[contains(.,'Add')]").click();
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveSkills");
    await page.locator('xpath=(//input[@class=\'oxd-input oxd-input--active\'])[2]').fill("playwright tool");
    await page.getByPlaceholder('Type description here').fill("playwright is automation freamwork powered by microsoft");
    await page.locator("//button[contains(.,'Save')]").click();
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSkills");
    await page.close();


}
)