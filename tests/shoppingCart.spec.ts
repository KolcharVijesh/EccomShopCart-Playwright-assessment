import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductPage } from '../pages/productPage';
import { CartPage } from '../pages/cartPage';
import { CheckoutPage } from '../pages/CheckOut';
import { credentials, products } from '../utility/testData';

test('adding product to a shopping cart', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productPage = new ProductPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  // Step 1: Login
  await loginPage.gotoLoginPage();
  await loginPage.login();

  // Step 2: Add products to cart
  for (const product of products) {
    await productPage.addProductToCart(product);
  }

  // Step 3: Verify cart
  await cartPage.gotoCart();
  await cartPage.verifyCartCount(products.length);
 // await cartPage.verifyProductDetails(products);

  // Step 4: Checkout
  await checkoutPage.completeCheckout();
});