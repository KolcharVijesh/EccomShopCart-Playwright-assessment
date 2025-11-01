import { Page, expect } from '@playwright/test';

export class CheckoutPage {
  constructor(private page: Page) {}

  async completeCheckout() {
    await this.page.click('input[name="termsofservice"]');
    await this.page.click('button#checkout');

    //checkout steps
    await this.page.locator("//input[@class='button-1 new-address-next-step-button'and @onClick='Billing.save()']").click();
    await this.page.locator("//input[@class='button-1 new-address-next-step-button'and @onClick='Shipping.save()']").click();
    await this.page.locator("//input[@class='button-1 shipping-method-next-step-button'and @onClick='ShippingMethod.save()']").click();
    await this.page.locator("//input[@class='button-1 payment-method-next-step-button'and @onClick='PaymentMethod.save()']").click();
    await this.page.locator("//input[@class='button-1 payment-info-next-step-button'and @onClick='PaymentInfo.save()']").click();
    await this.page.locator("//input[@class='button-1 confirm-order-next-step-button'and @onClick='ConfirmOrder.save()']").click();
  /*  for (let i = 0; i < 5; i++) {
      const continueBtn = this.page.locator(
        'input.button-1.new-address-next-step-button, input.button-1.shipping-method-next-step-button, input.button-1.payment-method-next-step-button, input.button-1.payment-info-next-step-button, input.button-1.confirm-order-next-step-button'
      );
      if (await continueBtn.isVisible()) {
        await continueBtn.click();
      }
    }
      */

    await expect(this.page.locator('.section.order-completed')).toContainText('Your order has been successfully processed!');
  }
}