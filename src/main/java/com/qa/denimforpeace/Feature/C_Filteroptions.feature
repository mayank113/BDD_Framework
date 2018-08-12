Feature: user can add product to cart using filters
Scenario: Verify User can add mulitple product form women in a cart
Given user should be on home page
Then user click on login link
Then user Enter register username and password
|BSF@gmail.com|12may1990|
Then user click on signin button
Given user click on Women
Then user click NEW ARRIVALS from left pannel and add one Item in cart
Then user click Jegging from features in left pannel and add one Item in cart
Then user click Straight from features in left pannel and add one Item in cart
Then count the items in a bag

Scenario: Verify User can delete product form cart
Given user can mouseover on bag and delete the product
Then count the items in a bag
Then close the driver
