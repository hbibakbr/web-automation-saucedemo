const { $ } = require('@wdio/globals')

/**
 * sub page containing specific selectors and methods for a specific page
 */
class inventoryPage {
    /**
     * define selectors using getter methods
    */
   get inventoryPageUrl() {
        return 'https://www.saucedemo.com/inventory.html'
   }

    get productPageTitle () {
        return $('//span[text()="Products"]');
    }

    get addToCart () {
        return $('//button[@id="add-to-cart-sauce-labs-backpack"]')
    }

    get cartBadges () {
        return $('//span[@data-test="shopping-cart-badge"]')
    }

    get productTest () {
        return $('');
    }

    async assertInventoryUrl() {
        await expect(browser).toHaveUrl(this.inventoryPageUrl)
    }

    async assertBadges () {
        await expect(this.cartBadges).toBeExisting()
    }
}

module.exports = new inventoryPage();
