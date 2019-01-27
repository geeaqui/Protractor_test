const TestData = require('../testdata/TestData');
const AccountPage = require('./AccountPage');


var Homepage = function() {
    
    //Homepage Url
    const homePageURL = 'http://automationpractice.com/index.php';

    this.get =  async function() {
        await browser.waitForAngularEnabled(false); //used for non-angular website
        await browser.get(homePageURL);
        browser.driver.sleep(3000);
    };

    //Log-in account while doing the purchase flow
    this.LoginAccountWhilePurchingItem = async function() {
        await element(by.css(".product_img_link")).click();
        browser.driver.sleep(2000);
        await element(by.id('add_to_cart')).click();
        browser.driver.sleep(2000);
        await element(by.css('a[title="Proceed to checkout"]')).click();
        browser.driver.sleep(2000);
        await  element(by.css('.standard-checkout')).click();
        browser.driver.sleep(2000);
        //this.LoginWithExistingAcount();
        AccountPage.LoginWithExistingAcount();
        browser.driver.sleep(2000);
        await element(by.name('processAddress')).click();
        await element(by.name('cgv')).click();
        browser.driver.sleep(2000);
        await element(by.name('processCarrier')).click();
        browser.driver.sleep(2000);
        await element(by.css('.bankwire')).click();
        browser.driver.sleep(2000);
        let submitFinal = await element(by.id('cart_navigation'));
        submitFinal.element(by.css('button[type="submit"]')).click();
        browser.driver.sleep(3000);
        expect(this.GetPaymentConfirmation()).toEqual('Order confirmation');
        await AccountPage.LogOut();
        browser.driver.sleep(3000);
    }

    this.ReturnHome = async function(){
        await element(by.css('a[title="My Store"]')).click();
    }

    //CreateAccount while doing the purchase flow
    this.CreateAccountWhilePurchingItem = async function() {
        browser.driver.sleep(3000);
        await element(by.css(".product_img_link")).click();
        browser.driver.sleep(2000);
        await element(by.id('add_to_cart')).click();
        browser.driver.sleep(2000);
        await element(by.css('a[title="Proceed to checkout"]')).click();
        browser.driver.sleep(2000);
        await  element(by.css('.standard-checkout')).click();
        browser.driver.sleep(2000);
        await AccountPage.CreateAccount();
        browser.driver.sleep(2000);
        await element(by.name('processAddress')).click();
        await element(by.name('cgv')).click();
        browser.driver.sleep(2000);
        await element(by.name('processCarrier')).click();
        browser.driver.sleep(2000);
        await element(by.css('.bankwire')).click();
        browser.driver.sleep(2000);
        let submitFinal = await element(by.id('cart_navigation'));
        submitFinal.element(by.css('button[type="submit"]')).click();
        browser.driver.sleep(3000);
        expect(this.GetPaymentConfirmation()).toEqual('Order confirmation');
    }

    this.GetPaymentConfirmation = async function(){
        let finalConfirmation = await element(by.css('.navigation_page')).getText();
        return finalConfirmation;
    }
}

module.exports = new Homepage();