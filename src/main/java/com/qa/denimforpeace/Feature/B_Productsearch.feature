Feature: user can search product and add to cart
Scenario: Verify User is able to login with register users
Given user should be on home page
Then user click on login link
Then user Enter register username and password
|BSF@gmail.com|12may1990|
Then user click on signin button
Then user verify the successfull login

Scenario: Verify User can add product in cart
Given use navigate to men and select the product
Then user add the product
Then count the items in a bag
Then close the driver