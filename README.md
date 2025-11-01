
# E-commerce Playwright Automation

This project automates a small e-commerce flow using [Playwright](https://playwright.dev/) with TypeScript and the Page Object Model (POM) design pattern.

## 🔍 Test Scenario

Website: [Demo Web Shop](https://demowebshop.tricentis.com/cart)

### Steps Automated:
1. Login with valid credentials
2. Add two products to the cart
3. Verify cart count and product details
4. Complete checkout and assert success message


### 1. Clone the Repository
```bash
git clone https://github.com/KolcharVijesh/ecommerce-playwright.git
cd ecommerce-playwright
```

### 2. Install Dependencies
```bash
npm install
npx playwright install
```

## Running Tests
```bash
npx playwright test tests/shoppingCart.spec.ts --headed
```

## Viewing Reports
```bash
npx playwright show-report
```

## Test Data
Located in `utils/testData.ts`:
```ts
export const credentials = {
  email: 'test11nov@test.com',
  password: '123456'
};

export const products = [
  '14.1-inch Laptop',
  'Build your own cheap computer'
];
```


