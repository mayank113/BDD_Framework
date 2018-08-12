$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("A_Registration.feature");
formatter.feature({
  "line": 1,
  "name": "Test the User Registration",
  "description": "",
  "id": "test-the-user-registration",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "verify user is able to register and login with register user",
  "description": "",
  "id": "test-the-user-registration;verify-user-is-able-to-register-and-login-with-register-user",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "user should be on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "user click on my account link",
  "keyword": "Then "
});
formatter.step({
  "line": 5,
  "name": "print text dispaly for new coustomer and click on continue",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "user enter mandatory personal details \u003cfst_name\u003e \u003clst_name\u003e \u003cemail\u003e \u003caddress\u003e \u003cpincode\u003e \u003ccity\u003e \u003ctelephone\u003e \u003cnewpassword\u003e \u003cconfirmpassword\u003e and click on continue button",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "test-the-user-registration;verify-user-is-able-to-register-and-login-with-register-user;",
  "rows": [
    {
      "cells": [
        "fst_name",
        "lst_name",
        "email",
        "address",
        "pincode",
        "city",
        "telephone",
        "newpassword",
        "confirmpassword"
      ],
      "line": 9,
      "id": "test-the-user-registration;verify-user-is-able-to-register-and-login-with-register-user;;1"
    },
    {
      "cells": [
        "Mayank",
        "Saxena",
        "BSF@gmail.com",
        "D-21losangles",
        "121108",
        "LosAnlges",
        "1210012991",
        "12may1990",
        "12may1990"
      ],
      "line": 10,
      "id": "test-the-user-registration;verify-user-is-able-to-register-and-login-with-register-user;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 10,
  "name": "verify user is able to register and login with register user",
  "description": "",
  "id": "test-the-user-registration;verify-user-is-able-to-register-and-login-with-register-user;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "user should be on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "user click on my account link",
  "keyword": "Then "
});
formatter.step({
  "line": 5,
  "name": "print text dispaly for new coustomer and click on continue",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "user enter mandatory personal details Mayank Saxena BSF@gmail.com D-21losangles 121108 LosAnlges 1210012991 12may1990 12may1990 and click on continue button",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Registration.user_should_be_on_home_page()"
});
formatter.result({
  "duration": 18462773550,
  "status": "passed"
});
formatter.match({
  "location": "Registration.user_click_on_my_account_link()"
});
formatter.result({
  "duration": 7755750136,
  "status": "passed"
});
formatter.match({
  "location": "Registration.print_text_dispaly_for_new_coustomer_and_click_on_continue()"
});
formatter.result({
  "duration": 1680572097,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mayank",
      "offset": 38
    },
    {
      "val": "Saxena",
      "offset": 45
    },
    {
      "val": "BSF@gmail.com",
      "offset": 52
    },
    {
      "val": "D-21losangles",
      "offset": 66
    },
    {
      "val": "121108",
      "offset": 80
    },
    {
      "val": "LosAnlges",
      "offset": 87
    },
    {
      "val": "1210012991",
      "offset": 97
    },
    {
      "val": "12may1990",
      "offset": 108
    },
    {
      "val": "12may1990",
      "offset": 118
    }
  ],
  "location": "Registration.user_enter_mandatory_personal_details_and_click_on_continue_button(String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 16234110846,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Verify User is able to login with register users",
  "description": "",
  "id": "test-the-user-registration;verify-user-is-able-to-login-with-register-users",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "user click on login link",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "user Enter register username and password",
  "rows": [
    {
      "cells": [
        "BSF@gmail.com",
        "12may1990"
      ],
      "line": 15
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "user click on signin button",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "user verify the successfull login",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "close the driver",
  "keyword": "Then "
});
formatter.match({
  "location": "Registration.user_click_on_login_link()"
});
formatter.result({
  "duration": 4294217132,
  "status": "passed"
});
formatter.match({
  "location": "Registration.user_enter_register_username_and_password(DataTable)"
});
formatter.result({
  "duration": 623283371,
  "status": "passed"
});
formatter.match({
  "location": "Registration.user_click_on_signin_button()"
});
formatter.result({
  "duration": 205058397,
  "status": "passed"
});
formatter.match({
  "location": "Registration.user_verify_the_successfull_login()"
});
formatter.result({
  "duration": 7714007516,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//td[@class\u003d\u0027headerInfo\u0027]\"}\n  (Session info: chrome\u003d68.0.3440.106)\n  (Driver info: chromedriver\u003d2.37.544315 (730aa6a5fdba159ac9f4c1e8cbc59bf1b5ce12b7),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027MAYANK-PC\u0027, ip: \u0027192.168.1.101\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, platformName\u003dXP, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.37.544315 (730aa6a5fdba159ac9f4c1e8cbc59bf1b5ce12b7), userDataDir\u003dC:\\Users\\Mayank\\AppData\\Local\\Temp\\scoped_dir4648_9983}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d68.0.3440.106, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 080b4e7006e560e23117621da717f09e\n*** Element info: {Using\u003dxpath, value\u003d//td[@class\u003d\u0027headerInfo\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:416)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:408)\r\n\tat com.qa.denimforpeace.StepDefinition.Registration.user_verify_the_successfull_login(Registration.java:80)\r\n\tat ✽.Then user verify the successfull login(A_Registration.feature:17)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Registration.close_the_driver()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("B_Productsearch.feature");
formatter.feature({
  "line": 1,
  "name": "user can search product and add to cart",
  "description": "",
  "id": "user-can-search-product-and-add-to-cart",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "Verify User is able to login with register users",
  "description": "",
  "id": "user-can-search-product-and-add-to-cart;verify-user-is-able-to-login-with-register-users",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "user should be on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "user click on login link",
  "keyword": "Then "
});
formatter.step({
  "line": 5,
  "name": "user Enter register username and password",
  "rows": [
    {
      "cells": [
        "BSF@gmail.com",
        "12may1990"
      ],
      "line": 6
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user click on signin button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user verify the successfull login",
  "keyword": "Then "
});
formatter.match({
  "location": "Registration.user_should_be_on_home_page()"
});
formatter.result({
  "duration": 15389103803,
  "status": "passed"
});
formatter.match({
  "location": "Registration.user_click_on_login_link()"
});
formatter.result({
  "duration": 2563549249,
  "status": "passed"
});
formatter.match({
  "location": "Registration.user_enter_register_username_and_password(DataTable)"
});
formatter.result({
  "duration": 868778691,
  "status": "passed"
});
formatter.match({
  "location": "Registration.user_click_on_signin_button()"
});
formatter.result({
  "duration": 218534397,
  "status": "passed"
});
formatter.match({
  "location": "Registration.user_verify_the_successfull_login()"
});
formatter.result({
  "duration": 17516951092,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//td[@class\u003d\u0027headerInfo\u0027]\"}\n  (Session info: chrome\u003d68.0.3440.106)\n  (Driver info: chromedriver\u003d2.37.544315 (730aa6a5fdba159ac9f4c1e8cbc59bf1b5ce12b7),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027MAYANK-PC\u0027, ip: \u0027192.168.1.101\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, platformName\u003dXP, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.37.544315 (730aa6a5fdba159ac9f4c1e8cbc59bf1b5ce12b7), userDataDir\u003dC:\\Users\\Mayank\\AppData\\Local\\Temp\\scoped_dir8816_26768}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d68.0.3440.106, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: e393adcf59a6c073e21e62e8e06150eb\n*** Element info: {Using\u003dxpath, value\u003d//td[@class\u003d\u0027headerInfo\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:416)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:408)\r\n\tat com.qa.denimforpeace.StepDefinition.Registration.user_verify_the_successfull_login(Registration.java:80)\r\n\tat ✽.Then user verify the successfull login(B_Productsearch.feature:8)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 10,
  "name": "Verify User can add product in cart",
  "description": "",
  "id": "user-can-search-product-and-add-to-cart;verify-user-can-add-product-in-cart",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "use navigate to men and select the product",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "user add the product",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "count the items in a bag",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "close the driver",
  "keyword": "Then "
});
formatter.match({
  "location": "ProductserachDefinitions.use_navigate_to_men_and_select_the_product()"
});
formatter.result({
  "duration": 10228744812,
  "status": "passed"
});
formatter.match({
  "location": "ProductserachDefinitions.user_add_the_product()"
});
formatter.result({
  "duration": 13110684010,
  "status": "passed"
});
formatter.match({
  "location": "ProductserachDefinitions.verify_product_is_added_successfull()"
});
formatter.result({
  "duration": 5106077029,
  "status": "passed"
});
formatter.match({
  "location": "Registration.close_the_driver()"
});
formatter.result({
  "duration": 2381706931,
  "status": "passed"
});
formatter.uri("C_Filteroptions.feature");
formatter.feature({
  "line": 1,
  "name": "user can add product to cart using filters",
  "description": "",
  "id": "user-can-add-product-to-cart-using-filters",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "Verify User can add mulitple product form women in a cart",
  "description": "",
  "id": "user-can-add-product-to-cart-using-filters;verify-user-can-add-mulitple-product-form-women-in-a-cart",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "user should be on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "user click on login link",
  "keyword": "Then "
});
formatter.step({
  "line": 5,
  "name": "user Enter register username and password",
  "rows": [
    {
      "cells": [
        "BSF@gmail.com",
        "12may1990"
      ],
      "line": 6
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user click on signin button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user click on Women",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "user click NEW ARRIVALS from left pannel and add one Item in cart",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user click Jegging from features in left pannel and add one Item in cart",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user click Straight from features in left pannel and add one Item in cart",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "count the items in a bag",
  "keyword": "Then "
});
formatter.match({
  "location": "Registration.user_should_be_on_home_page()"
});
formatter.result({
  "duration": 14137261613,
  "status": "passed"
});
formatter.match({
  "location": "Registration.user_click_on_login_link()"
});
formatter.result({
  "duration": 1639938830,
  "status": "passed"
});
formatter.match({
  "location": "Registration.user_enter_register_username_and_password(DataTable)"
});
formatter.result({
  "duration": 1272971204,
  "status": "passed"
});
formatter.match({
  "location": "Registration.user_click_on_signin_button()"
});
formatter.result({
  "duration": 309001507,
  "status": "passed"
});
formatter.match({
  "location": "Filteroptios2.user_click_on_women()"
});
formatter.result({
  "duration": 17653869993,
  "status": "passed"
});
formatter.match({
  "location": "Filteroptios2.user_click_new_arrivals_from_left_pannel_and_add_one_item_in_cart()"
});
formatter.result({
  "duration": 13688796746,
  "status": "passed"
});
formatter.match({
  "location": "Filteroptios2.user_click_Jegging_from_features_in_left_pannel_and_add_one_item_in_cart()"
});
formatter.result({
  "duration": 15626037117,
  "status": "passed"
});
formatter.match({
  "location": "Filteroptios2.user_click_Straight_from_features_in_left_pannel_and_add_one_item_in_cart()"
});
formatter.result({
  "duration": 18075688984,
  "status": "passed"
});
formatter.match({
  "location": "ProductserachDefinitions.verify_product_is_added_successfull()"
});
formatter.result({
  "duration": 5115079473,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Verify User can delete product form cart",
  "description": "",
  "id": "user-can-add-product-to-cart-using-filters;verify-user-can-delete-product-form-cart",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "user can mouseover on bag and delete the product",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "count the items in a bag",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "close the driver",
  "keyword": "Then "
});
formatter.match({
  "location": "Filteroptios2.user_can_mouseover_on_bag_and_delete_the_product()"
});
formatter.result({
  "duration": 374451516,
  "status": "passed"
});
formatter.match({
  "location": "ProductserachDefinitions.verify_product_is_added_successfull()"
});
formatter.result({
  "duration": 5091059717,
  "status": "passed"
});
formatter.match({
  "location": "Registration.close_the_driver()"
});
formatter.result({
  "duration": 253561999,
  "status": "passed"
});
formatter.uri("D_Verifylinks.feature");
formatter.feature({
  "line": 1,
  "name": "user can verify the links",
  "description": "",
  "id": "user-can-verify-the-links",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "Verify User is able to login with register users",
  "description": "",
  "id": "user-can-verify-the-links;verify-user-is-able-to-login-with-register-users",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "user should be on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "user click on login link",
  "keyword": "Then "
});
formatter.step({
  "line": 5,
  "name": "user Enter register username and password",
  "rows": [
    {
      "cells": [
        "BSF@gmail.com",
        "12may1990"
      ],
      "line": 6
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user click on signin button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user click on Women",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "User verify active links count",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "close the driver",
  "keyword": "Then "
});
formatter.match({
  "location": "Registration.user_should_be_on_home_page()"
});
formatter.result({
  "duration": 14949953301,
  "status": "passed"
});
formatter.match({
  "location": "Registration.user_click_on_login_link()"
});
formatter.result({
  "duration": 1866737589,
  "status": "passed"
});
formatter.match({
  "location": "Registration.user_enter_register_username_and_password(DataTable)"
});
formatter.result({
  "duration": 811360108,
  "status": "passed"
});
formatter.match({
  "location": "Registration.user_click_on_signin_button()"
});
formatter.result({
  "duration": 356622446,
  "status": "passed"
});
formatter.match({
  "location": "Filteroptios2.user_click_on_women()"
});
formatter.result({
  "duration": 19067646402,
  "status": "passed"
});
formatter.match({
  "location": "links.user_verify_active_links_count()"
});
