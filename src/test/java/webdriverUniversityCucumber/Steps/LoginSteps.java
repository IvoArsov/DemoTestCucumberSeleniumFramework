package webdriverUniversityCucumber.Steps;

import static org.testng.Assert.assertEquals;

import java.io.IOException;
import java.nio.file.Paths;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginSteps {
	WebDriver driver;
	
	@Before()
	public void setup() throws IOException {
		System.setProperty("webdriver.chrome.driver", Paths.get(System.getProperty("user.dir")).toRealPath() + "\\src\\test\\java\\webdriverUniversityCucumber\\Resources\\chromedriver.exe");
		this.driver = new ChromeDriver();
		this.driver.manage().window().maximize();
		this.driver.manage().timeouts().pageLoadTimeout(120, TimeUnit.SECONDS);
	}
	
	@After()
	public void tearDown() {
		this.driver.manage().deleteAllCookies();
		this.driver.close();
		this.driver.quit();
	}
	
	@Given("^user navigates to \"([^\"]*)\"$")
	public void user_navigates_to(String url) throws Throwable {
		this.driver.get(url);	    
	}

	@When("^user click on the login portal button$")
	public void user_click_on_the_login_portal_button() throws Throwable {
	    this.driver.findElement(By.id("login-portal")).click();
	}

	@And("^user enters the \"([^\"]*)\" username$")
	public void user_enters_the_username(String username) throws Throwable {
	    for(String windowHandle : this.driver.getWindowHandles()) { //for action in new tab
	    	this.driver.switchTo().window(windowHandle);
	    }
	    
	    this.driver.findElement(By.id("text")).sendKeys(username);
	}

	@And("^user enters the \"([^\"]*)\" password$")
	public void user_enters_the_password(String password) throws Throwable {
	   this.driver.findElement(By.id("password")).sendKeys(password);
	}

	@When("^user click on the login button$")
	public void user_click_on_the_login_button() throws Throwable {
	    this.driver.findElement(By.id("login-button")).click();
	}

	@Then("^the user should be presented with the fallowing promp alert \"([^\"]*)\"$")
	public void the_user_should_be_presented_with_the_fallowing_promp_alert(String message) throws Throwable {
	  Alert alert = this.driver.switchTo().alert();
	  assertEquals(alert.getText().toString().toLowerCase().replaceAll("\\s", ""), message.toLowerCase().replaceAll("\\s", ""));
	  alert.accept();
	}

}
