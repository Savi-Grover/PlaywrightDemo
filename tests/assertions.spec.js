import { test, expect } from '@playwright/test';

test('Assertions demo', async({page})=>{

await page.goto('https://www.saucedemo.com/');

//await page.pause();

//all assertions use - expect keyword !

//Element present or not

await expect (page.locator('[data-test="username"]')).toHaveCount(1);

//using if loop with $ operator
if(await page.$('[data-test="username"]')){
await page.locator('[data-test="username"]').click();
}

  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');

  //to check element visible or hidden - toBeVisible() or tobeHidden()
  await expect (page.locator('[data-test="login-button"]')).toBeVisible();
  await page.locator('[data-test="login-button"]').click();

  // to check element enabled or disabled
  await expect (page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]')).toBeEnabled();

  await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();

  // to check if have a certain text or not - toHaveText() ; nottohaveText();
  await  expect (page.locator('[data-test="checkout"]')).toHaveText('Checkout');

  await page.locator('[data-test="checkout"]').click();

  //soft assertion - so that it does not break the flow of execution if assertion failed and jumps to next stmt
  await expect.soft (page.locator('[data-test="firstName"]')).toBeEmpty();

  
  await page.locator('[data-test="firstName"]').click();
  await page.locator('[data-test="firstName"]').fill('sa');
  await page.locator('[data-test="firstName"]').press('Tab');
  await page.locator('[data-test="lastName"]').fill('grover');
  await page.locator('[data-test="lastName"]').press('Tab');
  await page.locator('[data-test="postalCode"]').fill('12312');
  await page.locator('[data-test="continue"]').click();
  await page.locator('[data-test="finish"]').click();

  // ---------------------
  //await context.close();
  //await browser.close();



})