import { test, expect } from '@playwright/test';

test('Select any two products and verify total price', async ({ page }) => {

    await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/')

    const productNames = await page.locator('//div[@class="product"]').allTextContents()
    console.log("Product Count: " + productNames.length)
    expect(productNames.length).toBe(30)

    console.log("Product Names: " + productNames[0])
    await page.locator(`//h4[contains(.,"Brocolli")]/following-sibling::div[2]/button`).click()
    const price1 = await page.locator(`//h4[contains(.,"Brocolli")]/following-sibling::div[1]/p`).textContent()
    console.log("Price of Brocolli: " + price1)
    price1 = Number(price1.replace('Rs. ', ''))

    console.log("Product Names: " + productNames[1])
    await page.locator(`//h4[contains(.,"Cucumber")]/following-sibling::div[2]/button`).click()
    const price2 = await page.locator(`//h4[contains(.,"Cucumber")]/following-sibling::div[1]/p`).textContent()
    console.log("Price of Cucumber: " + price2)
    price2 = Number(price2.replace('Rs. ', ''))

    await page.locator('//a[@class="cart-icon"]').click()
    const totalPrice = await page.locator('//span[@class="totAmt"]').textContent()
    console.log("Total Price: " + totalPrice)
    totalPrice = Number(totalPrice.replace('Rs. ', '')) 
    expect(Number(totalPrice)).toBe(price1 + price2)


}
)