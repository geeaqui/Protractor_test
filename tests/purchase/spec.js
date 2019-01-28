const HomePage = require('../../pages/HomePage');

describe('User Purchase', function() {
    
    //positive test
    it('Should log-in an account inside order flow and purchase an item successfully', async function() {
        await HomePage.get();
        await HomePage.LoginAccountWhilePurchingItem();
    });

    //positive test
    it('Should create an account inside the order flow and purchase an item successfully', async function() {
        //await HomePage.get();
        await HomePage.ReturnHome();
        await HomePage.CreateAccountWhilePurchingItem();
    });
});
