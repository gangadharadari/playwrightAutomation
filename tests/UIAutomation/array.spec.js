import { test, expect } from '@playwright/test';

test('Verify the product count', async ({ page }) => {

    await page.goto("https://www.green-kart.in/")
    await page.locator('//li[@role="presentation"]/a/span').click()
    const productNames = await page.locator('//h2[@class="o_wsale_products_item_title text-break"]').allTextContents()
    console.log("Product Count: " + productNames.length)
    expect(productNames.length).toBe(21)

    let product1Name = "Apple"
    let product2Name = "Banana"



}
)
