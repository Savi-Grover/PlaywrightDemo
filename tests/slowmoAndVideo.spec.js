import { test, expect, chromium } from '@playwright/test';

// slowMo is launchBrowser property so we import chromium from playwright package and declare slowMo attribute in launch browser func

test('Slow motion and Video recording', async({})=>{

const browser = await chromium.launch ({
    slowMo: 1000,
    Headless: false

});
const context = await browser.newContext({
    recordVideo: {
        dir: 'videos/',
       Size: {
         width: 800,
         Height: 600
       }}   
});

const page = await context.newPage();

await page.goto('https://www.google.com/')
await context.close();

})