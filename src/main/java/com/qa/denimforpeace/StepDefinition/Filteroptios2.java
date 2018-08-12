package com.qa.denimforpeace.StepDefinition;

import java.io.IOException;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.PageFactory;

import Base.BASE_Initiate;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class Filteroptios2 extends BASE_Initiate{
	public Filteroptios2() throws IOException {
		super();
		PageFactory.initElements(driver, this);
	}

	    @Given("^user click on Women$")
	    public void user_click_on_women() throws Throwable {
	    	Thread.sleep(5000l);
	    	WebElement Women = driver.findElement(By.xpath("//li[@class='drop-menu']/a[contains(text(),'Women')]"));
	        Actions act = new Actions(driver);
	    	act.moveToElement(Women).build().perform();
    	  driver.findElement(By.xpath("//ul[@id='women']//li//a[@rel='NewArrivals']")).click();
	    }

	    @Then("^user click NEW ARRIVALS from left pannel and add one Item in cart$")
	    public void user_click_new_arrivals_from_left_pannel_and_add_one_item_in_cart() throws Throwable {
	    	driver.findElement(By.xpath("//div[@class='cat-list']//a[@rel='NewArrivals']")).click();
	        driver.findElement(By.xpath("//a[@class='prod_image']/img[@alt='Zoey in Piera']")).click();
	        driver.findElement(By.xpath("//a[@id='9|10|26']")).click();
	        driver.findElement(By.xpath("//button[@id='tdb1']")).click();
	        
	    }

	    @Then("^user click Jegging from features in left pannel and add one Item in cart$")
	    public void user_click_Jegging_from_features_in_left_pannel_and_add_one_item_in_cart() throws Throwable {
	    	
	    	WebElement Women = driver.findElement(By.xpath("//li[@class='drop-menu']/a[contains(text(),'Women')]"));
	        Actions act = new Actions(driver);
	    	act.moveToElement(Women).build().perform();
	    	driver.findElement(By.xpath("//ul[@id='women']//li//a[@rel='NewArrivals']")).click();
    	  driver.findElement(By.xpath("//div[@class='cat-list']//a[@rel='Jegging']")).click();
    	  Thread.sleep(5000l);
    	  driver.findElement(By.xpath("//img[@alt='Rowan in Choco Drips']")).click();
    	  driver.findElement(By.xpath("//a[@id='7|25|2']")).click();
	        driver.findElement(By.xpath("//button[@id='tdb1']")).click();
	    }

	    @Then("^user click Straight from features in left pannel and add one Item in cart$")
	    public void user_click_Straight_from_features_in_left_pannel_and_add_one_item_in_cart() throws Throwable {
    	
	    	WebElement Women = driver.findElement(By.xpath("//li[@class='drop-menu']/a[contains(text(),'Women')]"));
	        Actions act = new Actions(driver);
	    	act.moveToElement(Women).build().perform();
	    	driver.findElement(By.xpath("//ul[@id='women']//li//a[@rel='NewArrivals']")).click();
    	  driver.findElement(By.xpath("//div[@class='cat-list']//a[@rel='Straight']")).click();
	    	Thread.sleep(5000l);
    	  driver.findElement(By.xpath("//img[@alt='Amanda in Pastel']")).click();
    	  driver.findElement(By.xpath("//a[@id='7|8|2']")).click();
	        driver.findElement(By.xpath("//button[@id='tdb1']")).click();
	    }
	    
	    @Given("^user can mouseover on bag and delete the product$")
	    public void user_can_mouseover_on_bag_and_delete_the_product() throws Throwable {
	    	WebElement Women = driver.findElement(By.xpath("//div[@class='cart']"));
	        Actions act = new Actions(driver);
	    	act.moveToElement(Women).build().perform();
	    	
	    	driver.findElement(By.xpath("//div[@class='FR']/a")).click();
	    }


}
