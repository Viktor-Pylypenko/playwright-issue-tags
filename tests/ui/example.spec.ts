import { test } from "@playwright/test";

test('First test', { tag: ['@EXAMPLE'] }, async ({page}) => {
  await page.goto('https://playwright.dev/');
  console.log('First test executed');
});

test('Second test', async ({page}) => {
  await page.goto('https://playwright.dev/');
  console.log('Second test executed');
});
