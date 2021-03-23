package webdriverUniversityCucumber.Steps;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import webdriverUniversityCucumber.Utils.DriverFactory;

public class MasterHooks extends DriverFactory {
	
	
	@Before
	public void setUp() throws Exception {
		driver = getDriver();
	}
	
	@After 
	public void tearDown() {
		if(driver != null) {
			driver.manage().deleteAllCookies();
			driver.quit();
		}
	}
}
