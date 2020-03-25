package tests;

import java.util.concurrent.TimeUnit;

import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;

import pages.Home_Page;
import pages.Login_Page;
import pages.UserRegistration_Page;

public class UserRegistrationParallelTesting2 extends TestBase2{

	Home_Page homeObject ;
	UserRegistration_Page RegistrationPageObject ;
	Login_Page loginObjct;

	@DataProvider(name = "testData1")
	public static Object[][] userData1(){
		return new Object[][] {
			{"Mohamed","Ahmed","moh111994@gmail.com","123456"},
			//{"Mohamed","Ahmed","moh11rt112223954@gmail.com","123456"}


		};
	}





	@Test(dataProvider = "testData1")
	public void SuccessfullyRegister(String fname , String lname , String email , String password) throws InterruptedException {


		
		homeObject = new Home_Page(get_Driver());
		homeObject.OpenLoginPage();


		//Login TestCase
		loginObjct= new Login_Page(get_Driver());
		loginObjct.loginUser(email, password);
		loginObjct.checkRememberMe();
		loginObjct.PressLoginButton();
		homeObject.UserLogout();


	}
}
