// import { test, expect } from '@playwright/test';

// test('Select any two products and verify total price', async ({ page }) => {

//     await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/')

//     const productNames = await page.locator('//div[@class="product"]').allTextContents()
//     console.log("Product Count: " + productNames.length)
//     expect(productNames.length).toBe(30)

//     console.log("Product Names: " + productNames[0])
//     await page.locator(`//h4[contains(.,"Brocolli")]/following-sibling::div[2]/button`).click()

//     console.log("Product Names: " + productNames[1])
//     await page.locator(`//h4[contains(.,"Cucumber")]/following-sibling::div[2]/button`).click()

//     const price1Text = await page.locator(`//h4[contains(.,"Brocolli")]/../p`).textContent();
//     console.log("Price of Brocolli: " + price1Text);
//     const price1 = Number(price1Text);

//     const price2Text = await page.locator(`//h4[contains(.,"Cucumber")]/../p`).textContent();
//     console.log("Price of Cucumber: " + price2Text);
//     const price2 = Number(price2Text);

//     await page.locator('//a[@class="cart-icon"]').click();
//     await page.locator('//button[normalize-space(.)="PROCEED TO CHECKOUT"]').click();

//     await expect(page).toHaveURL('https://rahulshettyacademy.com/seleniumPractise/#/cart');
//     const totalPriceText = await page.locator('//span[@class="totAmt"]').textContent();
//     console.log("Total Price: " + totalPriceText);
//     const totalPrice = Number(totalPriceText);
//     expect(totalPrice).toBe(price1 + price2);

// }
// )

// import { test, expect } from '@playwright/test';

// test('Select any two products and verify total price', async ({ page }) => {

//     await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/');

//     const products = page.locator('//div[@class="product"]');
//     const productCount = await products.count();

//     console.log("Product Count: " + productCount);
//     expect(productCount).toBe(30);

//     const product1Name = await page.locator('//h4[contains(.,"Brocolli")]').textContent();
//     const product1PriceText = await page.locator('//h4[contains(.,"Brocolli")]/../p').textContent();
//     console.log("Product 1: " + product1Name);
//     console.log("Price 1: " + product1PriceText);

//     const price1 = Number(product1PriceText)
//     await page.locator('//h4[contains(.,"Brocolli")]/following-sibling::div[2]/button').click();

//     const product2Name = await page.locator('//h4[contains(.,"Cucumber")]').textContent();
//     const product2PriceText = await page.locator('//h4[contains(.,"Cucumber")]/../p').textContent();
//     console.log("Product 2: " + product2Name);
//     console.log("Price 2: " + product2PriceText);

//     const price2 = Number(product2PriceText)
//     await page.locator('//h4[contains(.,"Cucumber")]/following-sibling::div[2]/button').click();

//     const expectedTotal = price1 + price2;
//     console.log("Expected Total: " + expectedTotal);

//     await page.locator('//a[@class="cart-icon"]').click();
//     await page.locator('//button[normalize-space(.)="PROCEED TO CHECKOUT"]').click();
//     await expect(page).toHaveURL('https://rahulshettyacademy.com/seleniumPractise/#/cart');
//     const totalPriceText = await page.locator('//span[@class="totAmt"]').textContent();
//     console.log("Cart Total: " + totalPriceText);

//     const actualTotal = Number(totalPriceText)
//     console.log("Actual Total: " + actualTotal);

//     expect(actualTotal).toBe(expectedTotal);

// });


import { test, expect } from '@playwright/test';

test('Select any two products and verify total price', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/');

    const productNames = await page.locator('//div[@class="product"]').allTextContents();
    console.log('Product Count: ' + productNames.length);
    expect(productNames.length).toBe(30);

    const productName1 = 'Brocolli';
    const productName2 = 'Cucumber';

    const product1 = await page.locator(`//h4[contains(.,"${productName1}")]`).textContent()
    console.log('productname:',product1)
    const price1Text = await page.locator(`//h4[contains(.,"${productName1}")]/../p`).textContent();
    const price1 = Number(price1Text)
    console.log('Price of Brocolli: ' + price1Text);

    await page.locator(`//h4[contains(.,"${productName1}")]/following-sibling::div[2]/button`).click();

    const product2 = await page.locator(`//h4[contains(.,"${productName2}")]`).textContent()
    console.log('productname:',product2)
    const price2Text = await page.locator(`//h4[contains(.,"${productName2}")]/../p`).textContent();
    const price2 = Number(price2Text)
    console.log('Price of Cucumber: ' + price2Text);

    await page.locator(`//h4[contains(.,"${productName2}")]/following-sibling::div[2]/button`).click();

    await page.locator('//a[@class="cart-icon"]').click();
    await page.locator('//button[normalize-space(.)="PROCEED TO CHECKOUT"]').click();

    await expect(page).toHaveURL('https://rahulshettyacademy.com/seleniumPractise/#/cart');

    const totalPriceText = await page.locator('//span[@class="totAmt"]').textContent();
    const totalPrice = Number(totalPriceText)
    console.log('Total Price: ' + totalPrice);

    expect(totalPrice).toBe(price1 + price2);
});