import { test, expect } from '@playwright/test';

test("test case title", async ({page}) => {
    
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
    await page.locator('xpath=(//ul[@class=\'oxd-dropdown-menu\']//li)[3]').click();
    await page.locator("//button[contains(.,'Add')]").click();
    await page.locator("//label[normalize-space(text())='Name']/following::input").fill("grade a");
    await page.locator("//button[contains(.,'Save')]").click();
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewLicenses");
    await page.waitForTimeout(2000);
    await page.close();

}
)