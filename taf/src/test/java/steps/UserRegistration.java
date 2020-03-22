package steps;

import java.util.concurrent.TimeUnit;

import org.testng.Assert;
import org.testng.TestRunner;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import pages.Home_Page;
import pages.UserRegistration_Page;
import tests.TestBase;

public class UserRegistration extends TestBase {

	Home_Page homePbject;
	UserRegistration_Page registerObject;
	
	@Given("^the User in the Home Page$")
	public void the_user_in_homePage() {
		
		homePbject = new Home_Page(driver);
		homePbject.OpenRegistrationPage();
	}
	
	
	
	@When("^I click on Register Link$")
	public void click_on_Register_Link() {
		Assert.assertTrue(driver.getCurrentUrl().contains("register"));
	}
	
	@When("I Entered the UserName Data {string},{string},{string},{string}")
	public void EneterData(String string, String string2, String string3, String string4) throws InterruptedException {
		
		registerObject = new UserRegistration_Page(driver);
		registerObject.RegistrationFill(string, string2, string3, string4, string4);
	
		
	}
	@Then("^The Registration Page Displayed Successfully$")
	public void the_registration_Successfully() {
		homePbject = new Home_Page(driver);
		homePbject.UserLogout();
	}
	
	
}
