import { test, expect } from '@playwright/test';

// original code without hooks - below test 
// test('Basic test', async({page})=>{
//   await page.goto('https://www.saucedemo.com/');
//   await page.locator('[data-test="username"]').click();
//   await page.locator('[data-test="username"]').fill('standard_user');
//   await page.locator('[data-test="password"]').click();
//   await page.locator('[data-test="password"]').fill('secret_sauce');
//   await page.locator('[data-test="login-button"]').click();
//    await page.waitForURL('https://www.saucedemo.com/inventory.html');
//   await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
//   await page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
//   await page.locator('[data-test="shopping-cart-link"]').click();
//   await page.locator('[data-test="checkout"]').click();
//   await page.locator('[data-test="firstName"]').click();
//   await page.locator('[data-test="firstName"]').fill('sa');
//   await page.locator('[data-test="firstName"]').press('Tab');
//   await page.locator('[data-test="lastName"]').fill('grover');
//   await page.locator('[data-test="lastName"]').press('Tab');
//   await page.locator('[data-test="postalCode"]').fill('12312');
//   await page.locator('[data-test="continue"]').click();
//   await page.locator('[data-test="finish"]').click();
//   await page.getByRole('button', { name: 'Open Menu' }).click();
//   await page.locator('[data-test="logout-sidebar-link"]').click();
//   await page.waitForURL('https://www.saucedemo.com/');
//   await page.close();
//   // ---------------------close browser last
//   await browser.close();
// }),

  //defining 3 new tests out of above code and commenting above one

// test 1 method - to check Login function

// also running a group here - keyword is describe
 test.describe('All My Tests', ()=>{

test('Login', async({page}) => {
    // await page.goto('https://www.saucedemo.com/');
    // await page.locator('[data-test="username"]').click();
    // await page.locator('[data-test="username"]').fill('standard_user');
    // await page.locator('[data-test="password"]').click();
    // await page.locator('[data-test="password"]').fill('secret_sauce');
    // await page.locator('[data-test="login-button"]').click();
    // await page.waitForURL('https://www.saucedemo.com/inventory.html');
    //await page.close();
  }),
 // test 2 method - to check Checkout function
test('Checkout', async({page}) => {
    // await page.goto('https://www.saucedemo.com/');
    // await page.locator('[data-test="username"]').click();
    // await page.locator('[data-test="username"]').fill('standard_user');
    // await page.locator('[data-test="password"]').click();
    // await page.locator('[data-test="password"]').fill('secret_sauce');
    // await page.locator('[data-test="login-button"]').click();
    // await page.waitForURL('https://www.saucedemo.com/inventory.html');
    await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
    await page.locator('[data-test="shopping-cart-link"]').click();
    await page.locator('[data-test="checkout"]').click();
    await page.locator('[data-test="firstName"]').click();
    await page.locator('[data-test="firstName"]').fill('sa');
    await page.locator('[data-test="firstName"]').press('Tab');
    await page.locator('[data-test="lastName"]').fill('grover');
    await page.locator('[data-test="lastName"]').press('Tab');
    await page.locator('[data-test="postalCode"]').fill('12312');
    await page.locator('[data-test="continue"]').click();
    await page.locator('[data-test="finish"]').click();
    //await page.close();
    }),
 // test 3 method - to check Logout function
   test('Logout', async({page}) => {
    // await page.goto('https://www.saucedemo.com/');
    // await page.locator('[data-test="username"]').click();
    // await page.locator('[data-test="username"]').fill('standard_user');
    // await page.locator('[data-test="password"]').click();
    // await page.locator('[data-test="password"]').fill('secret_sauce');
    // await page.locator('[data-test="login-button"]').click();
    // await page.waitForURL('https://www.saucedemo.com/inventory.html');
    await page.getByRole('button', { name: 'Open Menu' }).click();
    await page.locator('[data-test="logout-sidebar-link"]').click();
    await page.waitForURL('https://www.saucedemo.com/');
    //await page.close();
})

// we see in all above 3 tests - we have common lines of code to be executed in start and end
// so we can use BeforeEach() hook- login code and AfterAll() hook - having page close code.
// commenting repeated code in above  3 tests


//Before each - will run before all 3 tests - login flow common in all tests
test.beforeEach(async({page})=>{

    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await page.waitForURL('https://www.saucedemo.com/inventory.html');

})

//After each - will run page close code after each test
test.afterEach(async({page})=>{

    await page.close();


})

//Grouping of tests is done for running multiple tests together - also all child tests are kept inside this {} - line no. 37

// test.describe('All My Tests', ()=>{


// })

 })


