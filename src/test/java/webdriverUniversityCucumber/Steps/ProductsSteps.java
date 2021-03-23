package webdriverUniversityCucumber.Steps;

import org.openqa.selenium.By;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import webdriverUniversityCucumber.Utils.DriverFactory;

public class ProductsSteps extends DriverFactory{
	
	@Given("^I navigate to \"([^\"]*)\" website$")
	public void i_navigate_to_website(String url) throws Exception {
		Thread.sleep(3000);
		getDriver().get(url);
	}

	@When("^I click on \"([^\"]*)\"$")
	public void i_click_on(String locator) throws Exception {
		Thread.sleep(3000);
		getDriver().findElement(By.id(locator)).click();
	}

	@Then("^I should be presented with a promo alert$")
	public void i_should_be_presented_with_a_promo_alert() throws Exception {
		Thread.sleep(3000); 
		getDriver().findElement(By.xpath("//button[text()='Proceed']")).click();
	}

}
