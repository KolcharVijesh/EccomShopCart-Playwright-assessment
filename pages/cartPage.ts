import { Page, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

export class CartPage {
  constructor(private page: Page) {}

  async gotoCart() {
     
    await this.page.locator("//span[@class='cart-label' and text()='Shopping cart']").click();
    //await this.page.goto('https://demowebshop.tricentis.com/cart');
  }

  async verifyCartCount(expectedCount: number) {
    const rows = await this.page.locator('.cart-item-row').count();
    expect(rows).toBe(expectedCount);
  }

  async verifyProductDetails(productNames: string[]) {
    for (const name of productNames) {
      await expect(this.page.locator('.product-name')).toContainText(name);
    }
  }
}