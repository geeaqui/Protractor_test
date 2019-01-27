const AccountPage = require('../../pages/AccountPage');

describe('User authentication', function() {
  
  //positive test
  it('Should be successfully in creating a new account', async function() {
    await AccountPage.get();
    await AccountPage.CreateAccount();
    //expect(element(by.css('.header_user_info')).element(by.css('.account')).isPresent());
    expect(AccountPage.GetWelcomeMessage()).toEqual('Welcome to your account. Here you can manage all of your personal information and orders.');
    await AccountPage.LogOut();
    //expect(element(by.css('.header_user_info')).element(by.css('.account')).isPresent()).toBeFalsy();
  });

  //positive test
  it('Should be successful in logging-in', async function() {
    await AccountPage.LoginWithExistingAcount();
    expect(AccountPage.GetWelcomeMessage()).toEqual('Welcome to your account. Here you can manage all of your personal information and orders.');
    await AccountPage.LogOut();
  });
  
  //negative test
  it('Should be unsuccessful to use existing email for registration', async function() {
    await AccountPage.get();
    await AccountPage.RegisterWithExistingAccount();
    //expect(AccountPage.CreateAccountErrorMessage()).toEqual('Welcome to your account. Here you can manage all of your personal information and orders.');
  });
});


