Feature: Test the User Registration
Scenario Outline: verify user is able to register and login with register user 
Given user should be on home page
Then user click on my account link
Then print text dispaly for new coustomer and click on continue 
Then user enter mandatory personal details <fst_name> <lst_name> <email> <address> <pincode> <city> <telephone> <newpassword> <confirmpassword> and click on continue button

Examples:
|fst_name|lst_name|email|address|pincode|city|telephone|newpassword|confirmpassword|
|Mayank|Saxena|BSF@gmail.com|D-21losangles|121108|LosAnlges|1210012991|12may1990|12may1990|

Scenario: Verify User is able to login with register users
Given user click on login link
Then user Enter register username and password
|BSF@gmail.com|12may1990|
Then user click on signin button
Then user verify the successfull login
Then close the driver
