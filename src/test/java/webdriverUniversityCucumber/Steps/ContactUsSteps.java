package webdriverUniversityCucumber.Steps;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then; 
import cucumber.api.java.en.When;
import webdriverUniversityCucumber.Utils.DriverFactory;

import org.junit.Assert;

public class ContactUsSteps extends DriverFactory {
	
	
	@Given("^I access to webdriveruniversity contact form$")
	public void i_access_to_webdriveruniversity_contact_form() throws Exception {
	    getDriver().get("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
	}

	@When("^I enter a valid firstname$")
	public void i_enter_a_valid_firstname() throws Exception {
		//Thread.sleep(3000);
		getDriver().findElement(By.cssSelector("input[name='first_name']")).sendKeys("Ivaylo");
	}

	@When("^I enter a valid last name$")
	public void i_enter_a_valid_last_name(DataTable dataTable) throws Exception {
		List<List<String>> data = dataTable.raw();
		
		getDriver().findElement(By.cssSelector("input[name='last_name']")).sendKeys(data.get(0).get(1));
	}

	@And("^I enter a valid email address$")
	public void i_enter_a_valid_email_address() throws Exception {
		getDriver().findElement(By.cssSelector("input[name='email']")).sendKeys("arsov.ivaylo@gmail.com");
	}

	@And("^I enter comments$")
	public void i_enter_comments(DataTable dataTable) throws Exception {
	    List<List<String>> data = dataTable.raw();
	    
	    getDriver().findElement(By.cssSelector("textarea[name='message']")).sendKeys(data.get(0).get(0));
	    getDriver().findElement(By.cssSelector("textarea[name='message']")).sendKeys(data.get(0).get(1));
	}

	@When("^I click on the submit button$")
	public void i_click_on_the_submit_button() throws Exception {
		getDriver().findElement(By.cssSelector("input[value='SUBMIT']")).click();
	}

	@Then("^The information should successfully be submitted via contact us form$")
	public void the_information_should_successfully_be_submitted_via_contact_us_form() throws Exception {
		Thread.sleep(3000);
		
		WebElement welcomeMessage = getDriver().findElement(By.xpath("//*[@id='contact_reply']/h1"));
		Assert.assertEquals("thankyouforyourmessage!", welcomeMessage.getText().toLowerCase().replaceAll("[ ()0-9]", ""));
	}
}
