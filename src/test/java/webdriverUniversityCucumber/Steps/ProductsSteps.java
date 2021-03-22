package webdriverUniversityCucumber.Steps;

import java.io.IOException;
import java.nio.file.Paths;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class ProductsSteps {
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
	
	@Given("^I navigate to \"([^\"]*)\" website$")
	public void i_navigate_to_website(String url) throws InterruptedException {
		Thread.sleep(3000);
	    this.driver.get(url);
	}

	@When("^I click on \"([^\"]*)\"$")
	public void i_click_on(String locator) throws InterruptedException {
		Thread.sleep(3000);
	    this.driver.findElement(By.id(locator)).click();
	}

	@Then("^I should be presented with a promo alert$")
	public void i_should_be_presented_with_a_promo_alert() throws InterruptedException {
		Thread.sleep(3000); 
		this.driver.findElement(By.xpath("//button[text()='Proceed']")).click();
	}

}
