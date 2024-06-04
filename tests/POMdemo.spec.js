import { test, expect } from '@playwright/test';
import { login } from '../pages/login'

test('test', async ({ page }) => {

    const loginobj = new login(page)


    await loginobj.gotoBrowser()
    await loginobj.Loginfunction('tomsmith','SuperSecretPassword')

    //old code before POM
//   await page.goto('https://the-internet.herokuapp.com/login');
//   await page.getByLabel('Username').click();
//   await page.getByLabel('Username').fill('tomsmith');
//   await page.getByLabel('Username').press('Tab');
//   await page.getByLabel('Password').fill('SuperSecretPassword!');
//   await page.getByRole('button', { name: ' Login' }).click();
});