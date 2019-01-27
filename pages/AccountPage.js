const TestData = require('../testdata/TestData');

var Accountpage = function() {

    //Personal Details
    const createEmailAccount = element(by.id('email_create'));
    const submitCreateEmailAccount = element(by.id('SubmitCreate'));
    const maleGenderRadioButton = element(by.id('id_gender1'));
    const firstNameField = element(by.id('customer_firstname'));
    const lastNameField = element(by.id('customer_lastname'));
    const passwordField = element(by.id('passwd'));

    //Date of birth
    const dateField = element(by.id('days'));
    const monthField = element(by.id('months'));
    const yearField = element(by.id('years'));

    //Address
    const addressField = element(by.id('address1'));
    const cityField = element(by.id('city'));
    const stateField = element(by.id('id_state'));
    const postalCodeField = element(by.id('postcode'));

    //Mobile Details
    const mobileField = element(by.id('phone_mobile'));

    //Create Account Submit button
    const createSubmitButton = element(by.id('submitAccount'));

    //Log-in
    const loginEmail = element(by.id('email'));
    const loginPassword = element(by.id('passwd'));
    const loginButton = element(by.id('SubmitLogin'));

    //Log-out
    const logoutButton = element(by.css('.logout'));

    //Account Url
    const accountPageURL = 'http://automationpractice.com/index.php?controller=authentication&back=my-account';
  
    this.get =  async function() {
        await browser.waitForAngularEnabled(false); //used for non-angular website
        await browser.get(accountPageURL);
    };
  
    //Create New Account
    this.CreateAccount = async  function() {
        await createEmailAccount.sendKeys(this.GenerateRandomEmail());
        await submitCreateEmailAccount.click();
        browser.driver.sleep(3000);
        await maleGenderRadioButton.click();
        await firstNameField.sendKeys("randoms");
        await lastNameField.sendKeys("random");
        await passwordField.sendKeys("12341234");
        browser.driver.sleep(2000);
        await this.GenerateDate();
        await addressField.sendKeys("random");
        await cityField.sendKeys("random");
        await this.GenerateState();
        browser.driver.sleep(2000);
        await postalCodeField.sendKeys("20010");
        await mobileField.sendKeys("12341234");
        await createSubmitButton.click();
        browser.driver.sleep(2000);
    };

    //Log-in with Existing Account
    this.LoginWithExistingAcount = async function(){
       // browser.driver.sleep(2000);
        await loginEmail.sendKeys(TestData.GetUserName());
        await loginPassword.sendKeys(TestData.GetPassword());
        await loginButton.click();
    }

    this.RegisterWithExistingAccount = async function (){
        await createEmailAccount.sendKeys(TestData.GetUserName());
        await submitCreateEmailAccount.click();
        browser.driver.sleep(3000);
    }

    this.LogOut = async function(){
        await logoutButton.click();
        browser.driver.sleep(2000);
    }

    this.GetWelcomeMessage = async function(){
        const welcomeMessage = await element(by.css('.info-account')).getText();
        return welcomeMessage;
    }

    this.CreateAccountErrorMessage = async function(){
        let errorMessage = await element(by.css('#create_account_error')).getText();
        
        return errorMessage;
    }

    //Randomly Generate date of birth
    this.GenerateDate = async function(){
        let randomNumber = Math.floor((Math.random() * 12) + 1);

        await dateField.click();
        browser.driver.sleep(2000);
        await element(by.css("#days option:nth-child("+randomNumber+")")).click();
        await monthField.click();
        browser.driver.sleep(2000);
        await element(by.css("#months option:nth-child("+randomNumber+")")).click();
        await yearField.click();
        browser.driver.sleep(2000);
        await element(by.css("#years option:nth-child("+randomNumber+")")).click();
    }

    //Randomly chose state from the dropdown
    this.GenerateState = async function(){
        let randomNumber = Math.floor((Math.random() * 50) + 1);
        browser.driver.sleep(2000);
        stateField.click();
        browser.driver.sleep(2000);
        await element(by.css("#id_state option:nth-child("+randomNumber+")")).click();
    }

    //Randomly generate email address for creating account
    this.GenerateRandomEmail = function(){
        let chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
        let string = '';
        for(var i=0; i<15; i++){
            string += chars[Math.floor(Math.random() * chars.length)];
        }

        return string + "@testing.com"
    }
  
  };

  module.exports = new Accountpage();
