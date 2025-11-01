
import { Page, expect } from '@playwright/test';
import { credentials, products } from '../utility/testData';

export class LoginPage {
  constructor(private page: Page) {}

  async gotoLoginPage() {
    await this.page.goto('https://demowebshop.tricentis.com/login');
  }

  async login() {
    await this.page.fill('#Email', credentials.email);
    await this.page.fill('#Password', credentials.password);
    await this.page.click('input[value="Log in"]');
   // await this.page.waitForSelector('.account', { state: 'visible' });
   // await expect(this.page.locator('.account')).toHaveText(credentials.email);
  }
}

