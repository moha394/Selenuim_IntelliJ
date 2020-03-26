package tests;

import java.net.MalformedURLException;
import java.net.URL;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.testng.ITestResult;
import org.testng.annotations.AfterClass;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Optional;
import org.testng.annotations.Parameters;

import data.LoadProperties;
import utilites.Helper;

public class TestBase2 {
	
	
	//Sauce Configuration
	public static final String USERNAME = LoadProperties.SuaceLabuserData.getProperty("username");
	public static final String accessKey = LoadProperties.SuaceLabuserData.getProperty("accesskey");

	public static final String SauseURL = "https://"+USERNAME+":"+accessKey+LoadProperties.SuaceLabuserData.getProperty("selenuimURL");

	//public static final String SauseURL = "https://moha3942014:2ec9c2c8-efe4-4663-a2fc-f8ea6ca17030@ondemand.saucelabs.com:443/wd/hub"+USERNAME+":"+accessKey+LoadProperties.SuaceLabuserData.getProperty("selenuimURL");
	
	public static String BaseURL = "http://demo.nopcommerce.com/";
	
	protected ThreadLocal<RemoteWebDriver> driver = null;
	
	
	@BeforeClass
	@Parameters(value = {"browser"})
	public void setUp(@Optional("firefox") String browser) throws MalformedURLException {
		
		driver = new ThreadLocal<>();
		DesiredCapabilities caps = new DesiredCapabilities();
		caps.setCapability("browserName",browser );
		//driver.set(new RemoteWebDriver(new URL(SauseURL),caps));

		driver.set(new RemoteWebDriver(new URL("http://localhost:4444/wd/hub"),caps));
		get_Driver().navigate().to(BaseURL);
		
		
	}
	public WebDriver get_Driver() {
		return driver.get();
	}
	
	@AfterClass
	public void stop() {
		get_Driver().quit();
		driver.remove();
	}
	@AfterMethod
	public void screemshots(ITestResult result) {
		
		if(result.getStatus() == ITestResult.FAILURE) {
			System.out.println("Faild!!");
			System.out.println("Taking ScreenShots.......");
			Helper.captureScreenshot(get_Driver(), result.getName());
		}
	}
}
