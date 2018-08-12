Feature: user can verify the links
Scenario: Verify User is able to login with register users
Given user should be on home page
Then user click on login link
Then user Enter register username and password
|BSF@gmail.com|12may1990|
Then user click on signin button
Given user click on Women
Then User verify active links count
Then close the driver