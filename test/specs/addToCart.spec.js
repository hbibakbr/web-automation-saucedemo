const { expect } = require('@wdio/globals')
const Page = require('../pageobjects/page.js')
const LoginPage = require('../pageobjects/login.page.js')
const InventoryPage = require('../pageobjects/inventory.page.js')

describe('Add to Cart', () => {

    beforeEach( async () => {
        Page.open('/');
        await LoginPage.login('standard_user', 'secret_sauce');
        await InventoryPage.assertInventoryUrl();
    });

    it('Success Add to Cart on Inventory Page', async () => {
        await InventoryPage.addToCart.click();
        await InventoryPage.assertBadges();
        await browser.pause(10000);
    });

    it('Success Add to Cart on Detail Page', async () => {
        
    })
})