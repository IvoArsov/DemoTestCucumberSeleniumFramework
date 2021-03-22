package webdriverUniversityCucumber.Steps;

import java.io.IOException;
import java.nio.file.Paths;
import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.DataTable;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import org.junit.Assert;

public class ContactUsSteps {
	WebDriver driver;
	
	@Before()
	public void setUp() throws IOException {
		System.setProperty("webdriver.chrome.driver", Paths.get(System.getProperty("user.dir")).toRealPath() 
				+ "\\src\\test\\java\\webdriverUniversityCucumber\\Resources\\chromedriver.exe");
		
		this.driver = new ChromeDriver();
		this.driver.manage().window().maximize();
		this.driver.manage().timeouts().pageLoadTimeout(120, TimeUnit.SECONDS);	
	}
	
	@After()
	public void tearDown() {
		this.driver.manage().deleteAllCookies();
		this.driver.quit();
	}
	
	@Given("^I access to webdriveruniversity contact form$")
	public void i_access_to_webdriveruniversity_contact_form() {
	    this.driver.get("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
	}

	@When("^I enter a valid firstname$")
	public void i_enter_a_valid_firstname() throws InterruptedException {
		//Thread.sleep(3000);
	    this.driver.findElement(By.cssSelector("input[name='first_name']")).sendKeys("Ivaylo");
	}

	@When("^I enter a valid last name$")
	public void i_enter_a_valid_last_name(DataTable dataTable) {
		List<List<String>> data = dataTable.raw();
		
		this.driver.findElement(By.cssSelector("input[name='last_name']")).sendKeys(data.get(0).get(1));
	}

	@And("^I enter a valid email address$")
	public void i_enter_a_valid_email_address() {
	    this.driver.findElement(By.cssSelector("input[name='email']")).sendKeys("arsov.ivaylo@gmail.com");
	}

	@And("^I enter comments$")
	public void i_enter_comments(DataTable dataTable) {
	    List<List<String>> data = dataTable.raw();
	    
	    this.driver.findElement(By.cssSelector("textarea[name='message']")).sendKeys(data.get(0).get(0));
	    this.driver.findElement(By.cssSelector("textarea[name='message']")).sendKeys(data.get(0).get(1));
	}

	@When("^I click on the submit button$")
	public void i_click_on_the_submit_button() {
	    this.driver.findElement(By.cssSelector("input[value='SUBMIT']")).click();
	}

	@Then("^The information should successfully be submitted via contact us form$")
	public void the_information_should_successfully_be_submitted_via_contact_us_form() throws InterruptedException {
		Thread.sleep(3000);
		
		WebElement welcomeMessage = this.driver.findElement(By.xpath("//*[@id='contact_reply']/h1"));
		Assert.assertEquals("thankyouforyourmessage!", welcomeMessage.getText().toLowerCase().replaceAll("[ ()0-9]", ""));
	}
}
