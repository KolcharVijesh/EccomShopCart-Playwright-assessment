import { Page, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

export class ProductPage {
  constructor(private page: Page) {}

  async addProductToCart(productName: string) {
    await this.page.click(`text=${productName}`);
    await this.page.click('input[value="Add to cart"]');
    await expect(this.page.locator('.content')).toContainText('The product has been added to your shopping cart');
  }
}
