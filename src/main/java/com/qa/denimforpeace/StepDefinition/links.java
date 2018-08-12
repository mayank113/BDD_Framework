package com.qa.denimforpeace.StepDefinition;

import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;

import Base.BASE_Initiate;
import cucumber.api.java.en.Then;
public class links extends BASE_Initiate{
	public links() throws IOException {
		super();
		PageFactory.initElements(driver, this);
	}

	
		
	@Then("^User verify active links count$")
    public void user_verify_active_links_count() throws Throwable {
		ArrayList<WebElement> Arr = new ArrayList<WebElement>();
		ArrayList<String> finalArr = new ArrayList<String>();
		List<WebElement> link = driver.findElements(By.tagName("a"));
		Arr.addAll(link);
		List<WebElement> image = driver.findElements(By.tagName("img"));
		Arr.addAll(image);
		System.out.println(Arr.size());
		for(int i =0;i<Arr.size();i++) {
			
			if(Arr.get(i).getAttribute("href")!=null) {
				finalArr.add(Arr.get(i).getAttribute("href"));
				
			}
			
			}
		System.out.println("Final linsk available"+finalArr.size());
		for (int i=0;i<finalArr.size();i++)
		{
			try {
			URL ul = new URL(finalArr.get(i));
			HttpURLConnection connection  = (HttpURLConnection)ul.openConnection();
			connection.connect();
			System.out.println(finalArr.get(i)+">>" +connection.getResponseMessage());
			connection.disconnect();
			}
			catch(Exception e) {
				
				System.out.println("Exception occor"+e);
			}
			}
		}
    }

