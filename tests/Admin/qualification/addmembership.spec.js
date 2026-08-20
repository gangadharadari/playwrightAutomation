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
    await page.locator("//a[normalize-space(text())='Memberships']").click();
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/admin/membership");
    await page.locator("//button[contains(.,'Add')]").click();
    await page.locator('xpath=(//input[@class=\'oxd-input oxd-input--active\'])[2]').fill("friendly membership");
    await page.locator("//button[contains(.,'Save')]").click();
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/admin/membership");
    await page.waitForTimeout(2000);
    await page.close();

}
)