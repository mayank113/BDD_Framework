package com.qa.denimforpeace.MyRunner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		
		features = "C:\\Users\\Mayank\\eclipse-workspace\\BDD_Framework\\BDD\\src\\main\\java\\com\\qa\\denimforpeace\\Feature",
		glue={"com.qa.denimforpeace.StepDefinition"},
	    monochrome = true,
	    dryRun = false,
        strict = false,	
        plugin= {"pretty","html:test-output/login.html", "json:json_output/cucumber.json", "junit:junit_xml/cucumber.xml"}
		)

public class scenario_runner {

}
