var AngularHomepage = function() {

    //Personal Details
    const createEmailAccount = element(by.id('email_create'));
    const submitCreateEmailAccount = element(by.name('SubmitCreate'));
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
  
    this.get =  async function() {
        await browser.waitForAngularEnabled(false);
        await browser.get('http://automationpractice.com/index.php?controller=authentication&back=my-account');
    };
  
    this.CreateAccount = async  function() {
        //await createEmailAccount.sendKeys("testingEmail@testing.com");
        await createEmailAccount.sendKeys(this.GenerateRandomEmail());
        await submitCreateEmailAccount.click();
        browser.driver.sleep(2000);
        await maleGenderRadioButton.click();
        await firstNameField.sendKeys("randoms");
        await lastNameField.sendKeys("random");
        await passwordField.sendKeys("12341234");
        await this.GenerateDate();
        await addressField.sendKeys("random");
        await cityField.sendKeys("random");
        await this.GenerateState();
        await postalCodeField.sendKeys("20010");
        await mobileField.sendKeys("12341234");
        await createSubmitButton.click();
        browser.driver.sleep(5000);
    };



    this.GenerateDate = async function(){
        let randomNumber = Math.floor((Math.random() * 12) + 1);

        await dateField.click();
        browser.driver.sleep(1000);
        await element(by.css("#days option:nth-child("+randomNumber+")")).click();
        await monthField.click();
        browser.driver.sleep(1000);
        await element(by.css("#months option:nth-child("+randomNumber+")")).click();
        await yearField.click();
        browser.driver.sleep(1000);
        await element(by.css("#years option:nth-child("+randomNumber+")")).click();
    }

    this.GenerateState = async function(){
        let randomNumber = Math.floor((Math.random() * 50) + 1);

        stateField.click();
        browser.driver.sleep(2000);
        await element(by.css("#id_state option:nth-child("+randomNumber+")")).click();
    }

    this.GenerateRandomEmail = function(){
        let chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
        let string = '';
        for(var i=0; i<15; i++){
            string += chars[Math.floor(Math.random() * chars.length)];
        }

        return string + "@testing.com"
    }
  
  };
  module.exports = new AngularHomepage();
