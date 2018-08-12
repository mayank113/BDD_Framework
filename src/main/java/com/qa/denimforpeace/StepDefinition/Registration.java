package com.qa.denimforpeace.StepDefinition;

import java.io.IOException;
import java.util.List;

import org.junit.runner.RunWith;
import org.openqa.selenium.By;
import org.openqa.selenium.support.PageFactory;

import Base.BASE_Initiate;
import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
public class Registration extends BASE_Initiate{
	public Registration() throws IOException {
		super();
		PageFactory.initElements(driver, this);
	}	
		
	 @Given("^user should be on home page$")
	    public void user_should_be_on_home_page() throws Throwable {
		Initiate();
		
	    }

	 @Then("^user click on my account link$")
	    public void user_click_on_my_account_link() throws Throwable {
	        driver.findElement(By.xpath("//a[contains(text(),'My account')]")).click();
	        
	    }

	 @Then("^print text dispaly for new coustomer and click on continue$")
	    public void print_text_dispaly_for_new_coustomer_and_click_on_continue() throws Throwable {
		 System.out.println(driver.findElement(By.xpath("//div[@class='col-sm-6 ']//p")).getText());
		 System.out.println(driver.findElement(By.xpath("//p[contains(@class,'continuebtn-login')]/preceding-sibling::p[contains(text(),'Denim For Peace')]")).getText());
	        driver.findElement(By.xpath("//a[contains(text(),'Continue')]")).click(); 
	    }
	 
	 @Then("^user enter mandatory personal details (.+) (.+) (.+) (.+) (.+) (.+) (.+) (.+) (.+) and click on continue button$")
	    public void user_enter_mandatory_personal_details_and_click_on_continue_button(String fstname, String lstname, String email, String address, String pincode, String city, String telephone, String newpassword, String confirmpassword) throws Throwable {
		 driver.findElement(By.xpath("//input[@name='firstname']")).sendKeys(fstname);
	      driver.findElement(By.xpath("//input[@name='lastname']")).sendKeys(lstname);	
	      driver.findElement(By.xpath("//input[@name='email_address']")).sendKeys(email);	
	      driver.findElement(By.xpath("//input[@name='street_address']")).sendKeys(address);	
	      driver.findElement(By.xpath("//input[@name='postcode']")).sendKeys(pincode);	
	      driver.findElement(By.xpath("//input[@name='city']")).sendKeys(city);
	      driver.findElement(By.xpath("//input[@name='telephone']")).sendKeys(telephone);
	      driver.findElement(By.xpath("//input[@name='password']")).sendKeys(newpassword);
	      driver.findElement(By.xpath("//input[@name='confirmation']")).sendKeys(confirmpassword);
	      driver.findElement(By.xpath("//button[@id='tdb1']")).click();
	      System.out.println(driver.findElement(By.xpath("//div[@class='contentText']")).getText());
	      driver.findElement(By.xpath("//a[contains(text(),'logout')]")).click();
	  
	    }
	       
	    @Then("^user click on login link$")
	    public void user_click_on_login_link() throws Throwable {
	    	driver.findElement(By.xpath("//a[contains(text(),'login')]")).click();	
	    }

	    @Then("^user Enter register username and password$")
	    public void user_enter_register_username_and_password(DataTable dt) throws Throwable {
	    	List<List<String>> lst =dt.raw();
	    	driver.findElement(By.xpath("//input[@name='email_address']")).sendKeys(lst.get(0).get(0)); 
	    	driver.findElement(By.xpath("//input[@name='password']")).sendKeys(lst.get(0).get(1));
	    }

	    @Then("^user click on signin button$")
	    public void user_click_on_signin_button() throws Throwable {
	    	driver.findElement(By.xpath("//button[@id='tdb1']")).click();
	    }

	    @Then("^user verify the successfull login$")
	    public void user_verify_the_successfull_login() throws Throwable {
	    	System.out.println(driver.getTitle());
	    }
	    
	    
	    @Then("^close the driver$")
	    public void close_the_driver(){
	        driver.close();
	    }

}
