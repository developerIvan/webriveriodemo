import { Given, When, Then } from '@wdio/cucumber-framework';
import automatenowmain from '../pageobjects/automatenowmain';




Given(/^I am on the automate now page$/, async () => {
   // await automatenowmain.navPage.simulateSlowConn();
    await automatenowmain.navPage.goToMainPage();
   //  
    await automatenowmain.navPage.maximizePage();
});

When(/^I click on an specific (\w+) button$/, async (section) => {
    await automatenowmain.navPage.defineSectionNavSeleector(section);
    await automatenowmain.navPage.goToSpecificSection(section);
});

Then(/^I should see the current section's title is (.*)$/, async (title) => {
    let expectedTitle = await automatenowmain.navPage.getSectionTitle();
   
     expect( expectedTitle).toHaveText(title);

});