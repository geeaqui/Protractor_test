var myAccountPage = require('./pages/myAccountPage');
describe('angularjs homepage', function() {
  it('should greet the named user', async function() {
     await myAccountPage.get();
     await myAccountPage.CreateAccount();

   // await myAccountPage.setName('Julie');

    //expect(await myAccountPage..toEqual('Hello Julie!');
  });
});
