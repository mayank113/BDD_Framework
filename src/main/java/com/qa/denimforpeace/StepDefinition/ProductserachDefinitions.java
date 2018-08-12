package com.qa.denimforpeace.StepDefinition;
import java.io.IOException;
import java.util.List;

import org.junit.runner.RunWith;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.PageFactory;
import Base.BASE_Initiate;
import cucumber.api.java.en.Then;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
public class ProductserachDefinitions extends BASE_Initiate{
    
    
    
    public ProductserachDefinitions() throws IOException {
		super();
		 PageFactory.initElements(driver, this);
	}

	@Then("^use navigate to men and select the product$")
    public void use_navigate_to_men_and_select_the_product() throws Throwable {
    	
    	 Thread.sleep(5000l);
        WebElement men = driver.findElement(By.xpath("//li[@class='drop-menu']/a[contains(text(),'Men')]"));
        Actions act = new Actions(driver);
    	act.moveToElement(men).build().perform();
    	driver.findElement(By.xpath("//div[@id='Men']//ul//li//a[contains(text(),'Skinny')]")).click();
    	
    }

    @Then("^user add the product$")
    public void user_add_the_product() throws Throwable {//add skinny in cart
    System.out.println(driver.findElement(By.xpath("//div[@id='Skinny']//h1[@class='category-title']")).getText());
    List<WebElement> li = driver.findElements(By.xpath("//div[@id='Skinny']//div//div//a//img[@class='front_image']"));
    System.out.println(li.size());
    for(int i=0;i<li.size();i++) {
    	System.out.println("Items>>  "+li.get(i).getAttribute("alt"));
    	if(li.get(i).getAttribute("alt").equals("Luke in Peart")) {	
    	li.get(i).click();
    	break;
    	}
    	
    }
    
    List<WebElement> li2 = driver.findElements(By.xpath("//div[@class='prodsizes-block']//div[@class='sizelink  ']//a"));
	    System.out.println(li2.size());
	    for(int j=0;j<li2.size();j++) {
	    	System.out.println("Items>>  "+li2.get(j).getText());
    	if(li2.get(j).getText().equals("27")){
    		li2.get(j).click();
break;
	    	}
    }  
driver.findElement(By.xpath("//button[@id='tdb1']")).click();
    }
    

    @Then("^count the items in a bag$")
    public void verify_product_is_added_successfull() throws Throwable {
    	Thread.sleep(5000l);
 	    String Num = driver.findElement(By.xpath("//div[@class='cart']//div[@class='cart-no']")).getText();
 	    int item = Integer.parseInt(Num);
 	 if(!(item <=0)) {
 		 System.out.println("Total Number of Items added in Cart>> "+ item);
 	 }
 	 
 	 else System.out.println("No Items in Cart ");
 	    }

    }
